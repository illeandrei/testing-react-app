import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import CommentBox from "components/CommentBox";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("has a textarea and a button", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
});

describe("the textarea", () => {
  beforeEach(() => {
    wrapper
      .find("textarea")
      .simulate("change", { target: { value: "new comment" } })
      .update();
  });

  it("has a textarea that users can type in", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
  });

  it("empties the textarea after form submit", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
    wrapper.find("form").simulate("submit");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
