import { Keyboard, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { updateGame } from '../redux/slices/gameSlice';
import DividendDemoModal from '../Components/DividendDemoModal';
import DividendsPrize from '../Components/DividendsPrize';

const DividendsHomeScreen = ({ navigation, route }) => {
    const games = useSelector((state) => state.game.games);
    const { gameKey } = route.params;
    const gameData = games[gameKey];
    const [collapsibleBox, setCollapsibleBox] = useState([]);
    const [dividendArray, setDividendArray] = useState(gameData.dividends || []);
    const [dividendObjectArray, setDividendObjectArray] = useState(gameData.dividendObjectArray || []);
    const dispatch = useDispatch();
    const [dividendDemoModalShow, setDividendDemoModalShow] = useState(false);
    const [dividendName, setDividendName] = useState();
    const [dividendNameChangeModal, setDividendNameChangeModal] = useState(false);
    const [dividendNameForModal, setDividendNameForModal] = useState();
    const [newDividendName, setNewDividendName] = useState();
    const [rerender, setRerender] = useState(false);
    const [DividentPrizeModalVisible, setDividentPrizeModalVisible] = useState(false);
    const [dividendNameForDemoModal, setDividendNameForDemoModal] = useState();
    const handleDividendArray = (dividendName, dividendCustomName, dividendSlNo) => {
        const existingDividend = dividendArray.find(item => item.dividendName === dividendName);

        if (existingDividend) {
            // If already exists, remove it
            setDividendArray(dividendArray.filter(item => item.dividendName !== dividendName));
        } else {
            // Add new dividend with default count 1
            setDividendArray([...dividendArray, { dividendSlNo, dividendName, dividendCustomName, dividendCount: 1 }]);
        }
    };

    const handleIncrement = (dividendName) => {
        setDividendArray(dividendArray.map(item =>
            item.dividendName === dividendName
                ? { ...item, dividendCount: item.dividendCount + 1 }
                : item
        ));
    };

    const handleDecrement = (dividendName) => {
        setDividendArray(dividendArray.map(item =>
            item.dividendName === dividendName && item.dividendCount > 1
                ? { ...item, dividendCount: item.dividendCount - 1 }
                : item
        ));
    };

    const handleCollapseablePress = (boxName) => {
        if (collapsibleBox.includes(boxName)) {
            setCollapsibleBox(collapsibleBox.filter(item => item !== boxName));
        } else {
            setCollapsibleBox([...collapsibleBox, boxName]);
        }
    };

    // Update the game only when dividendArray changes
    useEffect(() => {
        setDividendObjectArray(gameData.dividendObjectArray || []);
        // setDividendArray(gameData.dividends || []);
        const sortedDividendArray = [...dividendArray].sort((a, b) => a.dividendSlNo - b.dividendSlNo);
        const updatedGameData = { ...gameData, dividends: sortedDividendArray };
        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
    }, [rerender, dividendArray, dispatch]);


    const handleDividendNameChange = () => {
        const updatedDividendObjectArray = gameData.dividendObjectArray.map((dividendObject) => {
            if (dividendObject.dividendName == dividendNameForModal) {
                return {
                    ...dividendObject,
                    dividendCustomName: newDividendName,
                }
            }
            return dividendObject;
        });

        const updatedSelectedDividends = dividendArray.map((selectedDividend) => {
            if (selectedDividend.dividendName == dividendNameForModal) {
                return {
                    ...selectedDividend,
                    dividendCustomName: newDividendName,
                }
            }
            return selectedDividend;
        });
        setDividendArray(updatedSelectedDividends);

        // Update the entire game data
        const updatedGameData = { ...gameData, dividendObjectArray: updatedDividendObjectArray };

        // Dispatch the updated game data
        dispatch(updateGame({ gameKey, gameData: updatedGameData }));

        // Trigger re-render
        setRerender(!rerender);
        Keyboard.dismiss(); // Close the keyboard
        setDividendNameChangeModal(false);
    }

    const renderDividendRow = (dividendName, dividendCustomName, dividendSlNo) => {
        const dividend = dividendArray.find(item => item.dividendName === dividendName);
        const isChecked = !!dividend;

        return (
            <TouchableOpacity
                onPress={() => { setDividendDemoModalShow(true); setDividendName(dividendName); setDividendNameForDemoModal(dividendCustomName) }}
                style={{
                    height: 35, marginLeft: 20, marginRight: 10, marginTop: 5, borderWidth: 1, flexDirection: 'row', borderColor: '#004d00',
                    alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => handleDividendArray(dividendName, dividendCustomName, dividendSlNo)}>
                    {isChecked ? (
                        <View style={{ marginLeft: 10, width: 24 }}>
                            <AntDesign name="checksquare" size={24} color="#2d8659" />
                        </View>
                    ) : (
                        <View style={{ height: 22, width: 24, borderWidth: 1.5, marginLeft: 10, borderColor: "#737373" }}></View>
                    )}
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#990000', marginLeft: 10 }}>{dividendCustomName}</Text>
                    {
                        isChecked &&
                        <TouchableOpacity
                            onPress={() => { setDividendNameChangeModal(true); setDividendNameForModal(dividendName); setNewDividendName(dividendCustomName); }}
                            style={{ padding: 4, marginLeft: 10 }}>
                            <FontAwesome5 name="pen" size={15} color="black" />
                        </TouchableOpacity>
                    }

                </View>

                {isChecked && (
                    <View style={{ flexDirection: 'row', marginLeft: 'auto', marginRight: 20 }}>
                        <TouchableOpacity onPress={() => handleDecrement(dividendName)}>
                            <AntDesign name="minuscircleo" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 10 }}>{dividend ? dividend.dividendCount : 1}</Text>
                        <TouchableOpacity onPress={() => handleIncrement(dividendName)}>
                            <AntDesign name="pluscircleo" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                )}
            </TouchableOpacity>
        );
    };



    // console.log("Game Data Dividends", gameData.dividends);
    // console.log("dividendObjectArray array", gameData.dividendObjectArray);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: '#e6e6e6' }}>
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={{
                            height: 40, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
                            marginHorizontal: 5, borderRadius: 4,
                            elevation: 3, // Android shadow
                            shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84,
                        }}>
                            <Text style={{ color: 'red', fontWeight: '600', alignItems: 'center' }}>READ ME BEFORE USE</Text>
                        </TouchableOpacity>
                        <Text style={{ color: '#3333cc', fontSize: 14, marginTop: 8, textAlign: 'center' }}>Unlimited dividends per ticket</Text>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <View style={{ width: '15%' }}></View>
                            {/* <View style={{ width: '70%', }}>
                        <Text style={{ textAlign: 'center', fontStyle: 'italic', color: 'red', marginTop: 15, fontWeight: '500' }}>NO SETWISE DIVIDENDS ADDED</Text>
                    </View> */}
                            {/* <TouchableOpacity style={{ alignItems: 'center', marginTop: 10 }} >
                        <Text style={{ marginLeft: 25 }}><Ionicons name="settings" size={26} color="#333333" /></Text>
                    </TouchableOpacity> */}
                        </View>

                        <View style={{ backgroundColor: '#fff', marginTop: 30 }}>
                            {/* <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-evenly' }}>
                        <View>
                            {
                                dividendsOrSetwise == 'Dividends' ?
                                    <TouchableOpacity
                                        onPress={() => setDividendsOrSetwise('Dividends')}
                                        style={{
                                            height: 45, width: 130, backgroundColor: 'black',
                                            borderWidth: 1, borderColor: '#e6b800',
                                            borderRadius: 25, alignItems: 'center', justifyContent: 'center'
                                        }}>
                                        <Text style={{ color: '#e6b800', fontSize: 15 }}>Dividends</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={() => setDividendsOrSetwise('Dividends')}
                                        style={{
                                            height: 45, width: 130, backgroundColor: '#e6e6e6',

                                            borderRadius: 25, alignItems: 'center', justifyContent: 'center'
                                        }}>
                                        <Text style={{ color: '#666666', fontSize: 15, fontWeight: '500' }}>Dividends</Text>
                                    </TouchableOpacity>
                            }

                        </View>
                        <View>
                            {
                                dividendsOrSetwise == 'Setwise' ?

                                    <TouchableOpacity
                                        onPress={() => setDividendsOrSetwise('Setwise')}
                                        style={{
                                            height: 45, width: 130, backgroundColor: 'black',
                                            borderWidth: 1, borderColor: '#e6b800',
                                            borderRadius: 25, alignItems: 'center', justifyContent: 'center'
                                        }}>
                                        <Text style={{ color: '#e6b800', fontSize: 15 }}>Setwise</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={() => setDividendsOrSetwise('Setwise')}
                                        style={{
                                            height: 45, width: 130, backgroundColor: '#e6e6e6',

                                            borderRadius: 25, alignItems: 'center', justifyContent: 'center'
                                        }}>
                                        <Text style={{ color: '#666666', fontSize: 15, fontWeight: '500' }}>Setwise</Text>
                                    </TouchableOpacity>
                            }
                        </View>
                    </View> */}

                            {/* ********************Dividends Menu********************** */}


                            <View>
                                {/*Divident for corners */}
                                <View style={{ marginTop: 10 }}>
                                    <TouchableOpacity
                                        onPress={() => handleCollapseablePress('Corners')}
                                        style={{
                                            height: 50, marginHorizontal: 10, borderWidth: 3, flexDirection: 'row', borderColor: '#000099',
                                            alignItems: 'center'
                                        }}>
                                        <View style={{ width: '10%' }}></View>
                                        <View style={{ width: '80%', alignItems: 'center' }}>
                                            <Text style={{ color: '#000099', fontStyle: 'italic', fontWeight: '400', fontSize: 16 }}>
                                                Corners
                                            </Text>
                                        </View>
                                        <View style={{ width: '10%' }}>
                                            <Text>
                                                {collapsibleBox.includes('Corners') ? (
                                                    <Entypo name="chevron-small-down" size={25} color="black" />
                                                ) : (
                                                    <Entypo name="chevron-small-right" size={25} color="black" />
                                                )}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                                    {collapsibleBox.includes("Corners") && (
                                        <>
                                            {renderDividendRow(dividendObjectArray[0].dividendName, dividendObjectArray[0].dividendCustomName, dividendObjectArray[0].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[1].dividendName, dividendObjectArray[1].dividendCustomName, dividendObjectArray[1].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[2].dividendName, dividendObjectArray[2].dividendCustomName, dividendObjectArray[2].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[3].dividendName, dividendObjectArray[3].dividendCustomName, dividendObjectArray[3].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[4].dividendName, dividendObjectArray[4].dividendCustomName, dividendObjectArray[4].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[5].dividendName, dividendObjectArray[5].dividendCustomName, dividendObjectArray[5].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[6].dividendName, dividendObjectArray[6].dividendCustomName, dividendObjectArray[6].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[7].dividendName, dividendObjectArray[7].dividendCustomName, dividendObjectArray[7].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[8].dividendName, dividendObjectArray[8].dividendCustomName, dividendObjectArray[8].dividendSlNo)}
                                        </>
                                    )}
                                </View>

                                {/*Divident for Early Section */}
                                <View style={{ marginTop: 10 }}>
                                    <TouchableOpacity
                                        onPress={() => handleCollapseablePress('Early / Jaldi / Quickly / Lucky')}
                                        style={{
                                            height: 50, marginHorizontal: 10, borderWidth: 3, flexDirection: 'row', borderColor: '#000099',
                                            alignItems: 'center'
                                        }}>
                                        <View style={{ width: '10%' }}></View>
                                        <View style={{ width: '80%', alignItems: 'center' }}>
                                            <Text style={{ color: '#000099', fontStyle: 'italic', fontWeight: '400', fontSize: 16 }}>
                                                Early / Jaldi / Quickly / Lucky
                                            </Text>
                                        </View>
                                        <Text>
                                            {collapsibleBox.includes('Early / Jaldi / Quickly / Lucky') ? (
                                                <Entypo name="chevron-small-down" size={25} color="black" />
                                            ) : (
                                                <Entypo name="chevron-small-right" size={25} color="black" />
                                            )}
                                        </Text>
                                    </TouchableOpacity>

                                    {collapsibleBox.includes("Early / Jaldi / Quickly / Lucky") && (
                                        <>
                                            {renderDividendRow(dividendObjectArray[9].dividendName, dividendObjectArray[9].dividendCustomName, dividendObjectArray[9].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[10].dividendName, dividendObjectArray[10].dividendCustomName, dividendObjectArray[10].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[11].dividendName, dividendObjectArray[11].dividendCustomName, dividendObjectArray[11].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[12].dividendName, dividendObjectArray[12].dividendCustomName, dividendObjectArray[12].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[13].dividendName, dividendObjectArray[13].dividendCustomName, dividendObjectArray[13].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[14].dividendName, dividendObjectArray[14].dividendCustomName, dividendObjectArray[14].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[15].dividendName, dividendObjectArray[15].dividendCustomName, dividendObjectArray[15].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[16].dividendName, dividendObjectArray[16].dividendCustomName, dividendObjectArray[16].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[17].dividendName, dividendObjectArray[17].dividendCustomName, dividendObjectArray[17].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[18].dividendName, dividendObjectArray[18].dividendCustomName, dividendObjectArray[18].dividendSlNo)}
                                        </>
                                    )}
                                </View>
                                {/* divident for extra */}
                                <View style={{ marginTop: 10 }}>
                                    <TouchableOpacity
                                        onPress={() => handleCollapseablePress('Extra')}
                                        style={{
                                            height: 50, marginHorizontal: 10, borderWidth: 3, flexDirection: 'row', borderColor: '#000099',
                                            alignItems: 'center'
                                        }}>
                                        <View style={{ width: '10%' }}></View>
                                        <View style={{ width: '80%', alignItems: 'center' }}>
                                            <Text style={{ color: '#000099', fontStyle: 'italic', fontWeight: '400', fontSize: 16 }}>
                                                Extra
                                            </Text>
                                        </View>
                                        <Text>
                                            {collapsibleBox.includes('Extra') ? (
                                                <Entypo name="chevron-small-down" size={25} color="black" />
                                            ) : (
                                                <Entypo name="chevron-small-right" size={25} color="black" />
                                            )}
                                        </Text>
                                    </TouchableOpacity>

                                    {collapsibleBox.includes("Extra") && (
                                        <>

                                            {renderDividendRow(dividendObjectArray[19].dividendName, dividendObjectArray[19].dividendCustomName, dividendObjectArray[19].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[20].dividendName, dividendObjectArray[20].dividendCustomName, dividendObjectArray[20].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[21].dividendName, dividendObjectArray[21].dividendCustomName, dividendObjectArray[21].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[22].dividendName, dividendObjectArray[22].dividendCustomName, dividendObjectArray[22].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[23].dividendName, dividendObjectArray[23].dividendCustomName, dividendObjectArray[23].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[24].dividendName, dividendObjectArray[24].dividendCustomName, dividendObjectArray[24].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[25].dividendName, dividendObjectArray[25].dividendCustomName, dividendObjectArray[25].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[26].dividendName, dividendObjectArray[26].dividendCustomName, dividendObjectArray[26].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[27].dividendName, dividendObjectArray[27].dividendCustomName, dividendObjectArray[27].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[28].dividendName, dividendObjectArray[28].dividendCustomName, dividendObjectArray[28].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[29].dividendName, dividendObjectArray[29].dividendCustomName, dividendObjectArray[29].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[30].dividendName, dividendObjectArray[30].dividendCustomName, dividendObjectArray[30].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[31].dividendName, dividendObjectArray[31].dividendCustomName, dividendObjectArray[31].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[32].dividendName, dividendObjectArray[32].dividendCustomName, dividendObjectArray[32].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[33].dividendName, dividendObjectArray[33].dividendCustomName, dividendObjectArray[33].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[34].dividendName, dividendObjectArray[34].dividendCustomName, dividendObjectArray[34].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[35].dividendName, dividendObjectArray[35].dividendCustomName, dividendObjectArray[35].dividendSlNo)}
                                        </>
                                    )}
                                </View>
                                {/*math section */}
                                <View style={{ marginTop: 10 }}>
                                    <TouchableOpacity
                                        onPress={() => handleCollapseablePress('Math')}
                                        style={{
                                            height: 50, marginHorizontal: 10, borderWidth: 3, flexDirection: 'row', borderColor: '#000099',
                                            alignItems: 'center'
                                        }}>
                                        <View style={{ width: '10%' }}></View>
                                        <View style={{ width: '80%', alignItems: 'center' }}>
                                            <Text style={{ color: '#000099', fontStyle: 'italic', fontWeight: '400', fontSize: 16 }}>
                                                Math
                                            </Text>
                                        </View>
                                        <Text>
                                            {collapsibleBox.includes('Math') ? (
                                                <Entypo name="chevron-small-down" size={25} color="black" />
                                            ) : (
                                                <Entypo name="chevron-small-right" size={25} color="black" />
                                            )}
                                        </Text>
                                    </TouchableOpacity>

                                    {collapsibleBox.includes("Math") && (
                                        <>

                                            {renderDividendRow(dividendObjectArray[36].dividendName, dividendObjectArray[36].dividendCustomName, dividendObjectArray[36].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[37].dividendName, dividendObjectArray[37].dividendCustomName, dividendObjectArray[37].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[38].dividendName, dividendObjectArray[38].dividendCustomName, dividendObjectArray[38].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[39].dividendName, dividendObjectArray[39].dividendCustomName, dividendObjectArray[39].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[40].dividendName, dividendObjectArray[40].dividendCustomName, dividendObjectArray[40].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[41].dividendName, dividendObjectArray[41].dividendCustomName, dividendObjectArray[41].dividendSlNo)}
                                        </>
                                    )}
                                </View>
                                {/* Min -Max / temp calculate */}
                                <View style={{ marginTop: 10 }}>
                                    <TouchableOpacity
                                        onPress={() => handleCollapseablePress(' Min - Max / Temperature / Bp')}
                                        style={{
                                            height: 50, marginHorizontal: 10, borderWidth: 3, flexDirection: 'row', borderColor: '#000099',
                                            alignItems: 'center'
                                        }}>
                                        <View style={{ width: '10%' }}></View>
                                        <View style={{ width: '80%', alignItems: 'center' }}>
                                            <Text style={{ color: '#000099', fontStyle: 'italic', fontWeight: '400', fontSize: 16 }}>
                                                Min - Max / Temperature / Bp
                                            </Text>
                                        </View>
                                        <Text>
                                            {collapsibleBox.includes(' Min - Max / Temperature / Bp') ? (
                                                <Entypo name="chevron-small-down" size={25} color="black" />
                                            ) : (
                                                <Entypo name="chevron-small-right" size={25} color="black" />
                                            )}
                                        </Text>
                                    </TouchableOpacity>

                                    {collapsibleBox.includes(" Min - Max / Temperature / Bp") && (
                                        <>

                                            {renderDividendRow(dividendObjectArray[42].dividendName, dividendObjectArray[42].dividendCustomName, dividendObjectArray[42].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[43].dividendName, dividendObjectArray[43].dividendCustomName, dividendObjectArray[43].dividendSlNo)}

                                        </>
                                    )}
                                </View>
                                {/* Divident For all number start and end with*/}
                                <View style={{ marginTop: 10 }}>
                                    <TouchableOpacity
                                        onPress={() => handleCollapseablePress('All Number Start & End With')}
                                        style={{
                                            height: 50, marginHorizontal: 10, borderWidth: 3, flexDirection: 'row', borderColor: '#000099',
                                            alignItems: 'center'
                                        }}>
                                        <View style={{ width: '10%' }}></View>
                                        <View style={{ width: '80%', alignItems: 'center' }}>
                                            <Text style={{ color: '#000099', fontStyle: 'italic', fontWeight: '400', fontSize: 16 }}>
                                                All Number Start & End With
                                            </Text>
                                        </View>
                                        <Text>
                                            {collapsibleBox.includes('All Number Start & End With') ? (
                                                <Entypo name="chevron-small-down" size={25} color="black" />
                                            ) : (
                                                <Entypo name="chevron-small-right" size={25} color="black" />
                                            )}
                                        </Text>
                                    </TouchableOpacity>

                                    {collapsibleBox.includes("All Number Start & End With") && (
                                        <>
                                            {renderDividendRow(dividendObjectArray[44].dividendName, dividendObjectArray[44].dividendCustomName, dividendObjectArray[44].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[45].dividendName, dividendObjectArray[45].dividendCustomName, dividendObjectArray[45].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[46].dividendName, dividendObjectArray[46].dividendCustomName, dividendObjectArray[46].dividendSlNo)}

                                        </>
                                    )}
                                </View>
                                {/* Pairs calculate */}
                                <View style={{ marginTop: 10 }}>
                                    <TouchableOpacity
                                        onPress={() => handleCollapseablePress('Pairs')}
                                        style={{
                                            height: 50, marginHorizontal: 10, borderWidth: 3, flexDirection: 'row', borderColor: '#000099',
                                            alignItems: 'center'
                                        }}>
                                        <View style={{ width: '10%' }}></View>
                                        <View style={{ width: '80%', alignItems: 'center' }}>
                                            <Text style={{ color: '#000099', fontStyle: 'italic', fontWeight: '400', fontSize: 16 }}>
                                                Pairs
                                            </Text>
                                        </View>
                                        <Text>
                                            {collapsibleBox.includes('Pairs') ? (
                                                <Entypo name="chevron-small-down" size={25} color="black" />
                                            ) : (
                                                <Entypo name="chevron-small-right" size={25} color="black" />
                                            )}
                                        </Text>
                                    </TouchableOpacity>

                                    {collapsibleBox.includes("Pairs") && (
                                        <>
                                            {renderDividendRow(dividendObjectArray[47].dividendName, dividendObjectArray[47].dividendCustomName, dividendObjectArray[47].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[48].dividendName, dividendObjectArray[48].dividendCustomName, dividendObjectArray[48].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[49].dividendName, dividendObjectArray[49].dividendCustomName, dividendObjectArray[49].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[50].dividendName, dividendObjectArray[50].dividendCustomName, dividendObjectArray[50].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[51].dividendName, dividendObjectArray[51].dividendCustomName, dividendObjectArray[51].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[52].dividendName, dividendObjectArray[52].dividendCustomName, dividendObjectArray[52].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[53].dividendName, dividendObjectArray[53].dividendCustomName, dividendObjectArray[53].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[54].dividendName, dividendObjectArray[54].dividendCustomName, dividendObjectArray[54].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[55].dividendName, dividendObjectArray[55].dividendCustomName, dividendObjectArray[55].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[56].dividendName, dividendObjectArray[56].dividendCustomName, dividendObjectArray[56].dividendSlNo)}

                                        </>
                                    )}
                                </View>
                                {/* divident for row line */}
                                <View style={{ marginTop: 10 }}>
                                    <TouchableOpacity
                                        onPress={() => handleCollapseablePress('Row/Line')}
                                        style={{
                                            height: 50, marginHorizontal: 10, borderWidth: 3, flexDirection: 'row', borderColor: '#000099',
                                            alignItems: 'center'
                                        }}>
                                        <View style={{ width: '10%' }}></View>
                                        <View style={{ width: '80%', alignItems: 'center' }}>
                                            <Text style={{ color: '#000099', fontStyle: 'italic', fontWeight: '400', fontSize: 16 }}>
                                                Row/Line
                                            </Text>
                                        </View>
                                        <View style={{ width: '10%' }}>
                                            <Text>
                                                {collapsibleBox.includes('Row/Line') ? (
                                                    <Entypo name="chevron-small-down" size={25} color="black" />
                                                ) : (
                                                    <Entypo name="chevron-small-right" size={25} color="black" />
                                                )}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                                    {collapsibleBox.includes("Row/Line") && (
                                        <>
                                            {renderDividendRow(dividendObjectArray[57].dividendName, dividendObjectArray[57].dividendCustomName, dividendObjectArray[57].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[58].dividendName, dividendObjectArray[58].dividendCustomName, dividendObjectArray[58].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[59].dividendName, dividendObjectArray[59].dividendCustomName, dividendObjectArray[59].dividendSlNo)}

                                        </>
                                    )}
                                </View>

                                {/* special numbers */}
                                <View style={{ marginTop: 10 }}>
                                    <TouchableOpacity
                                        onPress={() => handleCollapseablePress('Special Numbers')}
                                        style={{
                                            height: 50, marginHorizontal: 10, borderWidth: 3, flexDirection: 'row', borderColor: '#000099',
                                            alignItems: 'center'
                                        }}>
                                        <View style={{ width: '10%' }}></View>
                                        <View style={{ width: '80%', alignItems: 'center' }}>
                                            <Text style={{ color: '#000099', fontStyle: 'italic', fontWeight: '400', fontSize: 16 }}>
                                                Special Numbers
                                            </Text>
                                        </View>
                                        <Text>
                                            {collapsibleBox.includes('Special Numbers') ? (
                                                <Entypo name="chevron-small-down" size={25} color="black" />
                                            ) : (
                                                <Entypo name="chevron-small-right" size={25} color="black" />
                                            )}
                                        </Text>
                                    </TouchableOpacity>

                                    {collapsibleBox.includes("Special Numbers") && (
                                        <>

                                            {renderDividendRow(dividendObjectArray[60].dividendName, dividendObjectArray[60].dividendCustomName, dividendObjectArray[60].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[61].dividendName, dividendObjectArray[61].dividendCustomName, dividendObjectArray[61].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[62].dividendName, dividendObjectArray[62].dividendCustomName, dividendObjectArray[62].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[63].dividendName, dividendObjectArray[63].dividendCustomName, dividendObjectArray[63].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[64].dividendName, dividendObjectArray[64].dividendCustomName, dividendObjectArray[64].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[65].dividendName, dividendObjectArray[65].dividendCustomName, dividendObjectArray[65].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[66].dividendName, dividendObjectArray[66].dividendCustomName, dividendObjectArray[66].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[67].dividendName, dividendObjectArray[67].dividendCustomName, dividendObjectArray[67].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[68].dividendName, dividendObjectArray[68].dividendCustomName, dividendObjectArray[68].dividendSlNo)}
                                            {renderDividendRow(dividendObjectArray[69].dividendName, dividendObjectArray[69].dividendCustomName, dividendObjectArray[69].dividendSlNo)}

                                        </>
                                    )}
                                </View>

                                {/* house */}
                                <View style={{ marginTop: 10 }}>
                                    <TouchableOpacity
                                        onPress={() => handleCollapseablePress('House')}
                                        style={{
                                            height: 50, marginHorizontal: 10, borderWidth: 3, flexDirection: 'row', borderColor: '#000099',
                                            alignItems: 'center'
                                        }}>
                                        <View style={{ width: '10%' }}></View>
                                        <View style={{ width: '80%', alignItems: 'center' }}>
                                            <Text style={{ color: '#000099', fontStyle: 'italic', fontWeight: '400', fontSize: 16 }}>
                                                House
                                            </Text>
                                        </View>
                                        <Text>
                                            {collapsibleBox.includes('House') ? (
                                                <Entypo name="chevron-small-down" size={25} color="black" />
                                            ) : (
                                                <Entypo name="chevron-small-right" size={25} color="black" />
                                            )}
                                        </Text>
                                    </TouchableOpacity>

                                    {collapsibleBox.includes("House") && (
                                        <>

                                            {renderDividendRow(dividendObjectArray[70].dividendName, dividendObjectArray[70].dividendCustomName, dividendObjectArray[70].dividendSlNo)}

                                        </>
                                    )}
                                </View>










                                {/* prize screen */}
                                <DividendsPrize
                                    gameKey={gameKey}
                                    visible={DividentPrizeModalVisible}
                                    onClose={() => {
                                        setDividentPrizeModalVisible(false);
                                    }}
                                />


















                            </View>
                        </View>
                    </View>
                    <Modal
                        visible={dividendNameChangeModal}
                        animationType="slide"
                        onRequestClose={() => setDividendNameChangeModal(false)}
                    >
                        <View style={{
                            flex: 1,
                            padding: 20,
                            justifyContent: 'center',
                            backgroundColor: '#00004d',

                        }}>
                            <View style={{ height: 300, backgroundColor: '#fff', paddingHorizontal: 15, paddingTop: 15, }}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '600',
                                    marginBottom: 20,
                                    textAlign: 'center',
                                    color: 'red'
                                }}>{dividendNameForModal}</Text>
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
                                    placeholder="Enter Claim Local Name"
                                    //placeholderTextColor="#555555"
                                    value={newDividendName}
                                    onChangeText={setNewDividendName}
                                />

                                <Text style={{ fontWeight: 500, color: 'blue', marginVertical: 20, fontSize: 17, textAlign: 'center' }}>Edit in your language</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 50 }}>
                                    <TouchableOpacity
                                        onPress={() => setDividendNameChangeModal(false)}
                                        style={{ height: 35, width: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderWidth: .5, color: '#666666' }}>
                                        <Text style={{ color: 'red' }}>EXIT</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={handleDividendNameChange}
                                        style={{
                                            marginLeft: 10,
                                            height: 35, width: 100,
                                            backgroundColor: '#006600', alignItems: 'center', justifyContent: 'center',
                                        }}>
                                        <Text style={{ color: '#fff' }}>SAVE</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <DividendDemoModal
                        gameKey={gameKey}
                        brandingName={gameData.brandingName}
                        dividendName={dividendName}
                        dividendCustomName={dividendNameForDemoModal}
                        visible={dividendDemoModalShow}
                        onClose={() => {
                            setDividendDemoModalShow(false);
                        }}
                    />
                </View>


                <View style={{ height: 5 }}></View>
            </ScrollView>
            <View
                style={{
                    marginTop: 10,
                    alignItems: 'center'
                }}>
                <TouchableOpacity onPress={() => setDividentPrizeModalVisible(true)} style={{
                    height: 40, width: '60%',
                    marginBottom: 7, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', elevation: 3, borderRadius: 4
                }}>
                    <Text style={{ color: '#864647' }}>SHARE SUMMARY</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DividendsHomeScreen

const styles = StyleSheet.create({})