import moxios from "moxios";

import { storeFactory } from "../test/testUtils";
import { getSecretWord } from "./";

describe("getSecretWord action creator", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("adds response word to state", () => {
    const secretWord = "party";
    const store = storeFactory();
  });
});
