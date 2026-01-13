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
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import SearchTicketModal from "./SearchTicketModal";
const { height, width } = Dimensions.get("window");

import ViewShot, { captureRef } from "react-native-view-shot";
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import { PermissionsAndroid, Platform } from 'react-native';


const SummaryShowModal = ({
  gameKey,
  visible,
  onClose,
  dividendModalClose,
}) => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.games);
  const gameData = games[gameKey];
  // console.log('summary modal', gameData.winnersDetails);
  const [winners, setWinners] = useState(gameData.winnersDetails || []);
  const [calledNumbers, setCalledNumbers] = useState(gameData.calledNumbers || []);
  const [dividends, setDividends] = useState(gameData.dividends || []);
  const [pendingDividend, setPendingDividend] = useState([]);
  const [searchTicketModalVisible, setSearchTicketModalVisible] = useState(false);


  const updatedwinners = winners
    .filter(winner => winner.isApproved)
    .map(winner => {
      const winingPointNumberIndex = calledNumbers.indexOf(winner.winingPointNumber);
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

  //  console.log("groupedWinnersByDividendAndSequence", groupedWinnersByDividendAndSequence);

  function getWinnersByDividend(dividendName, dividendRank) {
    const winnersForDividend = groupedWinnersByDividendAndSequence[dividendName]?.[dividendRank] || [];

    return winnersForDividend.map((winner, index) => (
      <View key={index} style={{ alignItems: "flex-end" }}>
        <Text
          style={{
            color: "blue",
            fontWeight: "500",
            marginRight: 5,
            marginVertical: 3,
          }}
        >
          {winner.name} ({String(winner.serialNumber).padStart(4, "0")})
        </Text>
      </View>
    ));
  }


  const dividendsForDisplay = dividends.flatMap(dividend =>
    Array.from({ length: dividend.dividendCount }, (_, index) => ({
      ...dividend,
      dividendRank: index + 1
    }))
  );

  // console.log("dividendsForDisplay", dividendsForDisplay);


  const slideAnim = useRef(new Animated.Value(width)).current;


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
    const arrayOfAllWinningPointNumber = winners.filter(
      (winner) => winner.dividend.dividendName === dividendName && winner.isApproved
    ).map((winner) => winner.winingPointNumber);

    const arrayOfUniqueWinningPoints = [...new Set(arrayOfAllWinningPointNumber)];
    return arrayOfUniqueWinningPoints.length;
  };

  useEffect(() => {
    // This effect will run whenever 'dividends' or 'winners' change
    pendingDividendHandle();
  }, [dividends, winners]);

  const pendingDividendHandle = () => {
    const dividendArray = [];

    // Iterate over each dividend
    dividends.forEach((dividend) => {
      // Calculate how many dividends are pending
      const dividendPendingCount =
        dividend.dividendCount - dividendUsed(dividend.dividendName);

      // Push the dividend name to the array for each pending dividend
      for (let i = 0; i < dividendPendingCount; i++) {
        dividendArray.push(dividend.dividendCustomName);
      }
    });

    // Update the state with the pending dividends
    setPendingDividend(dividendArray);
    // console.log("pendingDividend", dividendArray);
  };


  const viewShotRef = useRef(null);
  const handleShare = async () => {
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
      const uri = await captureRef(viewShotRef, {
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

  const viewShotRefTwo = useRef(null);
  const handleShareTwo = async () => {
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
      const uri = await captureRef(viewShotRefTwo, {
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






  function getOrdinalSuffix(rank) {
    const suffixes = ["th", "st", "nd", "rd"];
    const remainder = rank % 100;

    return rank + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0]);
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
            dividendModalClose();
          }}
          style={{ width: '15%', backgroundColor: "rgba(0, 0, 0, 0.5)", }}
        ></Pressable>

        <View
          style={{ width: '85%', height: '100%', backgroundColor: '#f2f2f2' }}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <ViewShot
              ref={viewShotRef}
              options={{ format: "jpg", quality: 0.9 }}
              style={{ width: '100%' }}
            >
              <View
                style={{
                  backgroundColor: "#e6e6e6",
                  width: '100%',
                  marginLeft: "3%",
                  marginTop: "5%",
                  borderWidth: 2,
                  borderRadius: 15,
                  paddingBottom: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <View></View>
                  <View>
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 20,
                        textAlign: "center",
                        color: "#862d2d",
                        marginVertical: 10,
                      }}
                    >
                      Dividends || Prizes
                    </Text>
                  </View>
                  <TouchableOpacity onPress={handleShare}>
                    <Fontisto name="share-a" size={20} color="#009933" />
                  </TouchableOpacity>
                </View>
                {dividendsForDisplay.map((dividend, indx) => (
                  <View key={indx} style={{ marginLeft: 5 }}>

                    <Text style={{ fontSize: 15, marginVertical: 3 }}>
                      {indx + 1}. {dividend.dividendCustomName} {dividend.dividendCount > 1 && `(${getOrdinalSuffix(dividend.dividendRank)})`}
                    </Text>
                    <View style={{ marginHorizontal: 5 }}>
                      {getWinnersByDividend(dividend.dividendName, dividend.dividendRank)}
                    </View>
                  </View>
                ))}
              </View>
            </ViewShot>

            <ViewShot
              ref={viewShotRefTwo}
              options={{ format: "jpg", quality: 0.9 }}
            >
              <View
                style={{
                  backgroundColor: "#e6e6e6",
                  width: '100%',
                  marginLeft: "3%",
                  marginTop: "5%",
                  borderWidth: 2,
                  borderRadius: 15,
                  paddingBottom: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <View></View>
                  <View>
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 20,
                        textAlign: "center",
                        color: "#862d2d",
                        marginVertical: 10,
                      }}
                    >
                      Pending Dividends
                    </Text>
                  </View>
                  <TouchableOpacity onPress={handleShareTwo}>
                    <Fontisto name="share-a" size={20} color="#009933" />
                  </TouchableOpacity>
                </View>
                {pendingDividend.map((dividend, indx) => (
                  <View
                    key={indx}
                    style={{
                      marginLeft: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontSize: 15, marginVertical: 3 }}>
                      {indx + 1}. {dividend}
                    </Text>
                  </View>
                ))}
              </View>
            </ViewShot>
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: '100%',
              height: 50,
              backgroundColor: "#fff",
            }}
          >
            <TouchableOpacity
              onPress={() => onClose()}
              style={{
                height: 35,
                width: "18%",
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
                width: "35%",
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
              style={{
                borderRadius: 3,
                elevation: 2,
                width: "35%",
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
        onClose={() => {
          setSearchTicketModalVisible(false);
        }}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    height: "95%",
    // backgroundColor: "#e6e6e6",
  },
  scrollContainer: {
    width: "95%",
    paddingVertical: 5,
  },
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
});

export default SummaryShowModal;
