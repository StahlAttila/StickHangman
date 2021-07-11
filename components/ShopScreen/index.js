import React from 'react';
import {View, Text} from 'react-native';
import StatBar from "../StatBar";
import ShopCard from '../ShopCard';
import skins from './skins.js';

const ShopScreen = (props) => {

    const {navigation} = props;

    return (
        <View>
            <StatBar navigation={navigation} currentScreen={'shop'}/>
            <ShopCard skin={skins[0]}/>
        </View>
    );
};

export default ShopScreen;