import React, { useState } from "react";
import styled from "@emotion/native";
import { LoginBox } from "../../domains/User/components";

const LoginScreen: React.FC = () => {
    return (
        <Container>
            <TotalBox>
                <TopBox>
                    <TitleText>IBCT-BOILERPLATE</TitleText>
                </TopBox>
                <BottomBox>
                    <LoginBox />
                </BottomBox>
            </TotalBox>
        </Container>
    );
};
const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    background-color: white;
    align-items: center;
    justify-content: center;
`;
const TotalBox = styled.View`
    width: 300px;
    height: 300px;
    border: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const TopBox = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
const TitleText = styled.Text`
    font-size: 20px;
`;
const BottomBox = styled.View`
    flex: 1;
`;

export default LoginScreen;
