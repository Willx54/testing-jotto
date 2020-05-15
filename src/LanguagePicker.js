import React from "react";
import propTypes from "prop-types";

function LanguagePicker({ setLanguage }) {
  const languages = [
    { code: "en", symbol: "&#127468" },
    { code: "cn", symbol: "&#127464" },
  ];
  const languageIcons = languages.map((lang) => (
    <span
      data-test="language-icon"
      key={lang.code}
      onClick={() => setLanguage(lang.code)}
    >
      {lang.symbol}
    </span>
  ));
  return <div data-test="component-language-picker">{languageIcons}</div>;
}

export default LanguagePicker;

LanguagePicker.propTypes = {
  setLanguage: propTypes.func.isRequired,
};
