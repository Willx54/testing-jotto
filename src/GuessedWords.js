import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
  return <div />;
};

export default GuessedWords;

GuessedWords.propTypes = {
  GuessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};
