import React from "react";
import { StatusBar } from "react-native";
import AppContainer from "./router";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClinet = new QueryClient();
const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClinet}>
            <RecoilRoot>
                <StatusBar barStyle={"dark-content"} />
                <AppContainer />
            </RecoilRoot>
        </QueryClientProvider>
    );
};
export default App;
