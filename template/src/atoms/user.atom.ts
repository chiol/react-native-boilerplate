import { atom, selector } from "recoil";

type UserStateType = {
    id: string;
};

export const userState = atom<UserStateType>({
    key: "userState",
    default: {
        id: "",
    },
});

export const userLoginState = selector({
    key: "isLoggined",
    get: ({ get }) => get(userState).id !== "",
});
