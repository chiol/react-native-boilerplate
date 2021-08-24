import React from "react";
import { View } from "react-native";
import styled from "@emotion/native";
import { ITitleText } from "./TitleText.interface";

const TitleText: React.FC<ITitleText.IProps> = ({ title }) => {
    return (
        <Container>
            <Text>{title}</Text>
        </Container>
    );
};
const Container = styled.View`
    align-items: center;
`;
const Text = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

export default TitleText;
