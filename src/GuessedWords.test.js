import React from "react";
import { shallow } from "enzyme";
import { EnzymeAdapter } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  GuessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};
/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 * */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  test("renders without error", () => {
    const setup = wrapper({ guessedWords: [] });
  });
  test("renders instructions to guess a word", () => {});
});

describe("if there are words guessed", () => {});
