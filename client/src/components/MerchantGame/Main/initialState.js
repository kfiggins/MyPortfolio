import {
  updateGoodsPricesOnLocations,
  updateBuildingsOnLocations,
  getGoodByLocation,
  getTotalGoodsAmountByLocation,
} from "./helperFunctions";

// Goods
export const goods = [
  {
    id: 1,
    name: "Wood 🌳",
    minPrice: 20,
    maxPrice: 60,
    buildingName: "Lumber Yard",
    buildingCost: 2000,
  },
  {
    id: 2,
    name: "Gold ⛏",
    minPrice: 100,
    maxPrice: 500,
    buildingName: "Gold Mine",
    buildingCost: 15000,
  },
  {
    id: 3,
    name: "Food 🌽",
    minPrice: 10,
    maxPrice: 25,
    buildingName: "Farm",
    buildingCost: 850,
  },
  {
    id: 4,
    name: "Stone 🔥",
    minPrice: 50,
    maxPrice: 200,
    buildingName: "Quarry",
    buildingCost: 6250,
  },
];

// CONSTS
export const GOODS_PERCENT_CHANGE_PER_ROUND = 0.1;
export const AMOUNT_OF_ROUNDS = 52;

// Initial State
export const initialState = {
  bankAmount: 50,
  round: 1,
  currentLocationId: 3,
  nextLocationId: undefined,
  ownedGoods: { 1: 0, 2: 0, 3: 0, 4: 0 },
  locations: [
    {
      name: "The Shire",
      id: 3,
      goodTypeId: 3,
      goodsPrices: { 1: 27, 2: 110, 3: 13, 4: 55 },
      buildings: [],
    },
    {
      name: "Mirkwood",
      id: 1,
      goodTypeId: 1,
      goodsPrices: { 1: 24, 2: 105, 3: 15, 4: 52 },
      buildings: [],
    },
    {
      name: "Mordor",
      id: 4,
      goodTypeId: 4,
      goodsPrices: { 1: 28, 2: 110, 3: 17, 4: 57 },
      buildings: [],
    },
    {
      name: "Mines of Moria",
      id: 2,
      goodTypeId: 2,
      goodsPrices: { 1: 26, 2: 110, 3: 17, 4: 53 },
      buildings: [],
    },
  ],
};

// Reducer
export function gameStateReducer(state, action) {
  switch (action.type) {
    case "INCREMENT_ROUND": {
      const newLocations = updateGoodsPricesOnLocations(state.locations);
      const finalLocations = updateBuildingsOnLocations(newLocations);
      return {
        ...state,
        round: state.round + 1,
        bankAmount: state.bankAmount * 1.01,
        currentLocationId: state.nextLocationId || state.currentLocationId,
        nextLocationId: undefined,
        locations: finalLocations,
      };
    }
    case "BUY_GOOD": {
      const currentGoodPrice = state.locations.find(
        (location) => location.id === state.currentLocationId
      ).goodsPrices[action.value];
      if (state.bankAmount < currentGoodPrice) return state;
      return {
        ...state,
        bankAmount: state.bankAmount - currentGoodPrice,
        ownedGoods: {
          ...state.ownedGoods,
          [action.value]: state.ownedGoods[action.value] + 1,
        },
      };
    }
    case "BUY_MAX_GOOD": {
      const currentGoodPrice = state.locations.find(
        (location) => location.id === state.currentLocationId
      ).goodsPrices[action.value];
      if (state.bankAmount < currentGoodPrice) return state;
      const itemAmount = Math.floor(state.bankAmount / currentGoodPrice);
      return {
        ...state,
        bankAmount: state.bankAmount - itemAmount * currentGoodPrice,
        ownedGoods: {
          ...state.ownedGoods,
          [action.value]: state.ownedGoods[action.value] + itemAmount,
        },
      };
    }
    case "SELL_GOOD": {
      const currentGoodPrice = state.locations.find(
        (location) => location.id === state.currentLocationId
      ).goodsPrices[action.value];
      if (state.ownedGoods[action.value] <= 0) return state;
      return {
        ...state,
        bankAmount: state.bankAmount + currentGoodPrice,
        ownedGoods: {
          ...state.ownedGoods,
          [action.value]: state.ownedGoods[action.value] - 1,
        },
      };
    }
    case "SELL_MAX_GOOD": {
      const currentGoodPrice = state.locations.find(
        (location) => location.id === state.currentLocationId
      ).goodsPrices[action.value];
      if (state.ownedGoods[action.value] <= 0) return state;
      const itemAmount = state.ownedGoods[action.value];
      return {
        ...state,
        bankAmount: state.bankAmount + itemAmount * currentGoodPrice,
        ownedGoods: {
          ...state.ownedGoods,
          [action.value]: state.ownedGoods[action.value] - itemAmount,
        },
      };
    }
    case "TRAVEL": {
      if (state.currentLocationId === action.value) return state;
      return {
        ...state,
        nextLocationId: action.value,
      };
    }
    case "BUY_BUILDING": {
      let newBankAmount = state.bankAmount;
      const newLocations = state.locations.map((location) => {
        if (state.currentLocationId !== location.id) return location;
        const goodOnLocation = getGoodByLocation(location);
        if (state.bankAmount < goodOnLocation.buildingCost) {
          return location;
        }
        newBankAmount = state.bankAmount - goodOnLocation.buildingCost;
        const newBuildings = [...location.buildings, { currentResources: 0 }];
        return { ...location, buildings: newBuildings };
      });
      return {
        ...state,
        bankAmount: newBankAmount,
        locations: newLocations,
      };
    }
    case "GATHER_GOODS": {
      const currentLocation = action.value;
      const totalGoodsAtLocation = getTotalGoodsAmountByLocation(
        currentLocation
      );
      const newGoodsAmount =
        state.ownedGoods[currentLocation.goodTypeId] + totalGoodsAtLocation;
      const newOwnedGoods = {
        ...state.ownedGoods,
        [currentLocation.goodTypeId]: newGoodsAmount,
      };

      const newLocations = state.locations.map((location) => {
        if (location.id !== state.currentLocationId) return location;
        const newBuildings = location.buildings.map((building) => ({
          ...building,
          currentResources: 0,
        }));
        return { ...location, buildings: newBuildings };
      });
      return { ...state, ownedGoods: newOwnedGoods, locations: newLocations };
    }
    default:
      return state;
  }
}
