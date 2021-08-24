import React, { useState, useContext } from "react";
import styled from "@emotion/native";
import { MessageContext } from "domains/Message/contexts/messageContext";

const MessageInput: React.FC = () => {
    const [text, setText] = useState<string>("");
    const { addMessage } = useContext(MessageContext);

    return (
        <Container>
            <ChatInput value={text} onChangeText={e => setText(e)} />
            <SubmitButton title="제출" onPress={() => addMessage(text)} />
        </Container>
    );
};
const Container = styled.View`
    flex-direction: row;
    width: 100%;
    height: 100%;
`;
const ChatInput = styled.TextInput`
    flex: 1 1 auto;
    border: 1px;
`;
const SubmitButton = styled.Button`
    flex: 0 0 30px;
`;

export default MessageInput;
