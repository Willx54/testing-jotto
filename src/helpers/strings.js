const languageStrings = {
  en: {
    congrats: "Congratulations! You guessed the word!",
    submit: "Submit",
    guessPrompt: "Try to guess the secret word!",
    guessInputPlaceholder: "enter guess",
    guessColumnHeader: "Guessed Words",
    guessedWords: "Guesses",
    matchingLettersColumnHeader: "Matching Letters",
  },
  chinese: {
    congrats: "恭喜你！ 你猜对了",
    submit: "提交",
    guessPrompt: "尝试猜测这个秘密词！",
    guessInputPlaceholder: "输入猜测",
    guessColumnHeader: "猜词",
    guessedWords: "猜想",
    matchingLettersColumnHeader: "匹配字母",
  },
};

function getStringByLanguage(
  languageCode,
  stringKey,
  strings = languageStrings
) {
  if (!strings[languageCode] || !strings[languageCode][stringKey]) {
    // fall back to english
    return strings.en[stringKey];
  }
  return strings[languageCode][stringKey];
}

// future mocking
export default {
  getStringByLanguage,
};
