import { snapshot_UNSTABLE } from "recoil";
import { userLoginState, userState } from "./user.atom";

describe("user.atom", () => {
    const initialStateSnapshot = snapshot_UNSTABLE();
    test("should return default value", () => {
        expect(
            initialStateSnapshot.getLoadable(userLoginState).valueOrThrow()
        ).toBe(false);
    });
    test("should return changed value", () => {
        const newStateSnapshot = snapshot_UNSTABLE(({ set }) =>
            set(userState, { id: "1" })
        );
        expect(
            newStateSnapshot.getLoadable(userLoginState).valueOrThrow()
        ).toBe(true);
    });
});
