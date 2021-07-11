import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    text: {
        fontSize: 26,
        fontFamily: "chalkboard"
    },
    statContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-around",
        marginTop: '20%'
    },
    coinContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    levelContainer: {
        flexDirection: "row",
        alignItems: "center",
    }
});

export default styles;