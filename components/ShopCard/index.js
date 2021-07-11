import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const ShopCard = (props) => {

    const {name, image, lvl, price} = props.skin;

    return (
        <View style={styles.cardContainer}>
            <Image 
                source={image}
                style={[styles.image]}>
            </Image>
            <View style={styles.nameContainer}>
                <Text style={styles.text}>{name}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.text}>Lvl: {lvl}</Text>
                <View style={styles.coinContainer}>
                    <Image 
                        source={require('../../assets/coin.png')} 
                        style={{width: 20, height: 20}}/>
                    <Text style={styles.text}>{price}</Text>
                </View>
            </View>
        </View>
    );
};

export default ShopCard;