import React from "react";
import styled from "@emotion/native";
import { CurrentUserBox, ModifyUser } from "domains/User/components";
import { ProductList } from "domains/Product/components";
import { MessageTemplate } from "domains/Message/components";

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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
const BaseView = styled.View`
    height: 40%;
    border: 1px;
    flex: 1 1 40%;
    margin: 5px;
`;
const LeftTop = styled(BaseView)``;
const RightTop = styled(BaseView)``;
const LeftBottom = styled(BaseView)``;
const RightBottom = styled(BaseView)``;

export default MainScreen;
