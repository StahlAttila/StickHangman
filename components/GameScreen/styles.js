import { StyleSheet} from "react-native";
import {rgbaColor} from "react-native-reanimated/src/reanimated2/Colors";

const styles = StyleSheet.create({
    imageContainer: {
        marginTop: 50,
        width: 300,
        height: 300,
    },
    screen: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        position: "absolute",
        width: 300, height: 300
    }
});

export default styles;