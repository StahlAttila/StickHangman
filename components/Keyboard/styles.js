import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    letter: {
        fontFamily: 'IndieFlower',
        fontSize: 28,
        minWidth: 30,
        maxWidth: 30,
        marginBottom: 2,
        paddingLeft: 5,
        marginHorizontal: "auto",
        color: "rgb(212, 214, 213)",
    },
    letterPushed: {
        fontFamily: 'IndieFlower',
        fontSize: 28,
        minWidth: 30,
        maxWidth: 30,
        marginBottom: 2,
        paddingLeft: 5,
        marginHorizontal: "auto",
        color: "black"
    },
    letterContainer: {
        borderWidth: 3,
        borderRadius: 5,
        borderColor: "rgb(181, 130, 63)",
        width: 35,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 5,
        backgroundColor: "rgb(27, 56, 27)"
    },
    letterContainerPushed: {
        borderWidth: 2,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 5,
        backgroundColor: "grey"
    },
    lettersRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 15,
        width: "100%"
    },
    modalContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%"
    },
    modalContentContainer: {
        borderTopWidth: 3,
        backgroundColor: "rgba(255, 247, 229, 0.8)",
        height: 240,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    rewardContainer: {
        height: "70%",
        justifyContent: "space-around"
    },
    coinContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        color: "black",
        fontSize: 36
    }

});

export default styles;