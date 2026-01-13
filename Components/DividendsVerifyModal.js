import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Modal,
  Animated,
  TouchableOpacity,
  Dimensions,
  Alert,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateGame } from "../redux/slices/gameSlice";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import SummaryShowModal from "./SummaryShowModal";
import SearchTicketModal from "./SearchTicketModal";
const { height, width } = Dimensions.get("window");

import ViewShot, { captureRef } from "react-native-view-shot";
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import { PermissionsAndroid, Platform } from 'react-native';

const DividendsVerifyModal = ({ gameKey, visible, onClose, resumeGame }) => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.games);
  const gameData = games[gameKey];
  const [dividends, setDividends] = useState(gameData.dividends || []);
  const [winners, setWinners] = useState([]);
  const slideAnim = useRef(new Animated.Value(width)).current;
  const [summaryShowModalVisible, setSummaryShowModalVisible] = useState(false);
  const [searchTicketModalVisible, setSearchTicketModalVisible] = useState(false);
  const [calledNumbers, setCalledNumbers] = useState(gameData.calledNumbers || []);

  //////////////////////////////////////////////////////////////////////////////////////////

  const updatedwinners = gameData.winnersDetails
    .filter(winner => winner.isApproved)
    .map(winner => {
      const winingPointNumberIndex = gameData.calledNumbers.indexOf(winner.winingPointNumber);
      return {
        ...winner,
        winingPointNumberOrder: winingPointNumberIndex !== -1 ? winingPointNumberIndex + 1 : null // Adding 1 for 1-based index
      };
    });

  // Step 2: Sort by winingPointNumberOrder in ascending order
  updatedwinners.sort((a, b) => (a.winingPointNumberOrder || 0) - (b.winingPointNumberOrder || 0));

  // Step 3: Assign sequence numbers after sorting
  let sequenceCounter = 1;
  let lastOrder = null;

  // Add the sequence property to updatedwinners based on order
  const finalWinners = updatedwinners.map(winner => {
    // Only increment sequenceCounter if winingPointNumberOrder is different from lastOrder
    if (winner.winingPointNumberOrder !== lastOrder) {
      lastOrder = winner.winingPointNumberOrder;
      sequenceCounter++;
    }
    return {
      ...winner,
      sequence: sequenceCounter - 1
    };
  });

  // console.log("finalWinners", finalWinners);




  // Pre-group all winners by dividendName and replace original sequences with sequential numbers.
  function groupWinnersByDividendAndSequence() {
    const groupedWinners = {};

    // First, group winners by dividendName and original sequence
    finalWinners.forEach((winner) => {
      const dividendName = winner.dividend.dividendName;
      const sequence = winner.sequence;

      if (!groupedWinners[dividendName]) {
        groupedWinners[dividendName] = {};
      }

      if (!groupedWinners[dividendName][sequence]) {
        groupedWinners[dividendName][sequence] = [];
      }

      groupedWinners[dividendName][sequence].push(winner);
    });

    // Now, replace the original sequences with sequential numbers
    const adjustedGroupedWinners = {};

    Object.keys(groupedWinners).forEach((dividendName) => {
      adjustedGroupedWinners[dividendName] = {};

      // Get all sequences, sort them, and create a map for original to sequential numbers
      const sequences = Object.keys(groupedWinners[dividendName]).map(Number);
      sequences.sort((a, b) => a - b); // Sort sequences in ascending order

      const sequenceMapping = {};
      sequences.forEach((seq, index) => {
        sequenceMapping[seq] = index + 1; // Map original sequence to 1, 2, 3, ...
      });

      // Use the new sequential numbers in the grouped winners
      sequences.forEach((seq) => {
        const newSeq = sequenceMapping[seq];
        adjustedGroupedWinners[dividendName][newSeq] = groupedWinners[dividendName][seq];
      });
    });

    return adjustedGroupedWinners;
  }

  // Precompute grouped winners with adjusted sequences
  const groupedWinnersByDividendAndSequence = groupWinnersByDividendAndSequence();



  useEffect(() => {
    if (JSON.stringify(gameData.groupedWinnersByDividendAndSequence) !== JSON.stringify(groupedWinnersByDividendAndSequence)) {
      const updatedGameData = {
        ...gameData,
        groupedWinnersByDividendAndSequence,
      };
      dispatch(updateGame({ gameKey, gameData: updatedGameData }));
    }
  }, [groupedWinnersByDividendAndSequence, gameData, dispatch]);
  // console.log("groupedWinnersByDividendAndSequence Dividend verify modal", gameData.groupedWinnersByDividendAndSequence);
  /////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (gameData && gameData.winnersDetails) {
      setWinners(gameData.winnersDetails);
    }
  }, [gameData.winnersDetails, gameKey]);

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


  const dividendUsed = (dividendName) => {
    const dividendUsed = winners.filter(
      (winner) => winner.dividend.dividendName === dividendName && winner.isApproved
    );
    return dividendUsed.length;
  };

  const handleApprove = (index, winnerData) => {
    const updatedWinners = winners.map((winner, winnerIndex) =>
      winnerIndex === index ? { ...winner, isApproved: true } : winner
    );

    setWinners(updatedWinners);

    const updatedGameData = {
      ...gameData,
      winnersDetails: updatedWinners,
    };

    dispatch(updateGame({ gameKey, gameData: updatedGameData }));
  };

  const handleReject = (index) => {
    const updatedWinners = winners.map((winner, winnerIndex) =>
      winnerIndex === index ? { ...winner, isApproved: false } : winner
    );

    setWinners(updatedWinners);

    const updatedGameData = {
      ...gameData,
      winnersDetails: updatedWinners,
    };

    dispatch(updateGame({ gameKey, gameData: updatedGameData }));
  };

  // Function to identify the consecutive starting group with the same winningPointNumber
  const firstWinningPointNumber =
    winners.length > 0 ? winners[0].winingPointNumber : null;

  const handleApprovalAlert = (index, winnerData) => {
    Alert.alert(
      "Approve Dividend",
      "Are you sure you want to approve this Dividend?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            handleApprove(index, winnerData);
          },
          style: "default",
        },
      ]
    );
  };

  // State to manage the number of winners displayed
  const [visibleWinners, setVisibleWinners] = useState(10);

  // Load more winners dynamically when the user scrolls to the bottom
  const loadMoreWinners = () => {
    if (visibleWinners < winners.length) {
      setVisibleWinners((prev) => prev + 10); // Load 10 more winners
    }
  };

  const viewShotRefs = useRef([]);

  const handleShare = async (index) => {
    try {
      // Request write permission for Android (only required for Android versions below 10)
      if (Platform.OS === 'android' && Platform.Version < 29) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to save the image',
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.error('Storage permission denied');
          return;
        }
      }

      // Capture the view
      const uri = await captureRef(viewShotRefs.current[index], {
        format: 'jpg',
        quality: 0.8,
      });

      // Save to cache directory instead of external Pictures directory
      const filePath = `${RNFS.CachesDirectoryPath}/ticket.jpg`;
      await RNFS.moveFile(uri, filePath);

      // Share the image
      await Share.open({
        url: 'file://' + filePath,
        type: 'image/jpeg',
      });

    } catch (error) {
      console.error('Error sharing the ticket: ', error);
    }
  };


  function toOrdinal(n) {
    const suffixes = ["th", "st", "nd", "rd"];
    const value = n % 100;

    // Determine the suffix based on the value
    const suffix = (value >= 11 && value <= 13) ? "th" : suffixes[(value % 10)] || "th";

    return `${n}${suffix}`;
  }


  return (
    <Modal visible={visible} transparent={true} animationType="none">

      <Animated.View
        style={[
          styles.modalContainer,
          { transform: [{ translateX: slideAnim }] },
        ]}
      >
        <Pressable
          onPress={() => {
            onClose();
            resumeGame();
          }}
          style={{ width: '15%', backgroundColor: "rgba(0, 0, 0, 0.5)", }}>
        </Pressable>
        <View style={{ width: '85%', alignItems: 'flex-start', backgroundColor: '#f2f2f2' }}>
          {
            winners[0]?.winingPointNumber &&
            <Text
              style={{
                width: '100%',
                marginTop: 20,
                fontSize: 14,
                marginBottom: 1,
                paddingVertical: 5,
                backgroundColor: "#862d2d",
                color: "#fff",
                textAlign: "center",
              }}
            >
              New claim on the number {winners[0]?.winingPointNumber}
            </Text>
          }
          <FlatList
            data={winners.slice(0, visibleWinners)} // Show only the visible winners
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.scrollContainer}
            renderItem={({ item: winnerData, index }) => (
              <View style={styles.container}>
                <View key={index} style={{
                  marginTop: winnerData.winingPointNumber ===
                    firstWinningPointNumber ? 0 : 20,
                }}>
                  <View >
                    {winnerData.winingPointNumber ===
                      firstWinningPointNumber ? (
                      <></>
                      // <Text
                      //   style={{
                      //     fontSize: 14,
                      //     marginBottom: 8,
                      //     paddingVertical: 5,
                      //     backgroundColor: "#862d2d",
                      //     color: "#fff",
                      //     textAlign: "center",
                      //   }}
                      // >
                      //   New claim on the number {winnerData.winingPointNumber}
                      // </Text>
                    ) : (
                      <Text
                        style={{
                          width: '100%',
                          fontSize: 14,
                          marginBottom: 8,
                          paddingVertical: 5,
                          backgroundColor: "#fff",
                          color: "#862d2d",
                          textAlign: "center",
                        }}
                      >
                        Claim was on the number {winnerData.winingPointNumber}
                      </Text>
                    )}
                  </View>

                  <ViewShot
                    ref={(ref) => (viewShotRefs.current[index] = ref)}
                    options={{ format: "jpg", quality: 0.9 }}
                  >
                    <View
                      style={{
                        backgroundColor: "#fff",
                        marginHorizontal: "1%",
                        width: "98%",
                        alignItems: "center",

                        borderWidth:
                          winnerData.winingPointNumber ===
                            firstWinningPointNumber && !winnerData.isApproved
                            ? 5
                            : 0,
                        borderColor: "#bf4040",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        <View style={{ width: "20%" }}></View>
                        <View style={{ width: "60%" }}>
                          {winnerData.winingPointNumber ===
                            firstWinningPointNumber ? (
                            <Text
                              style={{
                                fontWeight: "600",
                                fontSize: 15,
                                textAlign: "center",
                                color: "Black",
                                marginTop: 10,
                              }}
                            >
                              {`${winnerData.dividend.dividendCustomName} ${winnerData.dividend.dividendCount > 1 ? `(${toOrdinal(Number(winnerData.dividendSequence))})` : ''}`}
                            </Text>
                          ) : winnerData.isApproved ? (
                            <Text
                              style={{
                                fontWeight: "600",
                                fontSize: 15,
                                textAlign: "center",
                                color: "black",
                                marginTop: 10,
                              }}
                            >
                              {`${winnerData.dividend.dividendCustomName} ${winnerData.dividend.dividendCount > 1 ? `(${toOrdinal(Number(winnerData.dividendSequence))})` : ''}`}
                            </Text>
                          ) : (
                            <Text
                              style={{
                                fontWeight: "600",
                                fontSize: 15,
                                textAlign: "center",
                                color: "red",
                                marginTop: 10,
                                textDecorationLine: "line-through",
                              }}
                            >
                              {`${winnerData.dividend.dividendCustomName} ${winnerData.dividend.dividendCount > 1 ? `(${toOrdinal(Number(winnerData.dividendSequence))})` : ''}`}

                            </Text>
                          )}

                          {winnerData.winingPointNumber ===
                            firstWinningPointNumber ? (
                            winnerData.isApproved ? (
                              <Text
                                style={{
                                  fontSize: 12,
                                  fontWeight: "600",
                                  textAlign: "center",
                                  color: "green",
                                  marginBottom: 10,
                                }}
                              >
                                ( Claim approved )
                              </Text>
                            ) : (
                              <Text
                                style={{
                                  fontSize: 12,
                                  fontWeight: "600",
                                  textAlign: "center",
                                  color: "red",
                                  marginBottom: 10,
                                }}
                              >
                                ( Claim approval pending )
                              </Text>
                            )
                          ) : winnerData.isApproved ? (
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: "600",
                                textAlign: "center",
                                color: "green",
                                marginBottom: 10,
                              }}
                            >
                              ( Claim approved )
                            </Text>
                          ) : (
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: "600",
                                textAlign: "center",
                                color: "red",
                                marginBottom: 10,
                              }}
                            >
                              ( Claim auto rejected )
                            </Text>
                          )}
                        </View>
                        <View
                          style={{ width: "20%", justifyContent: "center" }}
                        >
                          <TouchableOpacity>
                            <Fontisto
                              name="share-a"
                              size={20}
                              color="#29a329"
                              onPress={() => handleShare(index)}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>

                      <FlatList
                        data={winnerData.ticket.ticket}
                        keyExtractor={(item, idx) => idx.toString()}
                        renderItem={({ item, index: rowIndex }) => (
                          <View
                            style={{
                              backgroundColor: gameData.ticketTheme?.backgroundColor,
                              paddingHorizontal: 0,
                              borderRightWidth: 1,
                              borderLeftWidth: 1,
                            }}
                          >
                            {rowIndex === 0 && (
                              <View style={{ borderTopWidth: 1 }}>
                                <Text
                                  style={{
                                    textAlign: "center",
                                    fontSize: 17,
                                    color: gameData.ticketTheme?.ticketText,
                                  }}
                                >
                                  {gameData.brandingName}
                                </Text>
                                <Text
                                  style={{
                                    textTransform: 'uppercase',
                                    textAlign: "center",
                                    fontSize: 17,
                                    color: gameData.ticketTheme?.ticketText,
                                    fontWeight: "600",
                                    marginBottom: 5,
                                  }}
                                >
                                  {winnerData.name} - {gameData.gameId} -{" "}
                                  {String(
                                    winnerData.ticket.serialNumber
                                  ).padStart(4, "0")}
                                </Text>
                              </View>
                            )}
                            <View style={{ marginHorizontal: 5 }}>
                              <View style={{
                                flexDirection: "row",
                                borderTopWidth: 1,
                                borderRightWidth: 1,
                                borderColor: gameData.ticketTheme?.ticketText,
                                backgroundColor: "#fff",
                              }}>
                                {item.map((number, colIndex) => {
                                  const isMarked =
                                    winnerData.ticket.marked[rowIndex][
                                    colIndex
                                    ];
                                  return (
                                    <View
                                      key={colIndex}
                                      style={[
                                        {
                                          width: 30,
                                          height: 33,
                                          justifyContent: "center",
                                          alignItems: "center",
                                          borderBottomWidth: 1.5,
                                          borderLeftWidth: 1.5,
                                          borderColor: gameData.ticketTheme?.borderColor,
                                        },
                                        isMarked && {
                                          backgroundColor: gameData.ticketTheme?.selectedCellBackgroundColor,
                                        },
                                      ]}
                                    >
                                      <Text
                                        style={[
                                          styles.number,
                                          isMarked && { color: "#fff" },
                                        ]}
                                      >
                                        {number !== null ? number : ""}
                                      </Text>
                                    </View>
                                  );
                                })}
                              </View>
                            </View>
                            {rowIndex === 2 && (
                              <View
                                style={{ marginTop: 5, borderBottomWidth: 1 }}
                              ></View>
                            )}
                          </View>
                        )}
                      />

                      {winnerData.winingPointNumber ===
                        firstWinningPointNumber ? (
                        winnerData.isApproved ? (
                          <TouchableOpacity
                            style={{
                              marginTop: 10,
                              height: 38,
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: "#fff",
                              alignItems: "center",
                              borderRadius: 3,
                              marginBottom: 10,
                              width: "35%",
                              elevation: 3,
                            }}
                            onPress={() => handleReject(index)}
                          >
                            <Text style={{ fontWeight: 500, color: "red" }}>
                              Reject Claim
                            </Text>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            style={{
                              marginTop: 10,
                              height: 38,
                              alignItems: "center",
                              justifyContent: "center",
                              width: "40%",
                              backgroundColor: "#00b359",
                              alignItems: "center",
                              borderRadius: 3,
                              marginBottom: 10,
                            }}
                            onPress={() =>
                              gameData.isDividendApproveAlert
                                ? handleApprovalAlert(index, winnerData)
                                : handleApprove(index, winnerData)
                            }
                          >
                            <Text style={styles.approveText}>
                              Approve Claim
                            </Text>
                          </TouchableOpacity>
                        )
                      ) : (
                        <View style={{ marginTop: 15 }}></View>
                      )}
                    </View>
                  </ViewShot>
                </View>
              </View>
            )}
            onEndReached={loadMoreWinners} // Load more when reaching the end
            onEndReachedThreshold={0.8} // Trigger when 80% away from the bottom
          />

          <View
            style={{
              width: '100%',
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: "space-evenly",
              height: 50,
              backgroundColor: "#fff",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                onClose();
                resumeGame();
              }}
              style={{
                height: 35,
                width: "15%",
                marginLeft: '2%',
                alignItems: "center",
                justifyContent: "center",
                elevation: 2,
                backgroundColor: "#fff",
                borderRadius: 3,
              }}
            >
              <Text style={{ textAlign: "center" }}>
                <AntDesign name="arrowleft" size={24} color="black" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSearchTicketModalVisible(true)}
              style={{
                borderRadius: 3,
                elevation: 2,
                width: "36%",
                marginLeft: '3%',
                height: 35,
                backgroundColor: "#ff8080",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ marginRight: 15 }}>
                <Octicons name="search" size={20} color="#000080" />
              </Text>
              <Text
                style={{ fontWeight: "500", fontSize: 14, color: "#000080" }}
              >
                Search
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSummaryShowModalVisible(true)}
              style={{
                borderRadius: 3,
                elevation: 2,
                width: "38%",
                marginLeft: '3%',
                height: 35,
                backgroundColor: "black",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ marginRight: 5 }}>
                <MaterialCommunityIcons
                  name="playlist-check"
                  size={28}
                  color="#ffcc00"
                />
              </Text>
              <Text
                style={{ fontWeight: "500", fontSize: 14, color: "#ffcc00" }}
              >
                Summary
              </Text>
            </TouchableOpacity>

          </View>
        </View>

      </Animated.View>




      <SearchTicketModal
        gameKey={gameKey}
        visible={searchTicketModalVisible}
        dividendModalClose={onClose}
        onClose={() => {
          setSearchTicketModalVisible(false);
        }}
      />

      <SummaryShowModal
        gameKey={gameKey}
        visible={summaryShowModalVisible}
        dividendModalClose={onClose}
        onClose={() => {
          setSummaryShowModalVisible(false);
        }}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({

  modalContainer: {
    flex: 1,
    flexDirection: 'row',
    height: "95%",
    // backgroundColor: "#e6e6e6",
  },
  scrollContainer: {
    paddingVertical: 5,
  },
  container: {
    backgroundColor: "#e6e6e6",
  },
  winnerContainer: {
    marginBottom: 24,
  },

  approveButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "green",
    alignItems: "center",
    borderRadius: 5,
  },
  approveText: {
    color: "#fff",
    fontWeight: "500",
  },

  ticketNumber: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: "#800080",
    backgroundColor: "#fff",
  },
  cell: {
    width: 34,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1.5,
    borderLeftWidth: 1.5,
    borderColor: "#800080",
  },
  markedCell: {
    backgroundColor: "red",
  },
  number: {
    fontSize: 16,
    fontWeight: "700",
  },
});

export default DividendsVerifyModal;
