import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("saveComment", () => {
  it("returns correct type", () => {
    expect(saveComment().type).toEqual(SAVE_COMMENT);
  });

  it("returns new comment", () => {
    expect(saveComment("hello world").payload).toEqual("hello world");
  });
});
