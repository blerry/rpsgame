import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

const scissors = require('./scissors.png');
const paper = require('./paper.png');
const rock = require('./rock.png');

const bgColors = ['#1abc9c', '#3498db', '#9b59b6'];

//get random emoji
const randomEmoji = () => {
    //rock paper scissors emoji
    const emojis = [scissors, rock, paper];
    const random = Math.floor(Math.random() * 3);
    return emojis[random];
};

export default function PlayScreen() {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        //check for greater then stop loop
        if(counter > 3) return;

        const timer = setTimeout(() => {
            setCounter(previous => previous + 1);
        }, 500);

        return() => clearTimeout(timer);
    }, [counter]);

    return(
        <View style={styles.container}>
            {counter > 3 ? (
                <>
                <Image style={styles.sign} source={randomEmoji()}/>
                <View style={styles.btnContainer}>
                    <Button 
                        onPress = {() =>{
                            setCounter(1);
                        }}
                        title ="Play Again"
                />
                </View>
                </>
            ):(
                <View
                    style={StyleSheet.compose(
                        styles.counterContainer,
                        {backgroundColor: bgColors[counter-1]},
                    )}>
                        <Text style={styles.counter}>{counter}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        fontSize: 150,
        color: '#fff',
    },
    sign: {
        width: 200,
        height: 200,
    },
    btnContainer: {
        marginTop: 60,
        width: 240,
        position: 'abolsute',
        bottom: 20,
    },
    counterContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});