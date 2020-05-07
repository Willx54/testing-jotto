import stringsModule from "./strings";
const { getStringByLanguage } = stringsModule;

const strings = {
  en: { submit: "submit" },
  chinese: { submit: "提交" },
  french: {},
};

test("returns correct submit string for english", () => {
  const string = getStringByLanguage("en", "submit", strings);
  expect(string).toBe("submit");
});
test("returns the correct submit string for chinese", () => {
  const string = getStringByLanguage("chinese", "submit", strings);
  expect(string).toBe("提交");
});
test("returns english submit string when language does not exist", () => {
  const string = getStringByLanguage("notALanguage", "submit", strings);
  expect(string).toBe("submit");
});
test("returns english submit string when submit key does not exist for language", () => {
  const string = getStringByLanguage("french", "submit", strings);
  expect(string).toBe("submit");
});
