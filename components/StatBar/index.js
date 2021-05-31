import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./styles";
import {useSelector} from "react-redux";

const StatBar = (props) => {
    const {navigation, currentScreen} = props;

    const {coin, level} = useSelector((state) => state);

    const onPressBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.statContainer}>
            {currentScreen !== 'menu' &&
            <TouchableOpacity onPress={onPressBack}>
                <MaterialCommunityIcons name={"arrow-left"} size={46}/>
            </TouchableOpacity>
            }
            <View style={styles.levelContainer}>
                <MaterialCommunityIcons name={"chevron-double-up"} size={46} color={"purple"}/>
                <Text style={styles.xpText}>{level}</Text>
            </View>
            <View style={styles.coinContainer}>
                <Image source={require('../../assets/coin.png')} style={{width: 35, height: 35}}/>
                <Text style={styles.coinText}>{coin}</Text>
            </View>
            <TouchableOpacity onPress={() => console.log("menu pressed")}>
                <MaterialCommunityIcons name={"menu"} size={46}/>
            </TouchableOpacity>
        </View>
    );
};

export default StatBar;