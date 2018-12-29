import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import CommentList from "components/CommentList";

let wrapper;

beforeEach(() => {
  const initialState = {
    comments: ["mock 1", "mock 2"]
  };

  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("creates an li per comment", () => {
  expect(wrapper.find("li").length).toEqual(2);
});

it("renders correct text for each li", () => {
  expect(wrapper.render().text()).toContain("mock 1");
  expect(wrapper.render().text()).toContain("mock 2");
});
