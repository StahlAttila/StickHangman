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