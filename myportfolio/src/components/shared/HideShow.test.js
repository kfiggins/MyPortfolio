import React from "react";
import { shallow } from "enzyme";
import HideShow from "./HideShow";

const children = ({ on, hide, show }) => <div />;

it("renders without crashing", () => {
  shallow(<HideShow children={children} />);
});

it("on is default set to false", () => {
  const component = shallow(<HideShow children={children} />);
  expect(component.state("on")).toEqual(false);
});

it("show method changes on to true", () => {
  const component = shallow(<HideShow children={children} />);
  component.instance().show();
  expect(component.state("on")).toEqual(true);
});

it("hide method changes on to false", () => {
  const component = shallow(<HideShow children={children} />);
  component.instance().show();
  component.instance().hide();
  expect(component.state("on")).toEqual(false);
});
