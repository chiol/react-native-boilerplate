import React from "react";
import MessageInput from "./MessageInput.impl";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

describe("<MessageInput />", () => {
    const component = <MessageInput />;
    describe("Snapshot Testing", () => {
        renderer.create(component);
        test("", () => {});
    });
    describe("UI Testing", () => {
        render(component);
        test("", () => {});
    });
});
