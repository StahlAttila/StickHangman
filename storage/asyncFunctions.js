import AsyncStorage from "@react-native-async-storage/async-storage";

export async function initUser() {
    try {
        const newUser = {
            level: 1,
            xp: 0,
            coin: 0,
            skinPackage: "default"
        };
        await AsyncStorage.setItem("user", JSON.stringify(newUser))

    } catch (err) {
        alert(err);
    }
}

export async function loadUser(key) {
    try {
        let userDetails = await AsyncStorage.getItem(key)

        if (userDetails !== null) {
            userDetails = JSON.parse(userDetails);
            return userDetails;
        }

        return null;
    } catch (err) {
        alert(err)
    }
}

export async function save(key, object) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(object));
    } catch (err) {
        console.log(err);
    }
}

export async function clearAllData() {
    await AsyncStorage.clear();
}
