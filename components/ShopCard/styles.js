import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 4,
        borderColor: "rgb(219, 170, 35)",
        borderRadius: 10,
        marginTop: 30,
        margin: 10,
        width: "35%",
        height: "35%",
        backgroundColor: "rgb(27, 56, 27)"
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopWidth: 3,
        borderColor: "rgb(219, 170, 35)",
    },
    image: {
        width: "100%",
        height: "55%",
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },

    text: {
        fontFamily: "chalkboard",
        fontSize: 16,
        color: "rgb(212, 214, 213)",
    },

    coinContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },

    detailsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    }
});

export default styles;