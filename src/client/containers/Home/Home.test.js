import React from "react";
import { shallow } from "enzyme";
import Home from "./";
import MockProvider from "../../tests/mockProvider";

it("renders without crashing", () => {
  const snap = shallow(
    <MockProvider>
      <Home />
    </MockProvider>
  );
  expect(snap).toMatchSnapshot();
});
