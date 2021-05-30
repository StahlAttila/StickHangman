import React from 'react';
import {View, Text} from 'react-native';
import StatBar from "../StatBar";

const ShopScreen = (props) => {

    const {navigation} = props;

    return (
        <View>
            <StatBar navigation={navigation} currentScreen={'shop'}/>
            <Text>SHOP SCREEN</Text>
        </View>
    );
};

export default ShopScreen;