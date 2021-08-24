import React, { useContext } from "react";
import { View, Text } from "react-native";
import { MessageContext } from "domains/Message/contexts/messageContext";

const MessageView: React.FC = () => {
    const { messages } = useContext(MessageContext);
    return (
        <View>
            {messages.map((message, key) => (
                <Text key={key}>{message}</Text>
            ))}
        </View>
    );
};

export default MessageView;
