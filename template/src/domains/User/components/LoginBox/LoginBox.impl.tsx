import React, { useState } from "react";
import styled from "@emotion/native";
import { TextInputBox } from "../../../../common/components";
import { Button } from "react-native";
import { useRecoilState } from "recoil";
import { useNavigation } from "@react-navigation/native";
import { userState } from "@/atoms/user.atom";

const LoginBox: React.FC = () => {
    const navigation = useNavigation();
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [_, setUserState] = useRecoilState(userState);

    const onPress = () => {
        console.log({ id, password });
        setUserState({ id });
        navigation.navigate("main");
    };
    return (
        <Container>
            <TextInputBox value={id} onChagneText={setId} />
            <TextInputBox value={password} onChagneText={setPassword} />
            <Button title={"login"} onPress={onPress} />
        </Container>
    );
};
const Container = styled.View``;
export default LoginBox;
