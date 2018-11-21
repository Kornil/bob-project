import React from "react";
import { shallow } from "enzyme";
import Home from "./";

it("renders without crashing", () => {
  const snap = shallow(<Home />);
  expect(snap).toMatchSnapshot();
});
