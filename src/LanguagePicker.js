import React from "react";
import propTypes from "prop-types";

function LanguagePicker({ setLanguage }) {
  return <div data-test="component-language-picker"></div>;
}

export default LanguagePicker;

LanguagePicker.propTypes = {
  setLanguage: propTypes.func.isRequired,
};
