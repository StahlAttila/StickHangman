import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from "./styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const StyledButton = (props) => {

    const {type, icon, onPress, color, height, iconSize, iconColor} = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, {backgroundColor: color, height: height}]}
                onPress={onPress}>
                <MaterialCommunityIcons name={icon} size={iconSize} color={iconColor} />
            </TouchableOpacity>
        </View>
    );
};

export default StyledButton;