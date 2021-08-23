import { atom } from "recoil";

type UserStateType = {
    loggined: boolean;
    id: string;
};

export const userState = atom<UserStateType>({
    key: "userState",
    default: {
        loggined: false,
        id: "",
    },
});
