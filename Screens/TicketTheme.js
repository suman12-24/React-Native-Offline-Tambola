import React, { useState, useEffect } from 'react';
import { View, Text, Modal, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import TicketThemeModal from '../Components/TicketThemeModal';
import { useSelector } from 'react-redux';

const TicketTheme = ({ route }) => {
    const games = useSelector((state) => state.game.games);
    const { gameKey } = route.params;
    const gameData = games[gameKey];

    const [ticketGrid, setTicketGrid] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const generateTicket = () => {
        const ticket = Array.from({ length: 3 }, () => Array(9).fill(null));
        const columnRanges = [
            [1, 9], [10, 19], [20, 29], [30, 39], [40, 49], [50, 59], [60, 69], [70, 79], [80, 89],
        ];

        for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
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

        setTicketGrid(ticket);
    };

    useEffect(() => {
        generateTicket();
    }, []);


    return (
        <View style={{
            flex: 1,
            backgroundColor: '#bdbdbd',
        }}>
            <View style={{ backgroundColor: '#ffffff', margin: '2%', borderRadius: 3 }}>
                <View style={{
                    margin: 10,
                    borderColor: 'black',
                    borderWidth: 1.2,
                    padding: 9,
                    backgroundColor: gameData.ticketTheme?.backgroundColor,
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: '400',
                        color: gameData.ticketTheme?.ticketText,
                        marginBottom: 8,
                    }}>{gameData.brandingName}</Text>
                    <Text style={{
                        fontSize: 17.5,
                        color: gameData.ticketTheme?.ticketText,
                        fontWeight: '700',
                        marginBottom: 10,
                    }}>PLAYER NAME - 0735 - 0001</Text>
                    <View style={{
                        width: '100%',
                        borderWidth: 1.5,
                        borderColor: gameData.ticketTheme?.borderColor,
                        overflow: 'hidden',
                    }}>
                        {ticketGrid.map((row, rowIndex) => (
                            <View style={{
                                flexDirection: 'row',
                            }} key={rowIndex}>
                                {row.map((cell, colIndex) => (
                                    <Text
                                        style={[
                                            {
                                                flex: 1,
                                                borderWidth: 1,
                                                fontWeight: '700',
                                                borderColor: gameData.ticketTheme?.borderColor,
                                                textAlign: 'center',
                                                paddingVertical: 8,
                                                fontSize: 16,
                                                color: 'black',
                                                backgroundColor: '#fff',
                                            },
                                            rowIndex === 1 && (colIndex === 1 || colIndex === 5) && {
                                                backgroundColor: gameData.ticketTheme?.selectedCellBackgroundColor,
                                                color: 'white',
                                            }
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
                <TouchableOpacity onPress={() => setModalVisible(true)} style={{
                    backgroundColor: '#842829',
                    height: 40,
                    width: '32%',
                    alignSelf: 'center',
                    marginHorizontal: 20,
                    marginBottom: 20,
                    borderRadius: 5,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontWeight: '500',
                        fontSize: 16,
                        textAlign: 'center',
                        paddingTop: 8,
                    }}>Ticket Theme</Text>
                </TouchableOpacity>
            </View>

            <TicketThemeModal
                gameKey={gameKey}
                visible={modalVisible}
                onClose={() => {
                    setModalVisible(false);
                }}
            />

        </View>
    );
}

export default TicketTheme;

const styles = StyleSheet.create({

});

