import React from "react";
import styled from "@emotion/native";
import { ITextInputBox } from "./TextInputBox.interface";

const TextInputBox: React.FC<ITextInputBox.IProps> = ({
    value,
    onChagneText,
}) => {
    return <TextInput value={value} onChangeText={onChagneText} />;
};

const TextInput = styled.TextInput`
    width: 250px;
    height: 30px;
    border: 1px;
`;

export default TextInputBox;
