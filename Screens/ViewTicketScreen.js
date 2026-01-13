import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView, FlatList, Button, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { updateGame } from '../redux/slices/gameSlice';
import ScreenshotShare from './ScreenshotShare';

const ViewTicketScreen = ({ route, navigation }) => {
    const { selectedPlayerId, gameKey } = route.params;
    const dispatch = useDispatch(); // Assign the useDispatch hook to a variable
    const games = useSelector((state) => state.game.games);
    const gameData = games[gameKey];

    const [selectedPlayer, setSelectedPlayer] = useState(gameData?.playerInfo?.find(player => player?.id === selectedPlayerId));
    const [tickets, setTickets] = useState(selectedPlayer?.tickets || []);
    const [players, setPlayers] = useState(gameData.playerInfo || []);
    const { width, height } = Dimensions.get('window');
    const [rerender, setRerender] = useState(false);
    const [conditionalShareScreenRendering, setConditionalShareScreenRendering] = useState(false);
    //console.log("Ticket", tickets[0]);



    const handleTicketCancelWarning = (ticketSerialNumber, status) => {
        setConditionalShareScreenRendering(false);
        Alert.alert(
            `${status ? 'Delete Ticket?' : 'Activate Ticket?'}`,
            `${status ? 'Do you want to delete ticket of ' + ticketSerialNumber : 'Do you want to activate ticket of ' + ticketSerialNumber}`,
            [
                {
                    text: "Cancel",
                    onPress: () => {
                        setRerender(!rerender);
                    },
                    style: "cancel",
                },
                {
                    text: "Ok",
                    onPress: () => {
                        handleTicketCancel(ticketSerialNumber);
                    },
                    style: "destructive",
                },
            ]
        );
    }



    // Function to handle ticket cancellation
    const handleTicketCancel = (ticketSerialNumber) => {
        // Update the tickets array to toggle the isActiveTicket flag
        const updatedTickets = tickets.map(ticket => {
            if (ticket.serialNumber === ticketSerialNumber) {
                return {
                    ...ticket,
                    isActiveTicket: !ticket?.isActiveTicket, // Toggle isActiveTicket flag
                };
            }
            return ticket;
        });

        // Update the tickets state
        setTickets(updatedTickets);

        // Update the specific player's tickets
        const updatedPlayers = players.map(player => {
            if (player?.id === selectedPlayerId) {
                return {
                    ...player,
                    tickets: updatedTickets,
                };
            }
            return player;
        });

        // Update the entire game data
        const updatedGameData = { ...gameData, playerInfo: updatedPlayers };

        // Dispatch the updated game data
        dispatch(updateGame({ gameKey, gameData: updatedGameData }));

        // Trigger re-render
        setRerender(!rerender);
    };

    useEffect(() => {
        const updatedPlayer = gameData?.playerInfo?.find(player => player?.id === selectedPlayerId);
        setSelectedPlayer(updatedPlayer);
        setTickets(updatedPlayer?.tickets || []);
        setPlayers(gameData.playerInfo);

        const timer = setTimeout(() => {
            turnOnRendering();
        }, 10);
        return () => clearTimeout(timer);

    }, [rerender, gameData, selectedPlayerId]);



    turnOnRendering = () => {
        setConditionalShareScreenRendering(true);
    }


    const screenshotShareRef = useRef();
    const handleShare = () => {
        // Trigger the share function in ScreenshotShare      
        screenshotShareRef.current.captureScreenshots();
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={tickets}
                keyExtractor={(ticketData, index) => index.toString()}
                renderItem={({ item: ticketData, index }) => (
                    <View key={index} style={{
                        borderWidth: 1,
                        backgroundColor: gameData.ticketTheme?.backgroundColor,
                        borderColor: gameData.ticketTheme?.borderColor,
                        marginTop: 7,
                        padding: 10,
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: '7%' }}></View>
                            <View style={{ width: '86%' }}>
                                <Text style={{ textAlign: 'center', fontSize: 18, color: gameData.ticketTheme?.ticketText }}>{gameData.brandingName}</Text>
                                <Text style={{
                                    textTransform: 'uppercase',
                                    fontSize: 16,
                                    color: gameData.ticketTheme?.ticketText,
                                    textAlign: 'center',
                                    fontWeight: '700',
                                    marginBottom: 5,
                                }}>
                                    {selectedPlayer.name} - {gameData.gameId} - {String(ticketData?.serialNumber).padStart(4, '0')}
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => handleTicketCancelWarning(ticketData?.serialNumber, ticketData?.isActiveTicket)}
                                style={{ width: '6%', marginLeft: '1%' }}>
                                <MaterialIcons name="delete" size={26} color={gameData.ticketTheme?.ticketText} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: height * 0.15, width: width * 0.9, position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: height * 0.15, width: width * 0.9, borderColor: gameData.ticketTheme?.borderColor, borderWidth: 1 }}>
                                {ticketData?.ticket.map((row, rowIndex) => (
                                    <View key={rowIndex} style={styles.row}>
                                        {row.map((number, colIndex) => {
                                            const isMarked = ticketData.marked[rowIndex][colIndex];
                                            return (
                                                <View
                                                    key={colIndex}
                                                    style={{
                                                        borderWidth: 1.2,
                                                        borderColor: gameData.ticketTheme?.borderColor,
                                                        backgroundColor: isMarked ? gameData.ticketTheme?.selectedCellBackgroundColor : '#fff',
                                                        width: width * 0.1,
                                                        height: height * 0.05,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Text style={[{
                                                        fontSize: 15,
                                                        fontWeight: 'bold'
                                                    }, { color: isMarked ? '#fff' : 'black' }]}>
                                                        {number !== null ? number : ''}
                                                    </Text>
                                                </View>
                                            );
                                        })}
                                    </View>
                                ))}
                            </View>
                            {!ticketData?.isActiveTicket && (
                                <View style={{ position: 'absolute', top: '45.8%', right: '2.2%', height: height * 0.15, width: width * 0.9 }}>
                                    <View style={{
                                        width: '105%',
                                        height: 3,
                                        marginTop: '1.28%',
                                        backgroundColor: 'red',
                                        borderWidth: 0.6,
                                        borderColor: '#0000b3',
                                        transform: [{ rotate: '17.8deg' }],
                                    }}></View>
                                    <View style={{
                                        width: '105%',
                                        borderWidth: 0.6,
                                        borderColor: '#0000b3',
                                        height: 3,
                                        marginTop: '-1%',
                                        backgroundColor: 'red',
                                        transform: [{ rotate: '161.8deg' }],
                                    }}></View>
                                </View>
                            )}
                        </View>
                    </View>
                )}
            />


            <View style={{ height: 85, backgroundColor: '#000033', justifyContent: 'space-evenly' }}>
                {
                    conditionalShareScreenRendering &&
                    <View style={{ opacity: 0 }}>
                        <ScreenshotShare ref={screenshotShareRef} tickets={tickets}
                            playerName={selectedPlayer.name} gameId={gameData.gameId}
                            brandingName={gameData.brandingName} gameKey={gameKey} />
                    </View>
                }


                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '10%' }}></View>
                    <View style={{ width: '80%' }}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 12 }}>Share Tickets To Player Via</Text>
                    </View>
                    <View style={{ width: '10%', alignItems: 'center', justifyContent: 'center' }}>
                        {/* <TouchableOpacity style={{
                            borderBottomLeftRadius: 2.5,
                            height: 17, width: 17, borderLeftWidth: 2, borderBottomWidth: 1.5,
                            borderColor: '#fff', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <View style={{
                                height: 17, width: 17, borderWidth: 1.5,
                                borderColor: '#fff', marginLeft: 6, marginBottom: 6, borderRadius: 2,
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text style={{ fontWeight: 800, fontSize: 11, color: '#fff' }}>5</Text>
                            </View>
                        </TouchableOpacity> */}

                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    {
                        conditionalShareScreenRendering &&
                        <TouchableOpacity
                            onPress={handleShare}
                            style={{
                                height: 35, width: '48%', borderRadius: 3,
                                alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffd633'
                            }}>
                            <Text style={{ fontWeight: 600, fontSize: 14 }}>Screen Shot</Text>
                        </TouchableOpacity>
                    }
                    {/* <TouchableOpacity style={{
                        height: 35, width: '48%', marginLeft: '1%',
                        borderRadius: 3, backgroundColor: '#ffd633', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text style={{ fontWeight: 600, fontSize: 14 }}> Via Link</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
            {/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#000033',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
        textAlign: 'center',
    },
    ticketContainer: {
        borderWidth: 1,
        backgroundColor: '#f9ecf9',
        borderColor: '#862d86',
        marginTop: 7,
        padding: 10,
    },
    ticketTitle: {
        fontSize: 16,
        color: '#0000b3',
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: 5,
    },
    row: {
        flexDirection: 'row',
    },

});

export default ViewTicketScreen;
