import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addGame, deleteGame } from '../redux/slices/gameSlice';
import moment from 'moment';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const dividendObjectArray = [
    { dividendSlNo: 1, dividendName: "4 Corners", dividendCustomName: "4 Corners" },
    { dividendSlNo: 2, dividendName: "King Corners", dividendCustomName: "King Corners" },
    { dividendSlNo: 3, dividendName: "Queen Corners", dividendCustomName: "Queen Corners" },
    { dividendSlNo: 4, dividendName: "4 Corners and Center", dividendCustomName: "4 Corners and Center" },
    { dividendSlNo: 5, dividendName: "Bulls Eyes", dividendCustomName: "Bulls Eyes" },
    { dividendSlNo: 6, dividendName: "Twin Lines", dividendCustomName: "Twin Lines" },
    { dividendSlNo: 7, dividendName: "6 Corners", dividendCustomName: "6 Corners" },
    { dividendSlNo: 8, dividendName: "6 Corners and Center", dividendCustomName: "6 Corners and Center" },
    { dividendSlNo: 9, dividendName: "Reverse Twin", dividendCustomName: "Reverse Twin" },
    { dividendSlNo: 10, dividendName: "Early 5/Jaldi 5", dividendCustomName: "Early 5/Jaldi 5" },
    { dividendSlNo: 11, dividendName: "Early 6/Jaldi 6", dividendCustomName: "Early 6/Jaldi 6" },
    { dividendSlNo: 12, dividendName: "Early 7/Jaldi 7", dividendCustomName: "Early 7/Jaldi 7" },
    { dividendSlNo: 13, dividendName: "Early 8/Jaldi 8", dividendCustomName: "Early 8/Jaldi 8" },
    { dividendSlNo: 14, dividendName: "Early 9/Jaldi 9", dividendCustomName: "Early 9/Jaldi 9" },
    { dividendSlNo: 15, dividendName: "Early 10/Jaldi 10", dividendCustomName: "Early 10/Jaldi 10" },
    { dividendSlNo: 16, dividendName: "Early 11/Jaldi 11", dividendCustomName: "Early 11/Jaldi 11" },
    { dividendSlNo: 17, dividendName: "Early 12/Jaldi 12", dividendCustomName: "Early 12/Jaldi 12" },
    { dividendSlNo: 18, dividendName: "Early 13/Jaldi 13", dividendCustomName: "Early 13/Jaldi 13" },
    { dividendSlNo: 19, dividendName: "Early 14/Jaldi 14", dividendCustomName: "Early 14/Jaldi 14" },
    { dividendSlNo: 20, dividendName: "Breakfast", dividendCustomName: "Breakfast" },
    { dividendSlNo: 21, dividendName: "Lunch", dividendCustomName: "Lunch" },
    { dividendSlNo: 22, dividendName: "Dinner", dividendCustomName: "Dinner" },
    { dividendSlNo: 23, dividendName: "Day || Jawani", dividendCustomName: "Day || Jawani" },
    { dividendSlNo: 24, dividendName: "Night || Budhapa", dividendCustomName: "Night || Budhapa" },
    { dividendSlNo: 25, dividendName: "Center || Laddu", dividendCustomName: "Center || Laddu" },
    { dividendSlNo: 26, dividendName: "Bamboo", dividendCustomName: "Bamboo" },
    { dividendSlNo: 27, dividendName: "First Half", dividendCustomName: "First Half" },
    { dividendSlNo: 28, dividendName: "Second Half", dividendCustomName: "Second Half" },
    { dividendSlNo: 29, dividendName: "Shehnai Bidaai", dividendCustomName: "Shehnai Bidaai" },
    { dividendSlNo: 30, dividendName: "Brahma", dividendCustomName: "Brahma" },
    { dividendSlNo: 31, dividendName: "Vishnu", dividendCustomName: "Vishnu" },
    { dividendSlNo: 32, dividendName: "Mahesh", dividendCustomName: "Mahesh" },
    { dividendSlNo: 33, dividendName: "Railway Track", dividendCustomName: "Railway Track" },
    { dividendSlNo: 34, dividendName: "Drum", dividendCustomName: "Drum" },
    { dividendSlNo: 35, dividendName: "ZIP", dividendCustomName: "ZIP" },
    { dividendSlNo: 36, dividendName: "ZAP", dividendCustomName: "ZAP" },
    { dividendSlNo: 37, dividendName: "Pyramid", dividendCustomName: "Pyramid" },
    { dividendSlNo: 38, dividendName: "Reverse Pyramid", dividendCustomName: "Reverse Pyramid" },
    { dividendSlNo: 39, dividendName: "Circle", dividendCustomName: "Circle" },
    { dividendSlNo: 40, dividendName: "All Even", dividendCustomName: "All Even" },
    { dividendSlNo: 41, dividendName: "All Odd", dividendCustomName: "All Odd" },
    { dividendSlNo: 42, dividendName: "Plus", dividendCustomName: "Plus" },
    { dividendSlNo: 43, dividendName: "Temp./ BP", dividendCustomName: "Temp./ BP" },
    { dividendSlNo: 44, dividendName: "Double Temp.", dividendCustomName: "Double Temp." },
    { dividendSlNo: 45, dividendName: "Hockey Stick", dividendCustomName: "Hockey Stick" },
    { dividendSlNo: 46, dividendName: "Fat Lady", dividendCustomName: "Fat Lady" },
    { dividendSlNo: 47, dividendName: "Ugly Duckling", dividendCustomName: "Ugly Duckling" },
    { dividendSlNo: 48, dividendName: "1 Pair (Row)", dividendCustomName: "1 Pair (Row)" },
    { dividendSlNo: 49, dividendName: "2 Pair (Row)", dividendCustomName: "2 Pair (Row)" },
    { dividendSlNo: 50, dividendName: "3 Pair (Row)", dividendCustomName: "3 Pair (Row)" },
    { dividendSlNo: 51, dividendName: "4 Pair (Row)", dividendCustomName: "4 Pair (Row)" },
    { dividendSlNo: 52, dividendName: "All Pair (Row)", dividendCustomName: "All Pair (Row)" },
    { dividendSlNo: 53, dividendName: "1 Pair (Column)", dividendCustomName: "1 Pair (Column)" },
    { dividendSlNo: 54, dividendName: "2 Pair (Column)", dividendCustomName: "2 Pair (Column)" },
    { dividendSlNo: 55, dividendName: "3 Pair (Column)", dividendCustomName: "3 Pair (Column)" },
    { dividendSlNo: 56, dividendName: "4 Pair (Column)", dividendCustomName: "4 Pair (Column)" },
    { dividendSlNo: 57, dividendName: "All Pair (Column)", dividendCustomName: "All Pair (Column)" },
    { dividendSlNo: 58, dividendName: "First/Top Line", dividendCustomName: "First/Top Line" },
    { dividendSlNo: 59, dividendName: "Second/Middle Line", dividendCustomName: "Second/Middle Line" },
    { dividendSlNo: 60, dividendName: "Third/Last Line", dividendCustomName: "Third/Last Line" },
    { dividendSlNo: 61, dividendName: "I Love You 143", dividendCustomName: "I Love You 143" },
    { dividendSlNo: 62, dividendName: "We Love You 243", dividendCustomName: "We Love You 243" },
    { dividendSlNo: 63, dividendName: "124", dividendCustomName: "124" },
    { dividendSlNo: 64, dividendName: "421", dividendCustomName: "421" },
    { dividendSlNo: 65, dividendName: "225", dividendCustomName: "225" },
    { dividendSlNo: 66, dividendName: "123", dividendCustomName: "123" },
    { dividendSlNo: 67, dividendName: "333", dividendCustomName: "333" },
    { dividendSlNo: 68, dividendName: "4 2 ka 1(Reverse)", dividendCustomName: "4 2 ka 1(Reverse)" },
    { dividendSlNo: 69, dividendName: "333 (reverse)", dividendCustomName: "333 (reverse)" },
    { dividendSlNo: 70, dividendName: "3 2 ka 1(Reverse)", dividendCustomName: "3 2 ka 1(Reverse)" },
    { dividendSlNo: 71, dividendName: "House", dividendCustomName: "House" }
];

