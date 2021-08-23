import React, { useState } from "react";
import styled from "@emotion/native";
import TitleText from "common/components/TitleText";
import MessageView from "../MessageView";
import MessageInput from "../MessageInput";
import { MessageContext } from "domains/Message/contexts/messageContext";

const MssageTemplate: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const addMessage = (message: string) => {
        setMessages(prevState => [...prevState, message]);
    };
    return (
        <MessageContext.Provider value={{ messages, addMessage }}>
            <Container>
                <TitleText title="using contexts" />
                <ViewBox>
                    <MessageView />
                </ViewBox>
                <InputBox>
                    <MessageInput />
                </InputBox>
            </Container>
        </MessageContext.Provider>
    );
};

const Container = styled.View`
    flex-direction: column;
    height: 100%;
`;
const ViewBox = styled.View`
    flex: 5;
    border: 1px;
`;
const InputBox = styled.View`
    flex: 1;
    border: 1px;
`;
export default MssageTemplate;
