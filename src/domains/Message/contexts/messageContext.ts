import React from "react";

export const MessageContext = React.createContext({
    messages: [""],
    addMessage: (_: string) => {},
});
