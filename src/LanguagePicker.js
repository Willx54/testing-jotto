import React from "react";
import propTypes from "prop-types";

function LanguagePicker({ setLanguage }) {
  const languages = [
    { code: "en", symbol: "ENGLISH" },
    { code: "cn", symbol: "CHINESE" },
  ];
  const languageIcons = languages.map((lang) => (
    <span
      data-test="language-icon"
      style={{ marginRight: "20px", cursor: "pointer" }}
      key={lang.code}
      onClick={() => setLanguage(lang.code)}
    >
      {lang.symbol}
    </span>
  ));
  return (
    <div data-test="component-language-picker" style={{ marginBottom: "20px" }}>
      {languageIcons}
    </div>
  );
}

export default LanguagePicker;

LanguagePicker.propTypes = {
  setLanguage: propTypes.func.isRequired,
};
