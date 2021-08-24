import React from "react";
import {
    NavigationContainer,
    useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../screens";
import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const AppContainer: React.FC = () => {
    const navigationRef = useNavigationContainerRef();

    return (
        <NavigationContainer ref={navigationRef}>
            <Navigator>
                <Screen
                    name="splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Screen
                    name="login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Screen
                    name="main"
                    component={MainScreen}
                    options={{ headerShown: false }}
                />
            </Navigator>
        </NavigationContainer>
    );
};
export default AppContainer;
