import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Navigator from './routes/homeStack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {clearAllData, initUser} from "./storage/asyncFunctions";

export default function App() {

    async function checkUserExists(){
        try {
            let value = await AsyncStorage.getItem('user');
            if (value === null){
                console.log("check f: value null")
                await initUser();
            } else {
                console.log("check f: value not null")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        //clearAllData();
        checkUserExists();
    }, [])

    return (
        <Navigator/>
    );
};
