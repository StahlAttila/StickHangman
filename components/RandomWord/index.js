import React, {useEffect, useRef, useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import randomWords from "random-words"
import styles from "./styles";
import Keyboard from "../Keyboard";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../../redux/action-creators";

const RandomWord = (props) => {

    const initWordToGuess = randomWords();
    const initHiddenWord = hideWord(initWordToGuess);
    const {currentLife, loseLife, resetLife} = props;
    const [gameState, setGameState] = useState({
        state: "Won",
        gameOver: false,
        wordToGuess: initWordToGuess,
        hiddenWord: initHiddenWord
    });
    const dispatch = useDispatch();
    const {levelUp, earnCoin, purchase, changeSkin} = bindActionCreators( actionCreators, dispatch);

    function hideWord(wordToHide) {
        let initHiddenWord = "";

        for (let c in wordToHide) {
            initHiddenWord += "_"
        }

        return initHiddenWord;
    }

    const makeGuess = (guess) => {

        let revealedWord = gameState.hiddenWord;
        let isGuessGood = false;
        for (let i = 0; i < gameState.wordToGuess.length; i++) {
            if (gameState.wordToGuess.charAt(i) === guess) {
                revealedWord = setCharAt(revealedWord, i, guess)
                isGuessGood = true
            }
        }
        console.log(gameState.wordToGuess);
        console.log(gameState.hiddenWord);

        if (!isGuessGood) {
            loseLife();
            if (currentLife === 1) {
                setGameState({...gameState, gameOver: true, state: "Lost"})
                return;
            }
        }

        setGameState({...gameState, hiddenWord: revealedWord})
        if (revealedWord === gameState.wordToGuess) {
            setGameState({...gameState, gameOver: true, state: "Won"});
            levelUp();
            earnCoin(123);
        }
    }

    function setCharAt(str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substring(0, index) + chr + str.substring(index + 1);
    }

    const reset = () => {
        const newWord = randomWords();
        const newHiddenWord = hideWord(newWord);

        resetLife();
        setGameState({
            ...gameState,
            state: "Won",
            gameOver: false,
            wordToGuess: newWord,
            hiddenWord: newHiddenWord
        })
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.hiddenWord, {fontSize: gameState.hiddenWord.length < 9 ? 52 : 48}]}>{gameState.gameOver ? gameState.wordToGuess : gameState.hiddenWord}</Text>
            <Keyboard makeGuess={makeGuess} gameState={gameState} reset={reset}/>
        </View>
    )
};

export default RandomWord;