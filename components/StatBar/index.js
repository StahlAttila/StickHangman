import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StatBar = (props) => {



    const {navigation, currentScreen} = props;
    const [user, setUser] = useState({
        level: 0,
        xp: 0,
        coin: 0,
        skinPackage: ""
    })

    const onPressBack = () => {
        navigation.goBack();
    }

    //AsyncStorage try
    const load = async () => {
        try {
            let result = await AsyncStorage.getItem("user");
            if(result !== null) {
                console.log("reacing this")
                console.log(result)
                result = JSON.parse(result);
                setUser(result)
            }else {
                console.log("loaded user was null")
            }
        } catch (err) {
            console.log(err);
        }
    }

    const onLoad = () => {
        load();
    }

    //TODO come up with a dependency to rerender user details
    useEffect(() => {
        load();
        console.log(currentScreen)
    }, [currentScreen])

    return (
        <View style={styles.statContainer}>
            {currentScreen !== 'menu' &&
            <TouchableOpacity onPress={onPressBack}>
                <MaterialCommunityIcons name={"arrow-left"} size={46}/>
            </TouchableOpacity>
            }
            <View style={styles.levelContainer}>
                <MaterialCommunityIcons name={"chevron-double-up"} size={46} color={"purple"}/>
                <Text style={styles.xpText}>{user.level}</Text>
            </View>
            <View style={styles.coinContainer}>
                <Image source={require('../../assets/coin.png')} style={{ width: 35, height: 35 }}/>
                <Text style={styles.coinText}>{user.coin}</Text>
            </View>
            <TouchableOpacity onPress={() => console.log("menu pressed")}>
                <MaterialCommunityIcons name={"menu"} size={46}/>
            </TouchableOpacity>
        </View>
    );
};

export default StatBar;