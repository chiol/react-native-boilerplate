import React from "react";
import MssageTemplate from "./MssageTemplate.impl";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

describe("<MssageTemplate />", () => {
    const component = <MssageTemplate />;
    describe("Snapshot Testing", () => {
        renderer.create(component);
    });
    describe("UI Testing", () => {
        const { findByText } = render(component);
        test("", () => {
            const title = findByText("using contexts");
            expect(title).toBeTruthy();
        });
    });
});
