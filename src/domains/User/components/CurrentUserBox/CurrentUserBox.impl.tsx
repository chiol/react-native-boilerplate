import React from "react";
import styled from "@emotion/native";
import { useRecoilValue } from "recoil";
import { Text } from "react-native";
import TitleText from "common/components/TitleText";
import { userState } from "@/atoms/user.atom";

const CurrentUserBox: React.FC = () => {
    const state = useRecoilValue(userState);
    return (
        <Container>
            <TitleText title="global state" />
            <Text>{JSON.stringify(state)}</Text>
        </Container>
    );
};

const Container = styled.View`
    flex-direction: column;
    justify-content: center;
`;
export default CurrentUserBox;
