import React from "react";
export const MessageContext = React.createContext({
    messages: [""],
    addMessage: (message: string) => {},
});
