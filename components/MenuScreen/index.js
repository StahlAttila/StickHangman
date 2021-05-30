import React, {useEffect} from 'react';
import {View, Image} from 'react-native';

import styles from "./styles";
import StatBar from "../StatBar";
import StyledButton from "../StyledButton";

const MenuScreen = (props) => {

    const {navigation} = props;
    const onPlayButtonPressed = () => {
        navigation.navigate('Game');
    }

    const onShopButtonPressed = () => {
        navigation.navigate('Shop')
    }

    return (
        <View style={styles.screen}>
            <StatBar navigation = {navigation} currentScreen={'menu'}/>
            <Image source={require("../../assets/hangman_logo.png")} style={{ width: 450, height: 450 }}/>
            <View style={styles.buttonContainer}>
                <StyledButton
                    icon={"play"}
                    iconSize={100}
                    iconColor={"#fff"}
                    onPress={onPlayButtonPressed}
                    height={100}
                    color={"#277523"}
                />
                <StyledButton
                    icon={"cart"}
                    iconSize={30}
                    iconColor={"white"}
                    onPress={onShopButtonPressed}
                    height={50}
                    color={"#752323"}
                />
            </View>
        </View>
    );
};

export default MenuScreen;