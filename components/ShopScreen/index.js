import React from 'react';
import {View, SafeAreaView} from 'react-native';
import StatBar from "../StatBar";
import ShopCard from '../ShopCard';
import skins from './skins.js';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../ShopScreen/styles';

const ShopScreen = (props) => {

    const {navigation} = props;

    console.log(skins)

    const myKeyExtractor = (item) => {
        return item.key;
    }

    const renderItem = ({item}) => {
        return <ShopCard skin={item}/>
    }

    return (

            <View style={styles.listArea}>
            <StatBar navigation={navigation} currentScreen={'shop'}/>
            
                <FlatList
                    data={skins}
                    renderItem={renderItem}
                    keyExtractor={myKeyExtractor}
                    numColumns={2}
                    style={styles.list}
                />
            </View>
    );
};

export default ShopScreen;