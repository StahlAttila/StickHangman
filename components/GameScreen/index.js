import React, {useState} from 'react';
import {Image, View} from 'react-native';
import styles from "./styles";
import StatBar from "../StatBar";
import skinData from "./data"
import RandomWord from "../RandomWord";

const GameScreen = (props) => {
    const {navigation} = props;

    const [currentLife, setCurrentLife] = useState(7);

    const loseLifeHandler = () => {
        if (currentLife > 0) {
            setCurrentLife(previousLife => previousLife - 1);
        }
    }

    const resetLife = () => {
        setCurrentLife(7);
    }

    return (
        <View style={styles.screen}>
            <StatBar navigation={navigation} currentScreen={'game'}/>
            <View style={styles.imageContainer}>
                <Image source={skinData[0].image} style={[styles.image, {opacity: currentLife == 0 ? 1 : 0}]}/>
                <Image source={skinData[1].image} style={[styles.image, {opacity: currentLife == 1 ? 1 : 0}]}/>
                <Image source={skinData[2].image} style={[styles.image, {opacity: currentLife == 2 ? 1 : 0}]}/>
                <Image source={skinData[3].image} style={[styles.image, {opacity: currentLife == 3 ? 1 : 0}]}/>
                <Image source={skinData[4].image} style={[styles.image, {opacity: currentLife == 4 ? 1 : 0}]}/>
                <Image source={skinData[5].image} style={[styles.image, {opacity: currentLife == 5 ? 1 : 0}]}/>
                <Image source={skinData[6].image} style={[styles.image, {opacity: currentLife == 6 ? 1 : 0}]}/>
                <Image source={skinData[7].image} style={[styles.image, {opacity: currentLife == 7 ? 1 : 0}]}/>
            </View>
            <RandomWord currentLife={currentLife} loseLife={loseLifeHandler} resetLife={resetLife}/>
        </View>
    );
};

export default GameScreen;