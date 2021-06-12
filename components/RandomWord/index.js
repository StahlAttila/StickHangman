import React, {useEffect, useRef, useState } from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import randomWords from "random-words"
import styles from "./styles";
import Keyboard from "../Keyboard";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
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
        hiddenWord: initHiddenWord,
        reward: {
            coin: 0,
            xp: 0,
        }
    });
    const dispatch = useDispatch();
    const {levelUp, earnCoin, setCurrentXp, earnXp, setMaxXp } = bindActionCreators( actionCreators, dispatch);

    const { level, currentXp, maxXp } = useSelector(state => state);

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
                setGameState({...gameState, gameOver: true, state: "Lost"});
                return;
            }
        }

        setGameState({...gameState, hiddenWord: revealedWord});

        if (revealedWord === gameState.wordToGuess) {
            
            const gameReward = calculateReward(revealedWord, currentLife, );
            setGameState({...gameState, gameOver: true, state: "Won", reward: gameReward});
            console.log(gameReward);
            // check if player leveled up and stuffs like that
            levelProgression(gameReward.xp);
            earnCoin(gameReward.coin);
        }
    }

    const levelProgression = (earnedXp) => {
        console.log(`earned: ${earnedXp}, level: ${level}, current: ${currentXp}, max: ${maxXp}`);
        const totalCurrentXp = currentXp + earnedXp;
        const asd = totalCurrentXp/maxXp;
        console.log("asd", asd)
        if(totalCurrentXp/maxXp >= 1) {
            levelUp();
            setCurrentXp(totalCurrentXp - maxXp);
            const nextLevelXp = calculateRequiredXp(level);
            console.log(nextLevelXp);
            setMaxXp(nextLevelXp);
        } else {
            setCurrentXp(totalCurrentXp);
        }
    }

    const calculateRequiredXp = (nextLevel) => {
        const exponent = 1.5;
        return Math.round(100 * (nextLevel ^ exponent))
    }

    const calculateReward = (word, remainingLife) => {
        
        const coinReward = Math.round( 0.04 * (word.length ^ 3) + 0.8 * (remainingLife ^ 2) + 2 * remainingLife);
        const xpReward = Math.round( 2 * (remainingLife ^ 10) + 0.4 * (word.length ^ 2) + 2 * word.length);
        return ({
            coin: coinReward,
            xp: xpReward
        })
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
        });
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.hiddenWord, {fontSize: gameState.hiddenWord.length < 9 ? 52 : 48}]}>{gameState.gameOver ? gameState.wordToGuess : gameState.hiddenWord}</Text>
            <Keyboard makeGuess={makeGuess} gameState={gameState} reset={reset}/>
        </View>
    )
};

export default RandomWord;