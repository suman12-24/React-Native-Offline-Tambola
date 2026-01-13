import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Modal, Animated, TouchableOpacity, Dimensions, Alert, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateGame } from '../redux/slices/gameSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { height, width } = Dimensions.get('window');
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-gesture-handler';

const SearchTicketModal = ({ gameKey, visible, onClose, dividendModalClose }) => {
    const dispatch = useDispatch();
    const games = useSelector((state) => state.game.games);
    const gameData = games[gameKey];

    const [winners, setWinners] = useState(gameData.winnersDetails || []);
    const [searchTerm, setSearchTerm] = useState(gameData.ticketSearchBoxValue);
    const [filteredPlayers, setFilteredPlayers] = useState(); // Hold filtered players data
    const [filteredTicketSerialNumber, setFilteredTicketSerialNumber] = useState();
    const [ticketSearchResult, setTicketSearchResult] = useState([]);
    const [playerSearchResult, setPlayerSearchResult] = useState([]);
    const [rerender, setRerender] = useState(false);
    const [displayedTickets, setDisplayedTickets] = useState([]); // Hold the tickets to display
    const [startIndex, setStartIndex] = useState(0); // For loading tickets
    const ticketsToLoad = 5; // Number of tickets to load at a time
    const slideAnim = useRef(new Animated.Value(width)).current;
    // console.log("player info ", gameData.playerInfo[0].tickets);


    const allTicketsCollectorFunction = () => {
        const allTickets = [];
        gameData.playerInfo.forEach(player => {
            player.tickets.forEach(ticket => {
                const ticketWithPlayerInfo = {
                    ...ticket,
                    playerName: player.name,
                    playerId: player.id
                };
                allTickets.push(ticketWithPlayerInfo);
            });
        });

        return allTickets;

    }

    const allTicketsCollectorFunctionVar = allTicketsCollectorFunction();
    // console.log("allTicketsCollectorFunctionVar", allTicketsCollectorFunctionVar[0].marked);

    useEffect(() => {
        if (gameData && gameData.winnersDetails) {
            setWinners(gameData.winnersDetails);
            setSearchTerm(gameData.ticketSearchBoxValue);
            handleSearch(gameData.ticketSearchBoxValue);
        }
    }, [gameData.winnersDetails, gameKey, searchTerm, rerender]);

    useEffect(() => {
        if (visible) {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: width,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);



    const isNumericString = (str) => {
        return /^\d+$/.test(str.trim()); // Returns true if the string contains only numeric characters
    };

    const handleSearch = (input) => {
        setSearchTerm(input);
        const updatedGameData = { ...gameData, ticketSearchBoxValue: input };
        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
        // Reset filters when input is empty
        if (input === "") {
            setFilteredTicketSerialNumber(input);
            setFilteredPlayers(input);
            setTicketSearchResult([]);
            setPlayerSearchResult([]);
            return;
        }

        // Split the input by commas and trim each part to remove extra spaces
        const searchTerms = input.split(',').map(term => term.trim());

        let ticketResults = [];
        let playerResults = [];

        // Loop over each search term to find matches
        searchTerms.forEach(term => {
            if (isNumericString(term)) {
                // Search by ticket serial number
                const ticketSearchResult = allTicketsCollectorFunctionVar.find(ticket => ticket.serialNumber == term);
                if (ticketSearchResult) {
                    ticketResults.push(ticketSearchResult);
                }
            } else {
                // Search by player name
                const playerSearchResultArr = allTicketsCollectorFunctionVar.filter(ticket =>
                    ticket.playerName.toLowerCase().includes(term.toLowerCase())  // Case-insensitive search
                );
                if (playerSearchResultArr.length > 0) {
                    playerResults.push(...playerSearchResultArr);
                }
            }
        });

        // Remove duplicates from the results
        ticketResults = [...new Set(ticketResults)];
        playerResults = [...new Set(playerResults)];

        // Set the filtered results
        setFilteredTicketSerialNumber(ticketResults);
        setFilteredPlayers(playerResults);

        // Combine ticket and player results
        const combinedResults = [...ticketResults, ...playerResults];

        // Set the final search result
        setTicketSearchResult(combinedResults);
    };


    const handleTicketCancel = (ticketSerialNumber, playerName) => {
        // Update player's tickets
        const updatedTickets = gameData.playerInfo.find((player) => player.name === playerName)?.tickets.map((ticket) => {
            if (ticket.serialNumber === ticketSerialNumber) {
                return {
                    ...ticket,
                    isActiveTicket: !ticket.isActiveTicket,
                };
            }
            return ticket; // Ensure you return the ticket regardless of whether it's modified
        });

        // Update player info with modified tickets
        const updatedPlayers = gameData.playerInfo.map((player) => {
            if (player.name === playerName) {
                return {
                    ...player,
                    tickets: updatedTickets,
                };
            }
            return player; // Return unmodified players
        });


        const updatedGameData = { ...gameData, playerInfo: updatedPlayers };
        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
        ticketSearchResult && setTicketSearchResult([{ ...ticketSearchResult[0], isActiveTicket: !ticketSearchResult[0]?.isActiveTicket }]);

        playerSearchResult && setPlayerSearchResult(playerSearchResult.map(ticket => {
            if (ticket.serialNumber == ticketSerialNumber) {
                return {
                    ...ticket,
                    isActiveTicket: !ticket.isActiveTicket
                }
            }
            return ticket;
        }))

        setRerender(!rerender);
    };

    const loadMoreTickets = () => {
        const newTickets = allTicketsCollectorFunctionVar.slice(startIndex, startIndex + ticketsToLoad);
        setDisplayedTickets((prevTickets) => [...prevTickets, ...newTickets]);
        setStartIndex((prevIndex) => prevIndex + ticketsToLoad);
    };

    const loadMoreTicketsPlayerSearch = () => {
        const newTickets = playerSearchResult.slice(startIndex, startIndex + ticketsToLoad);
        setDisplayedTickets((prevTickets) => [...prevTickets, ...newTickets]);
        setStartIndex((prevIndex) => prevIndex + ticketsToLoad);
    };


    const handleTicketCancelWarning = (ticketSerialNumber, status, playerName) => {
        Alert.alert(
            `${status ? 'Delete Ticket?' : 'Activate Ticket?'}`,
            `${status ? 'Do you want to delete ticket of ' + ticketSerialNumber : 'Do you want to activate ticket of ' + ticketSerialNumber}`,
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Ok",
                    onPress: () => {
                        handleTicketCancel(ticketSerialNumber, playerName);
                    },
                    style: "destructive",
                },
            ]
        );
    }

    const clearSearchBox = () => {
        setSearchTerm('');
        const updatedGameData = { ...gameData, ticketSearchBoxValue: '' };
        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
    }

    return (
        <Modal visible={visible} transparent={true} animationType="none">

            <Animated.View style={[styles.modalContainer, { transform: [{ translateX: slideAnim }] }]}>
                <TouchableOpacity
                    onPress={() => { onClose(); dividendModalClose() }}
                    style={{ width: '15%', backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                </TouchableOpacity>
                <View style={{ width: '85%', alignItems: 'flex-start', backgroundColor: '#f2f2f2' }}>
                    <View style={{ marginTop: 20, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput
                            style={{
                                height: 40,
                                backgroundColor: '#f2f2f2',
                                borderColor: 'black',
                                borderRadius: 15,
                                borderWidth: 2,
                                marginBottom: 10,
                                paddingHorizontal: 10,
                            }}
                            placeholder="Search tickets e.g. 1,47,Ram,20"
                            onChangeText={(input) => { handleSearch(input) }}
                            value={searchTerm}
                        />
                        <TouchableOpacity
                            onPress={clearSearchBox}
                            style={{ height: '45', width: '45', marginLeft: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 10, }}>
                            <AntDesign name="closecircleo" size={30} color="red" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: '85%' }}>
                        {
                            !filteredPlayers && !filteredTicketSerialNumber &&
                            <FlatList
                                data={allTicketsCollectorFunctionVar}
                                keyExtractor={(item, index) => index.toString()}
                                contentContainerStyle={styles.scrollContainer}
                                renderItem={({ item }) => (
                                    <View style={{
                                        borderWidth: 1,
                                        width: '100%',
                                        backgroundColor: gameData.ticketTheme?.backgroundColor,
                                        borderColor: gameData.ticketTheme?.borderColor,
                                        marginTop: 7,
                                        paddingBottom: 10

                                    }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ width: '10%' }}></View>
                                            <View style={{ width: '80%' }}>
                                                <Text style={{ textAlign: 'center', fontSize: 18, color: gameData.ticketTheme?.ticketText }}>{gameData.brandingName}</Text>
                                                <Text style={{
                                                    textTransform: 'uppercase',
                                                    fontSize: 16,
                                                    color: gameData.ticketTheme?.ticketText,
                                                    textAlign: 'center',
                                                    fontWeight: '700',
                                                    marginBottom: 5,
                                                }}>{item.playerName} - {gameData.gameId} - {String(item?.serialNumber).padStart(4, '0')}</Text>
                                            </View>
                                            <TouchableOpacity
                                                onPress={() => handleTicketCancelWarning(item?.serialNumber, item?.isActiveTicket, item?.playerName)}
                                                style={{ width: '10%' }}>
                                                <MaterialIcons name="delete" size={26} color={gameData.ticketTheme?.ticketText} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ height: height * .15, width: width * .82, position: "relative" }}>
                                            <View style={{ height: height * .153, width: width * .75, borderColor: gameData.ticketTheme?.borderColor, borderWidth: 1, marginLeft: '1.6%' }}>
                                                {item?.ticket.map((row, rowIndex) => (
                                                    <View key={rowIndex} style={styles.row}>
                                                        {row.map((number, colIndex) => {
                                                            const isMarked = item.marked[rowIndex][colIndex];
                                                            return (
                                                                <View
                                                                    key={colIndex}
                                                                    style={{
                                                                        borderWidth: 1.2,
                                                                        borderColor: gameData.ticketTheme?.borderColor,
                                                                        backgroundColor: isMarked ? gameData.ticketTheme?.selectedCellBackgroundColor : '#fff',
                                                                        width: width * 0.083,
                                                                        height: height * 0.051,
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
                                            {!item?.isActiveTicket &&
                                                <View style={{ position: 'absolute', top: '45.8%', right: '8.5%', height: height * .15, width: width * .765, }}>
                                                    <View style={{
                                                        width: '105%',
                                                        height: 3,
                                                        marginTop: '1.4%',
                                                        backgroundColor: 'red', borderWidth: .6,
                                                        borderColor: '#0000b3',
                                                        transform: [{ rotate: '21.5deg' }],
                                                    }}></View>
                                                    <View style={{
                                                        width: '105%',
                                                        borderWidth: .6,
                                                        borderColor: '#0000b3',
                                                        height: 3, marginTop: '-1.1%',
                                                        backgroundColor: 'red',
                                                        transform: [{ rotate: '158.3deg' }],
                                                    }}></View>
                                                </View>
                                            }

                                        </View>
                                    </View>
                                )}

                                onEndReached={loadMoreTickets} // Load more tickets when scrolling to the end
                                onEndReachedThreshold={0.5} // Trigger when 50% away from the end
                            />
                        }
                        {

                            filteredPlayers &&
                            <FlatList
                                data={playerSearchResult || []}
                                keyExtractor={(item, index) => index.toString()}
                                contentContainerStyle={styles.scrollContainer}
                                renderItem={({ item }) => (
                                    <View style={{
                                        borderWidth: 1,
                                        width: '100%',
                                        backgroundColor: gameData.ticketTheme?.backgroundColor,
                                        borderColor: '#862d86',
                                        marginTop: 7,
                                        paddingBottom: 10

                                    }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ width: '10%' }}></View>
                                            <View style={{ width: '80%' }}>
                                                <Text style={{ textAlign: 'center', fontSize: 18, color: gameData.ticketTheme?.ticketText }}>{gameData.brandingName}</Text>
                                                <Text style={{
                                                    fontSize: 16,
                                                    color: '#0000b3',
                                                    textAlign: 'center',
                                                    fontWeight: '700',
                                                    marginBottom: 5,
                                                }}>{item.playerName} - {gameData.gameId} - {String(item?.serialNumber).padStart(4, '0')}</Text>
                                            </View>
                                            <TouchableOpacity
                                                onPress={() => handleTicketCancelWarning(item?.serialNumber, item?.isActiveTicket, item?.playerName)}
                                                style={{ width: '10%' }}>
                                                <MaterialIcons name="delete" size={26} color="#0000b3" />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ height: height * .15, width: width * .82, position: "relative" }}>
                                            <View style={{ height: height * .153, width: width * .75, borderColor: gameData.ticketTheme?.borderColor, borderWidth: 1, marginLeft: '1.6%' }}>
                                                {item?.ticket.map((row, rowIndex) => (
                                                    <View key={rowIndex} style={styles.row}>
                                                        {row.map((number, colIndex) => {
                                                            const isMarked = item.marked[rowIndex][colIndex];
                                                            return (
                                                                <View
                                                                    key={colIndex}
                                                                    style={{
                                                                        borderWidth: 1.2,
                                                                        borderColor: gameData.ticketTheme?.borderColor,
                                                                        backgroundColor: isMarked ? gameData.ticketTheme?.selectedCellBackgroundColor : '#fff',
                                                                        width: width * 0.083,
                                                                        height: height * 0.051,
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
                                            {!item?.isActiveTicket &&
                                                <View style={{ position: 'absolute', top: '45.8%', right: '8.5%', height: height * .15, width: width * .765, }}>
                                                    <View style={{
                                                        width: '105%',
                                                        height: 3,
                                                        marginTop: '1.4%',
                                                        backgroundColor: 'red', borderWidth: .6,
                                                        borderColor: '#0000b3',
                                                        transform: [{ rotate: '21.5deg' }],
                                                    }}></View>
                                                    <View style={{
                                                        width: '105%',
                                                        borderWidth: .6,
                                                        borderColor: '#0000b3',
                                                        height: 3, marginTop: '-1.1%',
                                                        backgroundColor: 'red',
                                                        transform: [{ rotate: '158.3deg' }],
                                                    }}></View>
                                                </View>
                                            }

                                        </View>
                                    </View>
                                )}

                                onEndReached={loadMoreTicketsPlayerSearch} // Load more tickets when scrolling to the end
                                onEndReachedThreshold={0.5} // Trigger when 50% away from the end
                            />
                        }

                        {
                            filteredTicketSerialNumber &&
                            <FlatList
                                data={ticketSearchResult || []}
                                keyExtractor={(item, index) => index.toString()}
                                contentContainerStyle={styles.scrollContainer}
                                renderItem={({ item }) => (
                                    <View style={{
                                        borderWidth: 1,
                                        width: '100%',
                                        backgroundColor: gameData.ticketTheme?.backgroundColor,
                                        borderColor: '#862d86',
                                        marginTop: 7,
                                        paddingBottom: 10

                                    }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ width: '10%' }}></View>
                                            <View style={{ width: '80%' }}>
                                                <Text style={{ textAlign: 'center', fontSize: 18, color: gameData.ticketTheme?.ticketText }}>{gameData.brandingName}</Text>
                                                <Text style={{
                                                    textTransform: 'uppercase',
                                                    fontSize: 16,
                                                    color: '#0000b3',
                                                    textAlign: 'center',
                                                    fontWeight: '700',
                                                    marginBottom: 5,
                                                }}>{item.playerName} - {gameData.gameId} - {String(item?.serialNumber).padStart(4, '0')}</Text>
                                            </View>
                                            <TouchableOpacity
                                                onPress={() => handleTicketCancelWarning(item?.serialNumber, item?.isActiveTicket, item?.playerName)}
                                                style={{ width: '10%' }}>
                                                <MaterialIcons name="delete" size={26} color="#0000b3" />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ height: height * .15, width: width * .82, position: "relative" }}>
                                            <View style={{ height: height * .153, width: width * .75, borderColor: gameData.ticketTheme?.borderColor, borderWidth: 1, marginLeft: '1.6%' }}>
                                                {item?.ticket.map((row, rowIndex) => (
                                                    <View key={rowIndex} style={styles.row}>
                                                        {row.map((number, colIndex) => {
                                                            const isMarked = item.marked[rowIndex][colIndex];
                                                            return (
                                                                <View
                                                                    key={colIndex}
                                                                    style={{
                                                                        borderWidth: 1.2,
                                                                        borderColor: gameData.ticketTheme?.borderColor,
                                                                        backgroundColor: isMarked ? gameData.ticketTheme?.selectedCellBackgroundColor : '#fff',
                                                                        width: width * 0.083,
                                                                        height: height * 0.051,
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
                                            {!item?.isActiveTicket &&
                                                <View style={{ position: 'absolute', top: '45.8%', right: '8.5%', height: height * .15, width: width * .765, }}>
                                                    <View style={{
                                                        width: '105%',
                                                        height: 3,
                                                        marginTop: '1.4%',
                                                        backgroundColor: 'red', borderWidth: .6,
                                                        borderColor: '#0000b3',
                                                        transform: [{ rotate: '21.5deg' }],
                                                    }}></View>
                                                    <View style={{
                                                        width: '105%',
                                                        borderWidth: .6,
                                                        borderColor: '#0000b3',
                                                        height: 3, marginTop: '-1.1%',
                                                        backgroundColor: 'red',
                                                        transform: [{ rotate: '158.3deg' }],
                                                    }}></View>
                                                </View>
                                            }

                                        </View>
                                    </View>
                                )}


                            />
                        }

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', height: 50, backgroundColor: '#fff' }}>
                        <TouchableOpacity onPress={() => { onClose(); dividendModalClose() }} style={{
                            height: 35, width: '15%', alignItems: 'center',
                            justifyContent: 'center', elevation: 2, backgroundColor: '#fff', borderRadius: 3
                        }}>
                            <Text style={{ textAlign: 'center' }}><AntDesign name="arrowleft" size={24} color="black" /></Text>
                        </TouchableOpacity>
                        <View style={{ width: '31%' }}></View>
                        <View style={{ width: '31%' }}></View>

                        {/* <TouchableOpacity style={{ borderRadius: 3, elevation: 2, width: '31%', height: 35, backgroundColor: '#ff8080', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ marginRight: 15 }}><Octicons name="search" size={20} color="#000080" /></Text>
                            <Text style={{ fontWeight: '500', fontSize: 14, color: '#000080' }}>Search</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setSummaryShowModalVisible(true)}
                            style={{ borderRadius: 3, elevation: 2, width: '31%', height: 35, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ marginRight: 5 }}><MaterialCommunityIcons name="playlist-check" size={28} color="#ffcc00" /></Text>
                            <Text style={{ fontWeight: '500', fontSize: 14, color: '#ffcc00' }}>Summary</Text>
                        </TouchableOpacity> */}

                        <View style={{ width: '14%' }}></View>
                    </View>
                </View>
            </Animated.View>


        </Modal>
    );
};

const styles = StyleSheet.create({
    ticketContainer: {
        borderWidth: 1,
        width: '100%',
        backgroundColor: '#f9ecf9',
        borderColor: '#862d86',
        marginTop: 7,
        paddingBottom: 10

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

    numberText: {
        fontSize: 15,
        fontWeight: 'bold'
    },

    modalContainer: {
        flex: 1,
        flexDirection: 'row',
        height: "95%",
    },
    scrollContainer: {
        paddingVertical: 5,
        marginRight: '7%',
        marginLeft: '1%'

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

export default SearchTicketModal;

