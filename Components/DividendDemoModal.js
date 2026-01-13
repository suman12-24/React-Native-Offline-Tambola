import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Modal, Animated, TouchableOpacity, Dimensions, Pressable } from 'react-native';


import dividendDescription from '../Screens/dividendDescription';
const { height, width } = Dimensions.get('window');


import ViewShot, { captureRef } from "react-native-view-shot";
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import { PermissionsAndroid, Platform } from 'react-native';
import dividendDescription1 from './DividentSegregation/dividendDescription1';
import dividendDescription2 from './DividentSegregation/dividendDescription2';
import dividendDescription3 from './DividentSegregation/dividendDescription3';
import dividendDescription4 from './DividentSegregation/dividendDescription4';
import dividendDescription5 from './DividentSegregation/dividendDescription5';
import dividendDescription6 from './DividentSegregation/dividendDescription6';
import dividendDescription7 from './DividentSegregation/dividendDescription7';
import dividendDescription8 from './DividentSegregation/dividendDescription8';
import dividendDescription9 from './DividentSegregation/dividendDescription9';
import dividendDescription10 from './DividentSegregation/dividendDescription10';
import { useSelector } from 'react-redux';

const DividendDemoModal = ({ dividendName, dividendCustomName, visible, onClose, brandingName, gameKey }) => {

  const games = useSelector((state) => state.game.games);
  const gameData = games[gameKey];

  const slideAnim = useRef(new Animated.Value(width)).current;

  const dividendDescriptions = [
    dividendDescription,
    dividendDescription1,
    dividendDescription2,
    dividendDescription3,
    dividendDescription4,
    dividendDescription5,
    dividendDescription6,
    dividendDescription7,
    dividendDescription8,
    dividendDescription9,
    dividendDescription10,
  ];

  // Function to pick a random dividend description
  const getRandomDividendDescription = () => {
    const randomIndex = Math.floor(Math.random() * dividendDescriptions.length);
    return dividendDescriptions[randomIndex];
  };

  const dividendDescriptionForAll = getRandomDividendDescription();
  const item = dividendDescriptionForAll[dividendName];



  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: width * 0.15,
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


  return (
    <Modal visible={visible} transparent={true} animationType="none">
      <TouchableOpacity onPress={onClose} style={styles.modalOverlay}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ translateX: slideAnim }] },
          ]}
        >
          <ScrollView
            contentContainerStyle={{ marginRight: "16.5%", marginLeft: "1%" }}
          >
            <Pressable
              onPress={(event) => event.stopPropagation()}
              style={{ height: height }}
            >
              <ViewShot
                ref={viewShotRef}
                options={{ format: "jpg", quality: 0.9 }}
              >
                <View style={{ backgroundColor: '#fff' }}>
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: "20%",
                      color: "#862d2d",
                      fontSize: 19,
                    }}
                  >
                    {dividendCustomName}
                  </Text>
                  <Text
                    style={{ fontSize: 16, color: "#862d2d", marginTop: "15%" }}
                  >
                    {item?.description}
                  </Text>
                  <View style={{
                    paddingLeft: '1%',
                    borderWidth: 1,
                    backgroundColor: gameData.ticketTheme?.backgroundColor,
                    borderColor: 'black',
                    marginTop: 7,
                    paddingBottom: 10

                  }}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View style={{ width: "10%" }}></View>
                      <View style={{ width: "80%" }}>
                        <Text
                          style={{
                            textAlign: "center",
                            fontSize: 18,
                            color: gameData.ticketTheme?.ticketText,
                          }}
                        >
                          {brandingName}
                        </Text>
                        <Text style={{
                          fontSize: 16,
                          color: gameData.ticketTheme?.ticketText,
                          textAlign: 'center',
                          fontWeight: '700',
                          marginBottom: 5,
                        }}>
                          PLAYER NAME - 9286 - 0001
                        </Text>
                      </View>
                      <View style={{ width: "10%" }}></View>
                    </View>
                    <View
                      style={{
                        height: height * 0.15,
                        width: width * 0.82,
                        position: "relative",
                      }}
                    >
                      <View
                        style={{
                          height: height * 0.153,
                          width: width * 0.75,
                          borderColor: gameData.ticketTheme?.borderColor,
                          borderWidth: 1,
                          marginLeft: "1.6%",
                        }}
                      >
                        {item?.ticketDetails?.ticket?.map((row, rowIndex) => (
                          <View key={rowIndex} style={styles.row}>
                            {row?.map((number, colIndex) => {
                              const isMarked =
                                item?.ticketDetails?.marked[rowIndex][colIndex];
                              return (
                                <View
                                  key={colIndex}
                                  style={{
                                    borderWidth: 1.2,
                                    borderColor: gameData.ticketTheme?.borderColor,
                                    backgroundColor: isMarked ? gameData.ticketTheme?.selectedCellBackgroundColor : "#fff",
                                    width: width * 0.083,
                                    height: height * 0.051,
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <Text
                                    style={[
                                      {
                                        fontSize: 15,
                                        fontWeight: "bold",
                                      },
                                      { color: isMarked ? "#fff" : "black" },
                                    ]}
                                  >
                                    {number !== null ? number : ""}
                                  </Text>
                                </View>
                              );
                            })}
                          </View>
                        ))}
                      </View>
                    </View>
                  </View>
                </View>
              </ViewShot>
            </Pressable>
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: 50,
              backgroundColor: "#fff",
            }}
          >
            <TouchableOpacity
              onPress={() => onClose()}
              style={{
                borderRadius: 3,
                elevation: 2,
                width: "31%",
                height: 35,
                backgroundColor: "#fff",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ textAlign: "center", color: "red", fontWeight: "600" }}
              >
                BACK
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleShare}
              style={{
                borderRadius: 3,
                elevation: 2,
                width: "31%",
                height: 35,
                backgroundColor: "#00802b",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 14, color: "#fff" }}>
                SHARE
              </Text>
            </TouchableOpacity>

            <View style={{ width: "14%" }}></View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ticketContainer: {
    paddingLeft: '1%',
    borderWidth: 1,
    backgroundColor: '#f9ecf9',
    borderColor: 'black',
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '98%',
    height: '100%',
    backgroundColor: '#fff',
    // paddingHorizontal: 16,
    // paddingTop: 24,
  },

  container: {
    flex: 1,

    backgroundColor: '#fff',
  }


});

export default DividendDemoModal;
