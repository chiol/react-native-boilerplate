import React from "react";
import App from "./App";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

describe("<App />", () => {
    const component = <App />;
    describe("Snapshot Testing", () => {
        renderer.create(component);
        test("", () => {});
    });
    describe("UI Testing", () => {
        render(component);
        test("", () => {});
    });
});
