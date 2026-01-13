import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, Animated, TouchableOpacity, Dimensions, ScrollView, TouchableWithoutFeedback, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateGame } from '../redux/slices/gameSlice';

const { width } = Dimensions.get('window');

const TicketThemeModal = ({ visible, onClose, gameKey }) => {

    const games = useSelector((state) => state.game.games);
    const gameData = games[gameKey];


    const slideAnim = useRef(new Animated.Value(width)).current;
    const dispatch = useDispatch();

    const [ticketGrid, setTicketGrid] = useState([]);
    // console.log("ticketGrid", ticketGrid);
    const colorSetArray = [
        {
            ticketText: '#140d99',
            backgroundColor: '#f9ecf9',
            borderColor: '#602488',
            selectedCellBackgroundColor: 'red',
        },
        {
            ticketText: '#140d99',
            backgroundColor: '#e0f1da',
            borderColor: '#284a1c',
            selectedCellBackgroundColor: '#458131',
        },
        {
            ticketText: '#140d99',
            backgroundColor: '#ffedcc',
            borderColor: '#805300',
            selectedCellBackgroundColor: '#996300',
        },
        {
            ticketText: '#140d99',
            backgroundColor: '#e6e6fa',
            borderColor: '#1d1d95',
            selectedCellBackgroundColor: '#ff4d4d',
        },
        {
            ticketText: '#802b00',
            backgroundColor: '#fff0b3',
            borderColor: '#802b00',
            selectedCellBackgroundColor: '#b33c00',
        },
        {
            ticketText: '#802b00',
            backgroundColor: '#e0e0d1',
            borderColor: '#802b00',
            selectedCellBackgroundColor: '#b33c00',
        },
        {
            ticketText: '#802b00',
            backgroundColor: '#ffcccc',
            borderColor: '#802b00',
            selectedCellBackgroundColor: '#992600',
        },
        {
            ticketText: '#1f1f7a',
            backgroundColor: '#d6d6f5',
            borderColor: '#1f1f7a',
            selectedCellBackgroundColor: '#47476b',
        },
        {
            ticketText: '#331400',
            backgroundColor: '#ffd1b3',
            borderColor: '#331400',
            selectedCellBackgroundColor: '#e60000',
        },
        {
            ticketText: '#990000',
            backgroundColor: '#e6ffb3',
            borderColor: '#990000',
            selectedCellBackgroundColor: '#ff3333',
        },
        {
            ticketText: '#802b00',
            backgroundColor: '#e0e0d1',
            borderColor: '#802b00',
            selectedCellBackgroundColor: '#b33c00',
        }

    ]

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: visible ? 0 : width,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [visible]);

    // Generate a single ticket grid
    const generateTicket = () => {
        const ticket = Array.from({ length: 3 }, () => Array(9).fill(null));
        const columnRanges = [
            [1, 9],
            [10, 19],
            [20, 29],
            [30, 39],
            [40, 49],
            [50, 59],
            [60, 69],
            [70, 79],
            [80, 89],
        ];

        for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
            let rowNumbers = [];
            const selectedColumns = [];
            while (selectedColumns.length < 5) {
                const colIndex = Math.floor(Math.random() * 9);
                if (!selectedColumns.includes(colIndex)) {
                    selectedColumns.push(colIndex);
                }
            }

            selectedColumns.forEach((colIndex) => {
                const [min, max] = columnRanges[colIndex];
                const number = Math.floor(Math.random() * (max - min + 1)) + min;
                ticket[rowIndex][colIndex] = number;
            });
        }

        return ticket;
    };

    // Generate multiple tickets
    const generateTickets = (count) => {
        const tickets = [];
        for (let i = 0; i < count; i++) {
            tickets.push(generateTicket());
        }
        setTicketGrid(tickets);
    };

    useEffect(() => {
        generateTickets(11); // Generate 10 tickets
    }, []);

    // Handle ticket selection
    const handleSelectTicket = (ticketIndex) => {


        const updatedGameData = { ...gameData, ticketTheme: colorSetArray[ticketIndex] };
        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
        onClose(); // Close the modal after selection
    };



    return (
        <Modal visible={visible} transparent={true} animationType="none">

            <Animated.View style={[{
                flex: 1,
                borderRadius: 10,
                flexDirection: 'row'
            }, { transform: [{ translateX: slideAnim }] }]}>
                <Pressable
                    onPress={onClose}
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}></Pressable>

                <View style={{ width: '83%', backgroundColor: '#fff', }}>
                    <ScrollView style={{
                        width: '100%',
                        flexGrow: 1,
                    }}>

                        {ticketGrid.map((ticket, ticketIndex) => (
                            <View key={ticketIndex} style={{
                                margin: 10,
                                borderColor: 'black',
                                borderWidth: 1.2,
                                padding: 9,
                                backgroundColor: colorSetArray[ticketIndex].backgroundColor ?
                                    colorSetArray[ticketIndex].backgroundColor :
                                    '#f3e5f6',
                                alignItems: 'center',
                                width: '95%',
                            }}>
                                <Text style={{
                                    fontSize: 17.5,
                                    color: colorSetArray[ticketIndex].ticketText ? colorSetArray[ticketIndex].ticketText : '#140d99',
                                    fontWeight: '700',
                                    marginBottom: 10,
                                }}>PLAYER NAME - 0735 - 000{ticketIndex + 1}</Text>
                                <View style={{
                                    width: '100%',
                                    borderWidth: 1.5,
                                    borderColor: colorSetArray[ticketIndex].borderColor ? colorSetArray[ticketIndex].borderColor : '#602488',
                                    overflow: 'hidden',
                                }}>
                                    {ticket.map((row, rowIndex) => (
                                        <View style={{ flexDirection: 'row', }} key={rowIndex}>
                                            {row.map((cell, colIndex) => (
                                                <Text
                                                    style={[
                                                        {
                                                            flex: 1,
                                                            borderWidth: 1,
                                                            fontWeight: '700',
                                                            borderColor: colorSetArray[ticketIndex].borderColor ?
                                                                colorSetArray[ticketIndex].borderColor : '#602488',
                                                            textAlign: 'center',
                                                            paddingVertical: 6,
                                                            fontSize: 16,
                                                            color: 'black',
                                                            backgroundColor: '#fff',
                                                        },
                                                        rowIndex === 1 && (colIndex === 1 || colIndex === 5) && {
                                                            backgroundColor: colorSetArray[ticketIndex].selectedCellBackgroundColor ?
                                                                colorSetArray[ticketIndex].selectedCellBackgroundColor : 'red',
                                                            color: 'white',
                                                        },
                                                    ]}
                                                    key={colIndex}
                                                >
                                                    {cell ? cell : ''}
                                                </Text>
                                            ))}
                                        </View>
                                    ))}
                                </View>
                                <TouchableOpacity onPress={() => handleSelectTicket(ticketIndex)} style={{
                                    backgroundColor: '#842829', // Green background
                                    //  padding: 10,
                                    borderRadius: 5,
                                    marginTop: 10,
                                    height: 40,
                                    width: '25%',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        fontWeight: '600',
                                        fontSize: 17,
                                        paddingTop: 8,
                                        alignContent: 'center',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>Select</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>

                    <TouchableOpacity onPress={onClose} style={{
                        backgroundColor: '#f2f2f2',
                        width: '100%',
                        height: 60,
                        marginTop: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            color: 'red',
                            fontWeight: '600',
                            fontSize: 20,
                            textAlign: 'center',
                            marginRight: '5%',
                        }}>Back</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>

        </Modal>
    );
};

export default TicketThemeModal;