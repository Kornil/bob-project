import * as actions from "./counterActions";
import { INCREMENT, DECREMENT } from "./types";

describe("Counter actions", () => {
  it("should handle INCREMENT counter", () => {
    const expectedAction = {
      type: INCREMENT
    };
    expect(actions.addToCounter()).toEqual(expectedAction);
  });
  it("should handle DECREMENT counter", () => {
    const expectedAction = {
      type: DECREMENT
    };
    expect(actions.removeFromCounter()).toEqual(expectedAction);
  });
});
