import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";

import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";

/**
 * Setup function for input component.
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Input />);
};

test("Input renders without error", () => {
  const wrapper = setup({ word: "train" });
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { word: "train" };
  checkProps(Input, expectedProps);
});
