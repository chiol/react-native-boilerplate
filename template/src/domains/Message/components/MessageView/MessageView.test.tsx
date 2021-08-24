import React from "react";
import MessageView from "./MessageView.impl";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

describe("<MessageView />", () => {
    const component = <MessageView />;
    describe("Snapshot Testing", () => {
        renderer.create(component);
        test("", () => {});
    });
    describe("UI Testing", () => {
        render(component);
        test("", () => {});
    });
});
