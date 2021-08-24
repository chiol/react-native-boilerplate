import React from "react";
import styled from "@emotion/native";
import { CurrentUserBox, ModifyUser } from "@User/components";
import { ProductList } from "@Product/components";
import { MessageTemplate } from "@Message/components";

const MainScreen: React.FC = () => {
    return (
        <Container>
            <LeftTop>
                <CurrentUserBox />
            </LeftTop>
            <RightTop>
                <ProductList />
            </RightTop>
            <LeftBottom>
                <MessageTemplate />
            </LeftBottom>
            <RightBottom>
                <ModifyUser />
            </RightBottom>
        </Container>
    );
};
const Container = styled.SafeAreaView`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
`;
const BaseView = styled.View`
    flex: 1 0 40%;
    border: 1px;
    margin: 5px;
    height: 30%;
`;
const LeftTop = styled(BaseView)``;
const RightTop = styled(BaseView)``;
const LeftBottom = styled(BaseView)``;
const RightBottom = styled(BaseView)``;

export default MainScreen;
