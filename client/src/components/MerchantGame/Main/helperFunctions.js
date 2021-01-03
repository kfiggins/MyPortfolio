import { goods, GOODS_PERCENT_CHANGE_PER_ROUND } from "./initialState";

// HELPERS
export function getGoodByLocation(location) {
  return goods.find((good) => good.id === location.goodTypeId);
}

export function getTotalGoodsAmountByLocation(location) {
  return location.buildings.reduce((acc, cur) => {
    return acc + cur.currentResources;
  }, 0);
}

export function updateGoodsPricesOnLocations(locations) {
  const newLocations = locations.map((location) => {
    let newGoodsPrices = {};
    goods.map((good) => {
      const maxMinDiff = good.maxPrice - good.minPrice;
      const currentPrice = location.goodsPrices[good.id];
      const randomPositiveNegative = Math.random() > 0.5 ? 1 : -1;
      const nextGoodPrice =
        currentPrice +
        maxMinDiff *
          Math.random() *
          GOODS_PERCENT_CHANGE_PER_ROUND *
          randomPositiveNegative;
      //TODO: Refactor this ugly ternary.
      const finalGoodPrice =
        nextGoodPrice > good.maxPrice
          ? good.maxPrice
          : nextGoodPrice < good.minPrice
          ? good.minPrice
          : nextGoodPrice;
      newGoodsPrices[good.id] = finalGoodPrice;
    });
    return {
      ...location,
      goodsPrices: newGoodsPrices,
    };
  });
  return newLocations;
}

export function updateBuildingsOnLocations(locations) {
  const newLocations = locations.map((location) => {
    if (location.buildings.length <= 0) return location;
    const newBuildings = location.buildings.map((building) => ({
      ...building,
      currentResources: building.currentResources + 10,
    }));
    return { ...location, buildings: newBuildings };
  });
  return newLocations;
}
