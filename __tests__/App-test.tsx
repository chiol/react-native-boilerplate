/**
 * @format
 */

import React from "react";
import "react-native";
import App from "../src/App";
import renderer from "react-test-renderer";

it("renders correctly", () => {
    renderer.create(<App />).toJSON();
});
