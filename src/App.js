import React, { Component } from "react";
import "./App.css";

/**
 * reducer to update state
 * state {object} - existing state
 * action {object} - contains 'type' and 'payload' properties for the state update
 *                    for example: { type: "setSecretWord", payload: "party" }
 */
function reducer(state, action) {}

function App() {
  return <div data-test="component-app"></div>;
}

export default App;