const CreateGame = ({ navigation }) => {
    const [gameName, setGameName] = useState('');
    const dispatch = useDispatch();
    const games = useSelector((state) => state.game.games);
    const [createGameModal, setCreateGameModal] = useState(false);



    // Function to generate a unique 4-digit gameId
    const generateUniqueGameId = (games) => {
        let gameId;
        let isUnique = false;

        while (!isUnique) {
            gameId = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
            isUnique = !Object.values(games).some(game => game.gameId === gameId); // Check uniqueness
        }

        return gameId;
    };

    // Function to handle adding a new game
    const handleAddGame = () => {
        if (gameName.trim()) {
            const newGameKey = `${gameName}`; // Use the game name as the key

            if (games[newGameKey]) {
                Alert.alert("Duplicate Game", "A game with this name already exists. Please choose a different name.");
                return;
            }

            const newGame = {
                gameId: generateUniqueGameId(games), // Unique 4-digit gameId
                brandingName: "Tambola Game",
                startWithTickets: 1,
                ticketTheme: {
                    ticketText: '#140d99',
                    backgroundColor: '#f9ecf9',
                    borderColor: '#602488',
                    selectedCellBackgroundColor: 'red',
                },
                playerInfo: [],
                calledNumbers: [],
                winnersDetails: [],
                dividends: [],
                dividendObjectArray: dividendObjectArray,
                dividendsWiseWinners: [],
                groupedWinnersByDividendAndSequence: {},
                createdOn: Date.now(),
                isTicketGenerated: false,
                isDividendApproveAlert: false,
                isBoardTouchOn: false,
                isRunning: false,
                roundCount: 0,
                ticketSearchBoxValue: '',
                isGameCompleted: false
            };

            dispatch(addGame({ gameKey: newGameKey, gameData: newGame }));
            setGameName(''); // Clear input field after adding game
            setCreateGameModal(false);
            handleSelectedGame(newGameKey);
        } else {
            Alert.alert("Validation Error", "Please enter a game name.");
        }
    };


    // Function to handle deleting a game
    const handleDeleteGame = (gameKey) => {
        Alert.alert(
            "Delete Game",
            "Are you sure you want to delete this game?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => dispatch(deleteGame(gameKey)),
                    style: "destructive"
                }
            ]
        );
    };

    // Function to handle selecting a game
    const handleSelectedGame = (gameKey) => {
        navigation.navigate("PlayerManager", { gameKey });
    };

    // console.log(games['A']);
    // console.log("Game List", Object.entries(games).length);
    return (
        <View style={styles.container}>

            {(Object.entries(games).length == 0) ?
                <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
                    <TouchableOpacity
                        onPress={() => setCreateGameModal(true)}
                        style={{
                            height: 46, width: "40%", backgroundColor: "#ffcc00",
                            alignItems: 'center', justifyContent: 'center', borderRadius: 5
                        }}>
                        <Text style={{ fontWeight: '600', fontSize: 15 }}>+ NEW GAME</Text>
                    </TouchableOpacity>
                </View> :
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View>
                        <FlatList
                            data={Object.entries(games)} // Convert the games object to an array of [key, value] pairs
                            keyExtractor={([key]) => key}
                            renderItem={({ item: [key, game], index }) => (
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingHorizontal: 10,
                                    height: 85,
                                    backgroundColor: '#fff',
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#ddd',
                                    marginTop: 10,
                                }}>
                                    <TouchableOpacity onPress={() => handleSelectedGame(key)} style={{ width: '80%' }}>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 19, color: '#004080' }}>{`${key}`}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Text style={{ color: '#660066', fontSize: 16 }}>{`${game.playerInfo.length} Players`}</Text>
                                            <Text style={{ color: 'green', fontSize: 17 }}>{`${game.playerInfo.reduce((sum, player) => sum + player?.tickets?.length, 0)} Tickets`}</Text>
                                        </View>
                                        <Text style={{ color: '#666666', fontSize: 14 }}>{`Created: ${moment(game.createdOn).format('ddd, DD MMM YYYY, hh:mm A')}`}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleDeleteGame(key)} style={{ width: '20%', alignItems: 'flex-end' }}>
                                        <Text style={styles.deleteButton}><MaterialIcons name="delete" size={30} color="#666666" /></Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            ListEmptyComponent={<Text style={styles.emptyText}>No games added yet</Text>} // Show this text when the list is empty
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => setCreateGameModal(true)}
                            style={{
                                height: 46, width: "40%", backgroundColor: "#ffcc00",
                                alignItems: 'center', justifyContent: 'center', borderRadius: 5
                            }}>
                            <Text style={{ fontWeight: '600', fontSize: 15 }}>+ NEW GAME</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }

            <Modal
                visible={createGameModal}
                animationType="slide"
                onRequestClose={() => setCreateGameModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={{ height: 300, backgroundColor: '#fff', paddingHorizontal: 15, paddingTop: 15, }}>
                        <Text style={styles.modalTitle}>Add Game</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Game Name or Group"
                            value={gameName}
                            onChangeText={setGameName}
                        />

                        <Text style={{ fontWeight: 500, color: 'blue', marginVertical: 20, fontSize: 15 }}>Eg. Family Tambola, Lockdown Tambola etc.</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 50 }}>
                            <TouchableOpacity
                                onPress={() => setCreateGameModal(false)}
                                style={{ height: 40, width: 120, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderWidth: .5, color: '#666666' }}>
                                <Text style={{ color: 'red' }}>EXIT</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={handleAddGame}
                                style={{
                                    marginLeft: 10,
                                    height: 40, width: 120,
                                    backgroundColor: '#ffcc00', alignItems: 'center', justifyContent: 'center',
                                }}>
                                <Text style={{ color: '#666666' }}>CREATE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000033',
    },
    input: {
        height: 55,
        fontSize: 20,
        backgroundColor: '#f2f2f2',
        borderColor: 'black',
        borderRadius: 15,
        borderWidth: 2,
        marginBottom: 10,
        paddingHorizontal: 10,
    },


    deleteButton: {
        color: 'red',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: 'gray',
    },
    modalContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#00004d',

    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
        textAlign: 'center',
        color: 'red'
    },


});

export default CreateGame;
