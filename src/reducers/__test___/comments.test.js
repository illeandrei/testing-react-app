import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles action of type SAVE_COMMENT", function() {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

it("handles action with unknow type", function() {
  const newState = commentsReducer([], { type: "UNKNOWN" });
  expect(newState).toEqual([]);
});
