import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, FlatList, ScrollView, StyleSheet, Modal, Animated, TouchableOpacity, Dimensions, Pressable,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateGame } from '../redux/slices/gameSlice';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SearchTicketModal from './SearchTicketModal';
import { useNavigation } from '@react-navigation/native';
import ViewShot, { captureRef } from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import { PermissionsAndroid, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

const DividendsPrize = ({ gameKey, visible, onClose }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const games = useSelector(state => state.game.games);
  const gameData = games[gameKey];
  const slideAnim = useRef(new Animated.Value(width)).current;
  const [dividends, setDividends] = useState(gameData.dividends || []);
  const dividendWinners = gameData.winnersDetails.reduce((acc, winner) => {
    const dividend = winner.dividend;
    if (!acc[dividend]) {
      acc[dividend] = [];
    }
    acc[dividend].push(winner);
    return acc;
  }, {});
  const dividendsForDisplay = dividends.flatMap(dividend =>
    Array.from({ length: dividend.dividendCount }, (_, index) => ({
      ...dividend,
      dividendRank: index + 1
    }))
  );

  // Inside DividendsPrize component

  // Watch for changes in gameData.dividends and update local dividends state accordingly
  useEffect(() => {
    setDividends(gameData.dividends || []);
  }, [gameData.dividends]);

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

  function getOrdinalSuffix(rank) {
    const suffixes = ["th", "st", "nd", "rd"];
    const remainder = rank % 100;

    return rank + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0]);
  }


  const viewShotRef = useRef(null);

  const handleShare = async () => {
    try {
      if (Platform.OS === 'android' && Platform.Version < 29) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to save the image',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.error('Storage permission denied');
          return;
        }
      }

      const uri = await captureRef(viewShotRef, {
        format: 'jpg',
        quality: 0.8,
      });

      const filePath = `${RNFS.CachesDirectoryPath}/ticket.jpg`;
      await RNFS.moveFile(uri, filePath);

      await Share.open({
        url: 'file://' + filePath,
        type: 'image/jpeg',
      });
    } catch (error) {
      console.error('Error sharing the ticket: ', error);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ translateX: slideAnim }] },
          ]}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <ViewShot
              ref={viewShotRef}
              options={{ format: 'jpg', quality: 0.9 }}>
              <View style={{ backgroundColor: '#fff', paddingBottom: 10 }}>
                <View
                  style={{
                    backgroundColor: '#e6e6e6',
                    marginRight: '15%',
                    marginLeft: '2%',
                    marginTop: '3%',
                    borderWidth: 2,
                    borderRadius: 15,
                    paddingBottom: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontWeight: '400',
                          fontSize: 21,
                          textAlign: 'center',
                          color: '#862d2d',
                          marginVertical: 10,
                        }}>
                        Dividends || Prizes
                      </Text>
                    </View>
                  </View>
                  {dividendsForDisplay.map((dividend, indx) => (
                    <View key={indx} style={{ marginLeft: 5 }}>

                      <Text style={{ fontSize: 16, marginVertical: 3, fontWeight: '400', color: 'black' }}>
                        {indx + 1}. {dividend.dividendCustomName} {dividend.dividendCount > 1 && `(${getOrdinalSuffix(dividend.dividendRank)})`}
                      </Text>

                    </View>
                  ))}
                </View>
              </View>
            </ViewShot>
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 50,
              backgroundColor: '#fff',
            }}>
            <View style={{ width: '2%' }}></View>
            <TouchableOpacity
              onPress={onClose}
              style={{
                borderRadius: 3,
                elevation: 2,
                width: '31%',
                height: 35,
                backgroundColor: '#fff',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'red' }}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleShare}
              style={{
                borderRadius: 3,
                elevation: 2,
                width: '31%',
                height: 35,
                backgroundColor: '#43a047',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ fontWeight: '500', fontSize: 14, color: '#ffffff' }}>
                Share
              </Text>
            </TouchableOpacity>
            <View style={{ width: '14%' }}></View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default DividendsPrize;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '115%',
    height: '100%',
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingVertical: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
//in this code, when i share the Image, then the content will be sharable inside the border

