import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import Routes from "./Routes";
import { Home } from "./containers";

describe("Routes", () => {
  it("default path should redirect to Home component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <Routes />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });
});
