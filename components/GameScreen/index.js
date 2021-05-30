import React, {useEffect, useState} from 'react';
import {View, Text, Image, Button} from 'react-native';
import styles from "./styles";
import StatBar from "../StatBar";
import skinData from "./data"
import RandomWord from "../RandomWord";

const GameScreen = (props) => {
    const {navigation} = props;

    const [currentLife, setCurrentLife] = useState(7);

    const loseLifeHandler = () => {
        if(currentLife > 0) {
            setCurrentLife(previousLife => previousLife - 1);
        }
    }

    const resetLife = () => {
        setCurrentLife(7);
    }

    return (
        <View style={styles.screen}>
            <StatBar navigation = {navigation} currentScreen={'game'} />
            <View style={styles.imageContainer}>
                <Image source={skinData[currentLife].image} style={{ width: 300, height: 300 }}/>
            </View>
            <RandomWord currentLife={currentLife} loseLife={loseLifeHandler} resetLife={resetLife}/>
        </View>
    );
};

export default GameScreen;