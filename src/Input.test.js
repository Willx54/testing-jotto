import React from "react";
import { mount } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";
import languageContext from "./contexts/languageContext";
import successContext from "./contexts/successContext";

/**
 * Create ReactWrapper for Input component testing
 * @param {object} testValues - Context and props values for this specific test.
 * @returns {ReactWrapper} - Wrapper for Input component and providers
 */
const setup = ({ language, secretWord, success }) => {
  language = language || "en";
  secretWord = secretWord || "party";
  success = success || false;

  return mount(
    <languageContext.Provider value={language}>
      <successContext.SuccessProvider value={[success, jest.fn()]}>
        <Input secretWord={secretWord} />
      </successContext.SuccessProvider>
    </languageContext.Provider>
  );
};

test("Input renders without error", () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { secretWord: "party" };
  checkProps(Input, expectedProps);
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup({});
  });
  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
  test("setCurrentGuess gets called when submit button clicked", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");

    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});

describe("languagePicker", () => {
  test("correctly renders submit string in english", () => {
    const wrapper = setup({ language: "en" });
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton.text()).toBe("Submit");
  });
  test("correctly renders congrats string in chinese", () => {
    const wrapper = setup({ language: "cn" });
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton.text()).toBe("提交");
  });
});

test("input component does not show when success is true", () => {
  const wrapper = setup({ secretWord: "party", success: true });
  expect(wrapper.isEmptyRender()).toBe(true);
});
