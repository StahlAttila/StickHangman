import React, {useEffect, useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from "./styles";
import letters from "../RandomWord/letters";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Keyboard = (props) => {

    const [lettersState, setLettersState] = useState(letters);
    const [modalOpen, setModalOpen] = useState(false);
    const {makeGuess, gameState, reset} = props;

    const letterPressHandler = (letter, index) => {
        if (gameState.gameOver) {
            setModalOpen(true);
            return;
        }

        makeGuess(letter);

        let newArr = [...lettersState];
        newArr[index].state = true;
        setLettersState(newArr);
    }

    const resetKeyboard = () => {
        let newArr = [...lettersState];
        newArr.forEach(function (part, index) {
            this[index].state = false;
        }, newArr);

        setLettersState(newArr)
    }

    const resetGame = () => {
        //resetKeyboard();
        setModalOpen(false);
        reset();
    }

    useEffect(() => {
        if (gameState.gameOver) {
            setModalOpen(true);
            resetKeyboard();
        }
    }, [gameState])

    return (
        <View>
            <Modal
                presentationStyle="overFullScreen"
                transparent
                visible={modalOpen}
            >
                <TouchableOpacity onPress={() => setModalOpen(false)}>
                    <View style={{height: "100%"}}/>
                </TouchableOpacity>
                <View style={styles.modalContainer}>

                    <View style={styles.modalContentContainer}>
                        <TouchableOpacity onPress={resetGame}>
                            <MaterialCommunityIcons name={"refresh"} size={180} color={"green"}/>
                        </TouchableOpacity>
                        <View style={styles.rewardContainer}>
                            <Text
                                style={[styles.text, {color: gameState.state === "Won" ? "green" : "red"}]}>{gameState.state}</Text>
                            <Text style={styles.text}>XP: +10</Text>
                            <View style={styles.coinContainer}>
                                <Image source={require('../../assets/coin.png')} style={{width: 50, height: 50}}/>
                                <Text style={styles.text}> + 100</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.lettersRow}>
                <TouchableOpacity
                    onPress={() => letterPressHandler('q', 0)}
                    disabled={lettersState[0].state}>
                    <View
                        style={lettersState[0].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>Q</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('w', 1)}
                    disabled={lettersState[1].state}>
                    <View
                        style={lettersState[1].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={[styles.letter, {paddingLeft: 3}]}>W</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('e', 2)}
                    disabled={lettersState[2].state}>
                    <View
                        style={lettersState[2].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>E</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('r', 3)}
                    disabled={lettersState[3].state}>
                    <View
                        style={lettersState[3].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>R</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('t', 4)}
                    disabled={lettersState[4].state}>
                    <View
                        style={lettersState[4].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>T</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('y', 5)}
                    disabled={lettersState[5].state}>
                    <View
                        style={lettersState[5].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={[styles.letter, {paddingLeft: 7}]}>Y</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('u', 6)}
                    disabled={lettersState[6].state}>
                    <View
                        style={lettersState[6].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>U</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('i', 7)}
                    disabled={lettersState[7].state}>
                    <View
                        style={lettersState[7].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={[styles.letter, {paddingLeft: 11}]}>I</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('o', 8)}
                    disabled={lettersState[8].state}>
                    <View
                        style={lettersState[8].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>O</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.lettersRow}>
                <TouchableOpacity
                    onPress={() => letterPressHandler('p', 9)}
                    disabled={lettersState[9].state}>
                    <View
                        style={lettersState[9].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>P</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('a', 10)}
                    disabled={lettersState[10].state}>
                    <View
                        style={lettersState[10].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>A</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('s', 11)}
                    disabled={lettersState[11].state}>
                    <View
                        style={lettersState[11].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>S</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('d', 12)}
                    disabled={lettersState[12].state}>
                    <View
                        style={lettersState[12].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>D</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('f', 13)}
                    disabled={lettersState[13].state}>
                    <View
                        style={lettersState[13].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>F</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('g', 14)}
                    disabled={lettersState[14].state}>
                    <View
                        style={lettersState[14].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>G</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('h', 15)}
                    disabled={lettersState[15].state}>
                    <View
                        style={lettersState[15].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>H</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('j', 16)}
                    disabled={lettersState[16].state}>
                    <View
                        style={lettersState[16].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>J</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('k', 17)}
                    disabled={lettersState[17].state}>
                    <View
                        style={lettersState[17].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>K</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.lettersRow}>
                <TouchableOpacity
                    onPress={() => letterPressHandler('l', 18)}
                    disabled={lettersState[18].state}>
                    <View
                        style={lettersState[18].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={[styles.letter, {paddingLeft: 7}]}>L</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('z', 19)}
                    disabled={lettersState[19].state}>
                    <View
                        style={lettersState[19].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={[styles.letter, {paddingLeft: 7}]}>Z</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('x', 20)}
                    disabled={lettersState[20].state}>
                    <View
                        style={lettersState[20].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>X</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('c', 21)}
                    disabled={lettersState[21].state}>
                    <View
                        style={lettersState[21].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>C</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('v', 22)}
                    disabled={lettersState[22].state}>
                    <View
                        style={lettersState[22].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>V</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('b', 23)}
                    disabled={lettersState[23].state}>
                    <View
                        style={lettersState[23].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>B</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('n', 24)}
                    disabled={lettersState[24].state}>
                    <View
                        style={lettersState[24].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={styles.letter}>N</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => letterPressHandler('m', 25)}
                    disabled={lettersState[25].state}>
                    <View
                        style={lettersState[25].state ? styles.letterContainerPushed : styles.letterContainer}>
                        <Text style={[styles.letter, {paddingLeft: 3}]}>M</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Keyboard;