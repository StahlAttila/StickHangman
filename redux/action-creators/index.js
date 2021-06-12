export const levelUp = () => {
    return (dispatch) => {
        dispatch({
            type: "levelUp"
        })
    }
}

export const earnCoin = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "earnCoin",
            payload: amount
        })
    }
}

export const purchase = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "purchase",
            payload: amount
        })
    }
}

export const changeSkin = (skinPackageName) => {
    return (dispatch) => {
        dispatch({
            type: "changeSkin",
            payload: skinPackageName
        })
    }
}

export const earnXp = (xp) => {
    return (dispatch) => {
        dispatch({
            type: "increment",
            payload: xp
        })
    }
}

export const setCurrentXp = (xp) => {
    return (dispatch) => {
        dispatch({
            type: "set",
            payload: xp
        })
    }
}

export const setMaxXp = (xp) => {
    return (dispatch) => {
        dispatch({
            type: "set",
            payload: xp
        })
    }
}