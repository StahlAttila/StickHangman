import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './routes/homeStack';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native'
import chalkboard from './assets/fonts/chalkboard.ttf';


export default function App() {

    let [fontsLoaded] = useFonts({
        chalkboard,
    });

    if(!fontsLoaded) {
        console.log("loading")
        return <ActivityIndicator/>;
        
    }else{
        console.log("loaded")
        return (
            <Provider store={store}>
                <Navigator/>
            </Provider>
        );
    }
};
