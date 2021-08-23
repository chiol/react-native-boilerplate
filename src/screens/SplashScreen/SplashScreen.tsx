import React, { useEffect } from "react";
import { Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styled from "@emotion/native";
import { useRecoilValue } from "recoil";
import { userState } from "atoms/UserState";

interface ISplashScreenProps {
    navigation: NativeStackNavigationProp<any>;
}

const SplashScreen: React.FC<ISplashScreenProps> = ({ navigation }) => {
    const user = useRecoilValue(userState);

    useEffect(() => {
        const tempInterval = setInterval(() => {
            if (!user.loggined) {
                navigation.navigate({ name: "login", params: null });
            } else {
                navigation.navigate({ name: "home", params: null });
            }
            clearInterval(tempInterval);
        }, 1000);
    }, []);

    return (
        <Container>
            <Text>IBCT</Text>
        </Container>
    );
};
const Container = styled.SafeAreaView`
    background: white;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export default SplashScreen;
