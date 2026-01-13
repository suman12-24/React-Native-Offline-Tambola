import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateGame } from '../redux/slices/gameSlice';

const Branding = ({ route }) => {
    const dispatch = useDispatch();
    const games = useSelector((state) => state.game.games);
    const { gameKey } = route.params;
    const gameData = games[gameKey];
    const [searchQuery, setSearchQuery] = useState(gameData.brandingName);
    const [ticketGrid, setTicketGrid] = useState([]);

    const handleSave = () => {
        const finalBrandingName = searchQuery.trim() === '' ? "Tambola Game" : searchQuery;
        dispatch(updateGame({ gameKey, gameData: { brandingName: finalBrandingName } }));
        Keyboard.dismiss();
    };

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

        // Loop through each row
        for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
            let rowNumbers = [];

            // Randomly pick 5 columns for numbers in this row
            const selectedColumns = [];
            while (selectedColumns.length < 5) {
                const colIndex = Math.floor(Math.random() * 9);
                if (!selectedColumns.includes(colIndex)) {
                    selectedColumns.push(colIndex);
                }
            }

            // Populate the selected columns with random numbers within the specified range
            selectedColumns.forEach((colIndex) => {
                const [min, max] = columnRanges[colIndex];
                const number = Math.floor(Math.random() * (max - min + 1)) + min;
                ticket[rowIndex][colIndex] = number;
            });
        }

        setTicketGrid(ticket);
    };


    // Initialize ticket on mount
    useEffect(() => {
        generateTicket();
    }, []);

    useEffect(() => {
        setSearchQuery(gameData.brandingName);
    }, [gameData.brandingName]);

    return (
        <View style={styles.container}>
            {/* <View style={{ backgroundColor: '#ffffff', marginLeft: 10, marginRight: 10, borderWidth: 1, borderColor: '#ebebeb', elevation: 2 }}>
                <Text style={styles.hostId}>Host Id: 735 - 1284</Text>
            </View> */}
            <View style={{ height: 12 }}></View>
            <Text style={styles.removeText}>Remove Tambola Book</Text>
            <Text style={styles.removeText}>OR</Text>
            <Text style={styles.brandText}>Enter your Brand Name on each ticket</Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Enter Your Brand Name Here"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            {/* <View style={styles.buttonContainer}>
                <Button title="Save" onPress={handleSave} color="#000220" />
            </View> */}
            <TouchableOpacity
                onPress={handleSave}
                style={styles.buttonContainer}>
                <Text style={{ color: '#f8e378', fontWeight: '600', fontSize: 20, textAlign: 'center', paddingTop: 8 }}>Save</Text>
            </TouchableOpacity>
            <View style={styles.tambolaBook}>
                <Text style={styles.tambolaTitle}>{searchQuery}</Text>
                <Text style={styles.playerName}>PLAYER NAME - 0735 - 0001</Text>
                <View style={styles.grid}>
                    {ticketGrid.map((row, rowIndex) => (
                        <View style={styles.row} key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <Text
                                    style={[
                                        styles.cell,
                                        rowIndex === 1 && (colIndex === 1 || colIndex === 5) && styles.redCell
                                    ]}
                                    key={colIndex}
                                >
                                    {cell ? cell : ''}
                                </Text>
                            ))}
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    hostId: {
        marginTop: 12,
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '500',
        color: '#191919',
        marginBottom: 10,
    },
    removeText: {
        textAlign: 'center',
        color: '#2a22b6',
        marginVertical: 2,
        fontSize: 16.5,
    },
    brandText: {
        textAlign: 'center',
        color: '#2a22b6',
        fontSize: 16.5,
        marginBottom: 10,
    },
    searchInput: {
        height: 57,

        borderWidth: 2.1,
        borderColor: '#04042a',
        borderRadius: 20,
        marginLeft: "6%",
        marginRight: "6%",
        fontSize: 17,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        color: '#111111',
        textAlign: 'center',
    },
    buttonContainer: {
        backgroundColor: '#000220',
        height: 45,
        marginLeft: "6%",
        marginRight: "6%",
        alignContent: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 5
    },
    tambolaBook: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1.2,
        padding: 9,
        backgroundColor: '#f3e5f6',
        alignItems: 'center',
    },
    tambolaTitle: {
        fontSize: 22,
        fontWeight: '400',
        color: '#120c92',
        marginBottom: 8,
    },
    playerName: {
        fontSize: 17.5,
        color: '#140d99',
        fontWeight: '700',
        marginBottom: 10,
    },
    grid: {
        width: '100%',
        borderWidth: 1.5,
        borderColor: '#602488',
        overflow: 'hidden',
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        flex: 1,
        borderWidth: 1,
        fontWeight: '700',
        borderColor: '#602488',
        textAlign: 'center',
        paddingVertical: 12,
        fontSize: 16,
        color: 'black',
        backgroundColor: '#fff',
    },
    redCell: {
        backgroundColor: 'red',
        color: 'white',
    },
});

export default Branding;
