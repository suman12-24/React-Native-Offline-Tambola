import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateGame } from '../redux/slices/gameSlice';
import RadioButtonGroup from './RadioButtonGroup';

import Tts from 'react-native-tts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import SlidingNonBlockingModal from '../Components/SlidingNonBlockingModal';
import DividendsVerifyModal from '../Components/DividendsVerifyModal';
import { useFocusEffect } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useCallback, useMemo } from 'react';
import moment from 'moment';

import ViewShot, { captureRef } from "react-native-view-shot";
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import { PermissionsAndroid, Platform } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'

const PlaySection = ({ navigation, route }) => {
    const games = useSelector((state) => state.game.games);
    const { gameKey } = route.params;
    const gameData = games[gameKey];
    //  console.log('gameData playsection', gameData.playerInfo[0].tickets[0]);
    const [players, setPlayers] = useState(gameData.playerInfo || []);
    const [calledNumbers, setCalledNumbers] = useState(gameData.calledNumbers || []);
    const [winners, setWinners] = useState([]); // Updated to store multiple winners
    const [winnersList, setWinnersList] = useState(gameData.winnersDetails || []);

    const getInitialWinners = (type) => {
        const dividend = gameData.dividendsWiseWinners?.find((item) => item.type === type);
        return dividend ? dividend.winners : [];
    };
    const [firstRowWinners, setFirstRowWinners] = useState(getInitialWinners("First/Top Line"));
    const [secondRowWinners, setSecondRowWinners] = useState(getInitialWinners("Second/Middle Line"));
    const [thirdRowWinners, setThirdRowWinners] = useState(getInitialWinners("Third/Last Line"));

    // corners divident
    const [fourcorners, setFourCorners] = useState(getInitialWinners("4 Corners"));
    const [queenCornersWinners, setQueenCornersWinners] = useState(getInitialWinners("Queen Corners"));
    const [kingCornerWinners, setKingCornersWinners] = useState(getInitialWinners("King Corners"));
    const [fourCornercenterWinners, setfourCornercenterWinners] = useState(getInitialWinners("4 Corners and Center"));
    const [bullEyes, setBullEyes] = useState(getInitialWinners("Bulls Eyes"));
    const [twinLines, setTwinLines] = useState(getInitialWinners("Twin Lines"));
    const [sixcorners, setSixcorners] = useState(getInitialWinners('6 Corners'));
    const [sixcornersCenter, setSixcornersCenter] = useState(getInitialWinners('6 Corners and Center'));
    const [ReversetwinLines, setReverseTwinLines] = useState(getInitialWinners('Reverse Twin'));

    //early divident
    const [earlyFiveWinners, setEarlyFiveWinners] = useState(getInitialWinners('Early 5/Jaldi 5'));
    const [earlySixWinners, setEarlySixWinners] = useState(getInitialWinners('Early 6/Jaldi 6'));
    const [earlySevenWinners, setEarlySevenWinners] = useState(getInitialWinners('Early 7/Jaldi 7'));
    const [earlyEightWinners, setEarlyEightWinners] = useState(getInitialWinners('Early 8/Jaldi 8'));
    const [earlyNightWinners, setEarlyNightWinners] = useState(getInitialWinners('Early 9/Jaldi 9'));
    const [earlyTenWinners, setEarlyTenWinners] = useState(getInitialWinners('Early 10/Jaldi 10'));
    const [earlyElevenWinners, setEarlyElevenWinners] = useState(getInitialWinners('Early 11/Jaldi 11'));
    const [earlyTwelveWinners, setEarlyTwelveWinners] = useState(getInitialWinners('Early 12/Jaldi 12'));
    const [earlyThirteenWinners, setEarlyThirteenWinners] = useState(getInitialWinners('Early 13/Jaldi 13'));
    const [earlyFourteenWinners, setEarlyFourteenWinners] = useState(getInitialWinners('Early 14/Jaldi 14'));

    //Extra
    const [breakfast, setBreakfast] = useState(getInitialWinners('Breakfast'));
    const [lunch, setLunch] = useState(getInitialWinners('Lunch'));
    const [dinner, setDinner] = useState(getInitialWinners('Dinner'));
    const [day, setDay] = useState(getInitialWinners('Day || Jawani'));
    const [night, setNight] = useState(getInitialWinners('Night || Budhapa'));
    const [center, setCenter] = useState(getInitialWinners('Center || Laddu'));
    const [bamboo, setBamboo] = useState(getInitialWinners('Bamboo'));
    const [firsthalf, setFirsthalf] = useState(getInitialWinners('First Half'));
    const [secondhalf, setSecondhalf] = useState(getInitialWinners('Second Half'));
    const [shehnaibidaai, setShehnaibidaai] = useState(getInitialWinners('Shehnai Bidaai'));
    const [brahma, setBrahma] = useState(getInitialWinners('Brahma'));
    const [vishnu, setVishnu] = useState(getInitialWinners('Vishnu'));
    const [mahesh, setMahesh] = useState(getInitialWinners('Mahesh'));
    const [railwaytrack, setRailwaytrack] = useState(getInitialWinners('Railway Track'));
    const [drum, setDrum] = useState(getInitialWinners('Drum'));
    const [zip, setZip] = useState(getInitialWinners('ZIP'));
    const [zap, setZap] = useState(getInitialWinners('ZAP'));
    // all number start and end with
    const [hockyStick, setHockyStick] = useState(getInitialWinners('Hockey Stick'));
    const [fatLady, setFatLady] = useState(getInitialWinners('Fat Lady'));
    const [uglyDuckling, setUglyDuckling] = useState(getInitialWinners('Ugly Duckling'));

    // special numbers
    const [iLoveYou, setiLoveYou] = useState(getInitialWinners('I Love You 143'));
    const [weLoveYou, setweLoveYou] = useState(getInitialWinners('We Love You 243'));
    const [oneTwoFour, setOneTwoFour] = useState(getInitialWinners('124'));
    const [fourTwoOne, setFourTwoOne] = useState(getInitialWinners('421'));
    const [twoTwoFive, settwoTwoFive] = useState(getInitialWinners('225'));
    const [oneTwoThree, setOneTwoThree] = useState(getInitialWinners('123'));
    const [threeThreeThree, setthreeThreeThree] = useState(getInitialWinners('333'));
    const [fourTwoOneReverse, setFourTwoOneReverse] = useState(getInitialWinners('4 2 ka 1(Reverse)'));
    const [dividentTripleThreeReverse, setDividentTripleThreeReverse] = useState(getInitialWinners('333 (reverse)'));
    const [dividentThreeTwoOneReverse, setDividentThreeTwoOneReverse] = useState(getInitialWinners('3 2 ka 1(Reverse)'));

    // math
    const [pyramid, setPyramid] = useState(getInitialWinners('Pyramid'));
    const [reversepyramid, setReversePyramid] = useState(getInitialWinners('Reverse Pyramid'));
    const [circle, setCircle] = useState(getInitialWinners('Circle'));
    const [plus, setPlus] = useState(getInitialWinners('Plus'));
    const [alleven, setAllEven] = useState(getInitialWinners('All Even'));
    const [allodd, setAllOdd] = useState(getInitialWinners('All Odd'));

    // full house winners
    const [fullHouseWinners, setFullHouseWinners] = useState(getInitialWinners('House'));

    // min-max winners
    const [tempWinners, setTempWinners] = useState(getInitialWinners('Temp./ BP'));
    const [twoSmallestTwoLargest, setTwoSmallestTwoLargest] = useState(getInitialWinners('Double Temp.'));

    // pairs 
    const [onePairRowWinners, setOnePairRowWinners] = useState(getInitialWinners('1 Pair (Row)'));
    const [twoPairRowWinners, setTwoPairRowWinners] = useState(getInitialWinners('2 Pair (Row)'));
    const [threePairRowWinners, setThreePairRowWinners] = useState(getInitialWinners('3 Pair (Row)'));
    const [fourPairRowWinners, setFourPairRowWinners] = useState(getInitialWinners('4 Pair (Row)'));
    const [allPairs, setAllPairs] = useState(getInitialWinners('All Pair (Row)'));
    const [onePairColumnWinners, setOnePairColumnWinners] = useState(getInitialWinners('1 Pair (Column)'));
    const [twoPairColumnWinners, setTwoPairColumnWinners] = useState(getInitialWinners('2 Pair (Column)'));
    const [threePairColumnWinners, setThreePairColumnWinners] = useState(getInitialWinners('3 Pair (Column)'));
    const [fourPairColumnWinners, setFourPairColumnWinners] = useState(getInitialWinners('4 Pair (Column)'));
    const [allPairColumnWinners, setAllPairColumnWinners] = useState(getInitialWinners('All Pair (Column)'));

    const [mode, setMode] = useState('manual');
    const [isAutoRunning, setIsAutoRunning] = useState(false);
    const [overlayNumber, setOverlayNumber] = useState(null);
    const [isMuted, setIsMuted] = useState(false);
    const [secondForAuto, setSecondForAuto] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const [calledNumberModalVisible, setCalledNumberModalVisible] = useState(false);
    const dispatch = useDispatch();
    const [dividendsModalVisible, setDividendsModalVisible] = useState(false);
    const [dividendsList, setDividendsList] = useState(gameData.dividends);
    const currentTime = moment().format('ddd, DD MMM YYYY       hh:mm:ss A');
    const [rerender, setRerender] = useState(false);
    const [dividendsNotification, setDividendsNotification] = useState(false);
    const newDividendCount = useRef(0);


    useEffect(() => {
        setWinnersList(gameData.winnersDetails || []);
        // if (calledNumbers.length >= 90) {
        //     setTimeout(() => {
        //         generateRandomNumber();
        //     }, 10)
        // }
    }, [rerender])

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const generateRandomNumber = () => {

        if (calledNumbers.length >= 90) {
            const updatedGameData = {
                ...gameData,
                calledNumbers: calledNumbers,
                isGameCompleted: true,
            };
            dispatch(updateGame({ gameKey, gameData: updatedGameData }));
            return;
        }

        let newNumber;
        do {
            newNumber = Math.floor(Math.random() * 90) + 1;
        } while (calledNumbers.includes(newNumber));


        setCalledNumbers((prevCalledNumbers) => {

            const updatedCalledNumbers = [...prevCalledNumbers, newNumber];


            // This Section for marking the called numbers accrose the tickets
            const updatedPlayers = players.map((player) => {
                const updatedTickets = player?.tickets.map((ticket) => {

                    // Ensure ticket and marked arrays are valid
                    const markedArrayExists = Array.isArray(ticket.marked) && ticket.marked.length === 3;
                    const ticketArrayExists = Array.isArray(ticket.ticket) && ticket.ticket.length === 3;

                    if (!markedArrayExists || !ticketArrayExists) {
                        console.error(`Player ${player.name} has an invalid ticket structure`);
                        return ticket; // Skip this ticket if invalid
                    }

                    const updatedMarked = ticket.marked.map((row) => [...row]);
                    const updatedTicket = ticket.ticket.map((row, rowIndex) =>
                        row.map((cellNumber, colIndex) => {
                            if (cellNumber === newNumber) {
                                updatedMarked[rowIndex][colIndex] = true;
                            }
                            return cellNumber;
                        })
                    );

                    // Return the updated ticket with the marked numbers
                    return { ...ticket, ticket: updatedTicket, marked: updatedMarked };
                });

                // Return the player with the updated tickets
                return { ...player, tickets: updatedTickets };
            });
            setPlayers(updatedPlayers);
            const updatedGameData = { ...gameData, playerInfo: updatedPlayers };
            dispatch(updateGame({ gameKey, gameData: updatedGameData }));



            const dividendMappings = {
                "First/Top Line": firstRowDividend,
                "Second/Middle Line": secondRowDividend,
                "Third/Last Line": thirdRowDividend,
                "4 Corners": fourCornerDivident,
                "Queen Corners": queenCornersDividend,
                "King Corners": kingCornersDividend,
                "4 Corners and Center": fourCornerCenterDivident,
                "Bulls Eyes": bullEyesDividend,
                "Twin Lines": twinLinesDividend,
                "6 Corners": sixCornersDivident,
                "6 Corners and Center": sixCornersCenterDivident,
                "Reverse Twin": ReversetwinLinesDivident,
                "Breakfast": breakfastDividend,
                "Lunch": lunchDividend,
                "Dinner": dinnerDividend,
                "Day || Jawani": dayDividend,
                "Night || Budhapa": nightDividend,
                "Center || Laddu": centerDividend,
                "Bamboo": bambooDividend,
                "First Half": firsthalfDividend,
                "Second Half": secondhalfDividend,
                "Shehnai Bidaai": shehnaibidaaiDividend,
                "Brahma": brahmaDividend,
                "Vishnu": vishnuDividend,
                "Mahesh": maheshDividend,
                "Railway Track": railwaytrackDividend,
                "Drum": drumDividend,
                "ZIP": zipDividend,
                "ZAP": zapDividend,
                "Early 5/Jaldi 5": earlyFiveDivident,
                "Early 6/Jaldi 6": earlySixDivident,
                "Early 7/Jaldi 7": earlySevenDivident,
                "Early 8/Jaldi 8": earlyEightDivident,
                "Early 9/Jaldi 9": earlyNineDivident,
                "Early 10/Jaldi 10": earlyTenDivident,
                "Early 11/Jaldi 11": earlyElevenDivident,
                "Early 12/Jaldi 12": earlyTwelveDivident,
                "Early 13/Jaldi 13": earlyThirteenDivident,
                "Early 14/Jaldi 14": earlyFourteenDivident,
                "Pyramid": pyramidDividend,
                "Reverse Pyramid": reversepyramidDividend,
                "Circle": circleDividend,
                "Plus": PlusDividend,
                "All Even": allEvenDivident,
                "All Odd": allOddDivident,
                "Hockey Stick": hockyStickDivident,
                "Fat Lady": fatLadyDivident,
                "Ugly Duckling": uglyDucklingDivident,
                "I Love You 143": iLoveYouDividend,
                "We Love You 243": weLoveYouDividend,
                "124": dividendOneTwoFour,
                "421": dividendFourTwoOne,
                "225": dividendTwoTwoFive,
                "123": dividendOneTwoThree,
                "333": dividendThreeThreeThree,
                "4 2 ka 1(Reverse)": dividendFourTwoOneReverse,
                "333 (reverse)": dividendTripleThreeReverse,
                "3 2 ka 1(Reverse)": dividendThreetwoOneReverse,
                "House": fullHouseDividend,
                "Temp./ BP": smallestLargestDivident,
                "Double Temp.": twoSmallestTwoLargestDivident,
                "1 Pair (Row)": onePairRowDivident,
                "2 Pair (Row)": twoPairRowDivident,
                "3 Pair (Row)": threePairRowDivident,
                "4 Pair (Row)": fourPairRowDivident,
                "All Pair (Row)": allPairRowDivident,
                "1 Pair (Column)": onePairColumnDividend,
                "2 Pair (Column)": twoPairColumnDividend,
                "3 Pair (Column)": threePairColumnDividend,
                "4 Pair (Column)": fourPairColumnDividend,
                "All Pair (Column)": allPairColumnDividend
            };



            dividendsList.forEach((dividend) => {
                const { dividendName, dividendCount } = dividend;
                const dividendFunction = dividendMappings[dividendName];
                if (dividendFunction) {
                    dividendFunction(newNumber, dividendCount, dividend, updatedPlayers);
                }
            });
            setOverlayNumber(newNumber);
            if (!isMuted) {
                if (Math.floor(newNumber / 10) == 0) {
                    Tts.speak(`Only, ${newNumber}`);
                } else {
                    Tts.speak(`${Math.floor(newNumber / 10)}, ${newNumber % 10}, ${newNumber}`);
                }
            }
            setTimeout(() => setOverlayNumber(null), 2000);
            return updatedCalledNumbers;
        });

    };


    const firstRowDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...firstRowWinners]; // Copy the current winners list
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                let isWinningTicket = false;
                const marked = ticket.marked.map((row) => [...row]);

                // Check if the ticket has won (e.g., first full row is marked)
                for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
                    if (marked[0].filter(Boolean).length === 5) {
                        isWinningTicket = true;
                        break;
                    }
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer &&
                    ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber) // Check ticket uniqueness
                ) {
                    const winnerData = {
                        name: player.name, // Owner of the ticket
                        serialNumber: ticket.serialNumber, // Ticket serial number
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData); // Add the winning ticket
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true; // Set the flag to indicate a new winner was found
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);
                }

            });

        });

        if (newWinnersFound) {
            setFirstRowWinners(updatedWinners);
        }
    };


    const secondRowDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...secondRowWinners]; // Copy the current winners list
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                let isWinningTicket = false;
                const marked = ticket.marked.map((row) => [...row]);

                // Check if the ticket has won (e.g., first full row is marked)
                for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
                    if (marked[1].filter(Boolean).length === 5) {
                        isWinningTicket = true;
                        break;
                    }
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (player?.isActivePlayer &&
                    ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber) // Check ticket uniqueness
                ) {
                    const winnerData = {
                        name: player.name, // Owner of the ticket
                        serialNumber: ticket.serialNumber, // Ticket serial number
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket, // Updated ticket details
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData); // Add the winning ticket
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }


                    newWinnersFound = true; // Set the flag to indicate a new winner was found
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);
                }

            });

        });


        if (newWinnersFound) {
            setSecondRowWinners(updatedWinners);
        }
    };

    const thirdRowDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...thirdRowWinners]; // Copy the current winners list
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                let isWinningTicket = false;
                const marked = ticket.marked.map((row) => [...row]);

                // Check if the ticket has won (e.g., first full row is marked)
                for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
                    if (marked[2].filter(Boolean).length === 5) {
                        isWinningTicket = true;
                        break;
                    }
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer &&
                    ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber) // Check ticket uniqueness
                ) {
                    const winnerData = {
                        name: player.name, // Owner of the ticket
                        serialNumber: ticket.serialNumber, // Ticket serial number
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket, // Updated ticket details
                        winingPointNumber: number, // List of called numbers so far
                    };



                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData); // Add the winning ticket
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }


                    newWinnersFound = true; // Set the flag to indicate a new winner was found
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);
                }

            });
        });

        if (newWinnersFound) {
            setThirdRowWinners(updatedWinners);
        }
    };

    // corner divident
    const fourCornerDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...fourcorners];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Find the first and last non-null numbers in the first and last rows
                const firstRow = updatedTicket[0];
                const lastRow = updatedTicket[2];


                const firstNonNullFirstRow = firstRow.findIndex(num => num !== null);
                const lastNonNullFirstRow = firstRow.length - 1 - [...firstRow].reverse().findIndex(num => num !== null);
                const firstNonNullLastRow = lastRow.findIndex(num => num !== null);
                const lastNonNullLastRow = lastRow.length - 1 - [...lastRow].reverse().findIndex(num => num !== null);

                const firstRowEndsMarked =
                    firstNonNullFirstRow !== -1 && firstRow[firstNonNullFirstRow] !== null && updatedMarked[0][firstNonNullFirstRow] &&
                    lastNonNullFirstRow !== -1 && firstRow[lastNonNullFirstRow] !== null && updatedMarked[0][lastNonNullFirstRow];

                const lastRowEndsMarked =
                    firstNonNullLastRow !== -1 && lastRow[firstNonNullLastRow] !== null && updatedMarked[2][firstNonNullLastRow] &&
                    lastNonNullLastRow !== -1 && lastRow[lastNonNullLastRow] !== null && updatedMarked[2][lastNonNullLastRow];

                // Winning condition
                if (firstRowEndsMarked && lastRowEndsMarked && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });

        if (newWinnersFound) {
            setFourCorners(updatedWinners);
        }
    };

    const fourCornerCenterDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...fourCornercenterWinners];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket

                // Find the first and last non-null numbers in the first and last rows
                const firstRow = updatedTicket[0];
                const lastRow = updatedTicket[2];
                const middleRow = updatedTicket[1];

                const firstNonNullFirstRow = firstRow.findIndex(num => num !== null);
                const lastNonNullFirstRow = firstRow.length - 1 - [...firstRow].reverse().findIndex(num => num !== null);
                const firstNonNullLastRow = lastRow.findIndex(num => num !== null);
                const lastNonNullLastRow = lastRow.length - 1 - [...lastRow].reverse().findIndex(num => num !== null);

                const nonNullMiddleRow = middleRow.filter((num) => num !== null);
                const middleNonNullIndex = nonNullMiddleRow.length > 0 ? Math.floor(nonNullMiddleRow.length / 2) : -1;
                const middleRowCenterMarked = middleNonNullIndex !== -1 &&
                    updatedMarked[1][middleRow.findIndex((num) => num === nonNullMiddleRow[middleNonNullIndex])];

                const firstRowEndsMarked =
                    firstNonNullFirstRow !== -1 && firstRow[firstNonNullFirstRow] !== null && updatedMarked[0][firstNonNullFirstRow] &&
                    lastNonNullFirstRow !== -1 && firstRow[lastNonNullFirstRow] !== null && updatedMarked[0][lastNonNullFirstRow];

                const lastRowEndsMarked =
                    firstNonNullLastRow !== -1 && lastRow[firstNonNullLastRow] !== null && updatedMarked[2][firstNonNullLastRow] &&
                    lastNonNullLastRow !== -1 && lastRow[lastNonNullLastRow] !== null && updatedMarked[2][lastNonNullLastRow];

                // Winning condition
                if (firstRowEndsMarked && lastRowEndsMarked && middleRowCenterMarked && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });

        if (newWinnersFound) {
            setfourCornercenterWinners(updatedWinners);
        }
    };

    const queenCornersDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...queenCornersWinners]; // Copy the current winners list
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                const updatedMarked = ticket.marked.map((row) => [...row]);

                // Check for Queen Corners (first number of each row is marked)
                const firstNumberInRows = ticket.ticket.map((row) => row.find((num) => num !== null));
                const isQueenCorners = firstNumberInRows.every((firstNum, rowIndex) =>
                    updatedMarked[rowIndex][ticket.ticket[rowIndex].indexOf(firstNum)]
                );

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isQueenCorners &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber) // Check ticket uniqueness
                ) {
                    const winnerData = {
                        name: player.name, // Owner of the ticket
                        serialNumber: ticket.serialNumber, // Ticket serial number
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket, // Updated ticket details
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData); // Add the winning ticket
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true; // Set the flag to indicate a new winner was found
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });

        if (newWinnersFound) {
            setQueenCornersWinners(updatedWinners);
        }
    };

    const kingCornersDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...kingCornerWinners]; // Copy the current winners list
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                const updatedMarked = ticket.marked.map((row) => [...row]);

                // Check for King Corners (last number of each row is marked)
                const lastNumberInRows = ticket.ticket.map(
                    (row) => row.slice().reverse().find((num) => num !== null)
                );
                const isKingCorners = lastNumberInRows.every((lastNum, rowIndex) =>
                    updatedMarked[rowIndex][ticket.ticket[rowIndex].lastIndexOf(lastNum)]
                );

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isKingCorners &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber) // Check ticket uniqueness
                ) {
                    const winnerData = {
                        name: player.name, // Owner of the ticket
                        serialNumber: ticket.serialNumber, // Ticket serial number
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket, // Updated ticket details
                        winingPointNumber: number,
                    };

                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData); // Add the winning ticket
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true; // Set the flag to indicate a new winner was found
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);
                }

            });

        });

        if (newWinnersFound) {
            setKingCornersWinners(updatedWinners);
        }
    };

    const twinLinesDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...twinLines];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Find 1st and 2nd non-null numbers in each row
                const twinLinesCondition = updatedTicket.every((row, rowIndex) => {
                    const nonNullIndices = row
                        .map((num, index) => (num !== null ? index : -1))  // Get non-null indices
                        .filter((index) => index !== -1);  // Remove -1 (null entries)

                    if (nonNullIndices.length >= 2) {
                        const firstNonNullIndex = nonNullIndices[0];  // 1st non-null index
                        const secondNonNullIndex = nonNullIndices[1]; // 2nd non-null index

                        // Check if both 1st and 2nd non-null positions are marked
                        return updatedMarked[rowIndex][firstNonNullIndex] && updatedMarked[rowIndex][secondNonNullIndex];
                    }

                    return false;  // If there are less than 2 non-null numbers, condition is not met
                });

                // Winning condition
                if (twinLinesCondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (player?.isActivePlayer && ticket?.isActiveTicket && isWinningTicket) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });

        if (newWinnersFound) {
            setTwinLines(updatedWinners);
        }
    };

    const bullEyesDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...bullEyes];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Find 2nd and 4th non-null numbers in each row
                const bullEyesCondition = updatedTicket.every((row, rowIndex) => {
                    const nonNullIndices = row
                        .map((num, index) => (num !== null ? index : -1))  // Get non-null indices
                        .filter((index) => index !== -1);  // Remove -1 (null entries)

                    if (nonNullIndices.length >= 4) {
                        const secondNonNullIndex = nonNullIndices[1];  // 2nd non-null index
                        const fourthNonNullIndex = nonNullIndices[3];  // 4th non-null index

                        // Check if both 2nd and 4th non-null positions are marked
                        return updatedMarked[rowIndex][secondNonNullIndex] && updatedMarked[rowIndex][fourthNonNullIndex];
                    }

                    return false;  // If there are less than 4 non-null numbers, condition is not met
                });

                // Winning condition
                if (bullEyesCondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (player?.isActivePlayer && ticket?.isActiveTicket && isWinningTicket) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);
                }
            });
        });

        if (newWinnersFound) {
            setBullEyes(updatedWinners);
        }
    };


    const sixCornersDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...sixcorners];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Get non-null indices for all rows
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };

                const topRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "sixCorners" condition
                const sixCorners =
                    topRowIndices.length >= 5 &&
                    updatedMarked[0][topRowIndices[0]] &&
                    updatedMarked[0][topRowIndices[4]] &&

                    middleRowIndices.length >= 5 &&
                    updatedMarked[1][middleRowIndices[0]] &&
                    updatedMarked[1][middleRowIndices[4]] &&

                    lastRowIndices.length >= 5 &&
                    updatedMarked[2][lastRowIndices[0]] &&
                    updatedMarked[2][lastRowIndices[4]];

                // Winning condition
                if (sixCorners && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;

                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });


        if (newWinnersFound) {
            setSixcorners(updatedWinners);
        }
    };

    const sixCornersCenterDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...sixcornersCenter];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Get non-null indices for all rows
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };

                const topRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "sixCornersCenter" condition
                const sixCornersCenter =
                    topRowIndices.length >= 5 &&
                    updatedMarked[0][topRowIndices[0]] &&
                    updatedMarked[0][topRowIndices[4]] &&

                    middleRowIndices.length >= 5 &&
                    updatedMarked[1][middleRowIndices[0]] &&
                    updatedMarked[1][middleRowIndices[2]] &&
                    updatedMarked[1][middleRowIndices[4]] &&

                    lastRowIndices.length >= 5 &&
                    updatedMarked[2][lastRowIndices[0]] &&
                    updatedMarked[2][lastRowIndices[4]];

                // Winning condition
                if (sixCornersCenter && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });

        if (newWinnersFound) {
            setSixcornersCenter(updatedWinners);
        }
    };

    const ReversetwinLinesDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...ReversetwinLines];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Find 1st and 2nd non-null numbers in each row
                const ReversetwinLinesCondition = updatedTicket.every((row, rowIndex) => {
                    const nonNullIndices = row
                        .map((num, index) => (num !== null ? index : -1))  // Get non-null indices
                        .filter((index) => index !== -1);  // Remove -1 (null entries)

                    if (nonNullIndices.length >= 5) {
                        const firstNonNullIndex = nonNullIndices[3];  // 1st non-null index
                        const secondNonNullIndex = nonNullIndices[4]; // 2nd non-null index

                        // Check if both 1st and 2nd non-null positions are marked
                        return updatedMarked[rowIndex][firstNonNullIndex] && updatedMarked[rowIndex][secondNonNullIndex];
                    }

                    return false;  // If there are less than 2 non-null numbers, condition is not met
                });

                // Winning condition
                if (ReversetwinLinesCondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (player?.isActivePlayer && ticket?.isActiveTicket && isWinningTicket) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });

        if (newWinnersFound) {
            setReverseTwinLines(updatedWinners);
        }
    };

    // early divident
    const earlyFiveDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...earlyFiveWinners]; // Copy the current winners list
        let newWinnersFound = false;

        updatedPlayers.map((player) => {

            player?.tickets.map((ticket) => {

                const updatedMarked = ticket.marked.map((row) => [...row]);

                const totalMarkedNumbers = updatedMarked.reduce(
                    (count, row) => count + row.filter(Boolean).length,
                    0
                );

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    totalMarkedNumbers === 5 &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber) // Check ticket uniqueness
                ) {
                    const winnerData = {
                        name: player.name, // Owner of the ticket
                        serialNumber: ticket.serialNumber, // Ticket serial number
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket, // Updated ticket details
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData); // Add the winning ticket
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true; // Set the flag to indicate a new winner was found
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });

        if (newWinnersFound) {
            setEarlyFiveWinners(updatedWinners);
        }
    };

    const earlySixDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...earlySixWinners]; // Copy the current winners list
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                const updatedMarked = ticket.marked.map((row) => [...row]);

                const totalMarkedNumbers = updatedMarked.reduce(
                    (count, row) => count + row.filter(Boolean).length,
                    0
                );

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    totalMarkedNumbers === 6 &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber) // Check ticket uniqueness
                ) {
                    const winnerData = {
                        name: player.name, // Owner of the ticket
                        serialNumber: ticket.serialNumber, // Ticket serial number
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket, // Updated ticket details
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData); // Add the winning ticket
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true; // Set the flag to indicate a new winner was found
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });

        if (newWinnersFound) {
            setEarlySixWinners(updatedWinners);
        }
    };

    const earlySevenDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...earlySevenWinners]; // Copy the current winners list
        let newWinnersFound = false;

        updatedPlayers.map((player) => {

            player?.tickets.map((ticket) => {


                const updatedMarked = ticket.marked.map((row) => [...row]);
                const totalMarkedNumbers = updatedMarked.reduce(
                    (count, row) => count + row.filter(Boolean).length,
                    0
                );

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    totalMarkedNumbers === 7 &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber) // Check ticket uniqueness
                ) {
                    const winnerData = {
                        name: player.name, // Owner of the ticket
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData); // Add the winning ticket
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true; // Set the flag to indicate a new winner was found
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });

        if (newWinnersFound) {
            setEarlySevenWinners(updatedWinners);
        }
    };

    const earlyEightDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...earlyEightWinners]; // Copy the current winners list
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                const updatedMarked = ticket.marked.map((row) => [...row]);
                const totalMarkedNumbers = updatedMarked.reduce(
                    (count, row) => count + row.filter(Boolean).length,
                    0
                );

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    totalMarkedNumbers === 8 &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber) // Check ticket uniqueness
                ) {
                    const winnerData = {
                        name: player.name, // Owner of the ticket
                        serialNumber: ticket.serialNumber, // Ticket serial number
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket, // Updated ticket details
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData); // Add the winning ticket
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true; // Set the flag to indicate a new winner was found
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });
        });

        if (newWinnersFound) {
            setEarlyEightWinners(updatedWinners);
        }
    };

    const earlyNineDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...earlyNightWinners]; // Copy the current winners list
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                const updatedMarked = ticket.marked.map((row) => [...row]);

                const totalMarkedNumbers = updatedMarked.reduce(
                    (count, row) => count + row.filter(Boolean).length,
                    0
                );

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    totalMarkedNumbers === 9 &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber) // Check ticket uniqueness
                ) {
                    const winnerData = {
                        name: player.name, // Owner of the ticket
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData); // Add the winning ticket
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true; // Set the flag to indicate a new winner was found
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }
            });

        });

        if (newWinnersFound) {
            setEarlyNightWinners(updatedWinners);
        }
    };

    const earlyTenDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...earlyTenWinners]; // Copy the current winners list
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const totalMarkedNumbers = updatedMarked.reduce(
                    (count, row) => count + row.filter(Boolean).length,
                    0
                );

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    totalMarkedNumbers === 10 &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber) // Check ticket uniqueness
                ) {
                    const winnerData = {
                        name: player.name, // Owner of the ticket
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData); // Add the winning ticket
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true; // Set the flag to indicate a new winner was found
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });

        if (newWinnersFound) {
            setEarlyTenWinners(updatedWinners);
        }
    };

    const earlyElevenDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...earlyElevenWinners]; // Copy the current winners list
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                const updatedMarked = ticket.marked.map((row) => [...row]);

                const totalMarkedNumbers = updatedMarked.reduce(
                    (count, row) => count + row.filter(Boolean).length,
                    0
                );

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    totalMarkedNumbers === 11 &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber) // Check ticket uniqueness
                ) {
                    const winnerData = {
                        name: player.name, // Owner of the ticket
                        serialNumber: ticket.serialNumber, // Ticket serial number
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData); // Add the winning ticket
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true; // Set the flag to indicate a new winner was found
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });


        if (newWinnersFound) {
            setEarlyElevenWinners(updatedWinners);
        }
    };

    const earlyTwelveDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...earlyTwelveWinners]; // Copy the current winners list
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const totalMarkedNumbers = updatedMarked.reduce(
                    (count, row) => count + row.filter(Boolean).length,
                    0
                );

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    totalMarkedNumbers === 12 &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber) // Check ticket uniqueness
                ) {
                    const winnerData = {
                        name: player.name, // Owner of the ticket
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData); // Add the winning ticket
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true; // Set the flag to indicate a new winner was found
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });

        if (newWinnersFound) {
            setEarlyTwelveWinners(updatedWinners);
        }
    };


    const earlyThirteenDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...earlyThirteenWinners]; // Copy the current winners list
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                const updatedMarked = ticket.marked.map((row) => [...row]);
                const totalMarkedNumbers = updatedMarked.reduce(
                    (count, row) => count + row.filter(Boolean).length,
                    0
                );

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    totalMarkedNumbers === 13 &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber) // Check ticket uniqueness
                ) {
                    const winnerData = {
                        name: player.name, // Owner of the ticket
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData); // Add the winning ticket
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true; // Set the flag to indicate a new winner was found
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });


        if (newWinnersFound) {
            setEarlyThirteenWinners(updatedWinners);
        }
    };


    const earlyFourteenDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...earlyFourteenWinners]; // Copy the current winners list
        let newWinnersFound = false;

        updatedPlayers.map((player) => {

            player?.tickets.map((ticket) => {


                const updatedMarked = ticket.marked.map((row) => [...row]);
                const totalMarkedNumbers = updatedMarked.reduce(
                    (count, row) => count + row.filter(Boolean).length,
                    0
                );

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    totalMarkedNumbers === 14 &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber) // Check ticket uniqueness
                ) {
                    const winnerData = {
                        name: player.name, // Owner of the ticket
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData); // Add the winning ticket
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true; // Set the flag to indicate a new winner was found
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });



        if (newWinnersFound) {
            setEarlyFourteenWinners(updatedWinners);
        }
    };
    // all number start and end with

    const hockyStickDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...hockyStick];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked;

                // Check if all numbers containing '7' are marked
                const numbersWithSeven = [];
                const markedNumbersWithSeven = [];

                ticket.ticket.forEach((row, rowIndex) => {
                    row.forEach((cellNumber, colIndex) => {
                        if (cellNumber !== null && cellNumber.toString().includes('7')) {
                            numbersWithSeven.push(cellNumber);
                            if (updatedMarked[rowIndex][colIndex]) {
                                markedNumbersWithSeven.push(cellNumber);
                            }
                        }
                    });
                });

                if (markedNumbersWithSeven.length === numbersWithSeven.length && numbersWithSeven.length > 0) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);
                }

            });

        });


        if (newWinnersFound) {
            setHockyStick(updatedWinners);
        }
    };

    const fatLadyDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...fatLady];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);

                // Check if all numbers containing '8' are marked
                const numbersWithEight = [];
                const markedNumbersWithEight = [];

                ticket.ticket.forEach((row, rowIndex) => {
                    row.forEach((cellNumber, colIndex) => {
                        if (cellNumber !== null && cellNumber.toString().includes('8')) {
                            numbersWithEight.push(cellNumber);
                            if (updatedMarked[rowIndex][colIndex]) {
                                markedNumbersWithEight.push(cellNumber);
                            }
                        }
                    });
                });

                if (markedNumbersWithEight.length === numbersWithEight.length && numbersWithEight.length > 0) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });

        if (newWinnersFound) {
            setFatLady(updatedWinners);
        }
    };

    const uglyDucklingDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...uglyDuckling];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);

                // Check if all numbers containing '2' are marked
                const numbersWithTwo = [];
                const markedNumbersWithTwo = [];

                ticket.ticket.forEach((row, rowIndex) => {
                    row.forEach((cellNumber, colIndex) => {
                        if (cellNumber !== null && cellNumber.toString().includes('2')) {
                            numbersWithTwo.push(cellNumber);
                            if (updatedMarked[rowIndex][colIndex]) {
                                markedNumbersWithTwo.push(cellNumber);
                            }
                        }
                    });
                });

                if (markedNumbersWithTwo.length === numbersWithTwo.length && numbersWithTwo.length > 0) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });



        if (newWinnersFound) {
            setUglyDuckling(updatedWinners);
        }
    };

    // special numbers
    const iLoveYouDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...iLoveYou];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);

                // Mark the called number on the ticket
                const updatedTicket = ticket.ticket;

                // Get non-null indices for all rows
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };

                const topRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "I Love You" condition
                const iLoveYouCondition =
                    topRowIndices.length >= 1 &&
                    updatedMarked[0][topRowIndices[0]] && // 1st number of top row

                    middleRowIndices.length >= 4 &&
                    updatedMarked[1][middleRowIndices[0]] && // 1st number of middle row
                    updatedMarked[1][middleRowIndices[1]] && // 2nd number of middle row
                    updatedMarked[1][middleRowIndices[2]] && // 3rd number of middle row
                    updatedMarked[1][middleRowIndices[3]] && // 4th number of middle row

                    lastRowIndices.length >= 3 &&
                    updatedMarked[2][lastRowIndices[0]] && // 1st number of last row
                    updatedMarked[2][lastRowIndices[1]] && // 2nd number of last row
                    updatedMarked[2][lastRowIndices[2]];   // 3rd number of last row

                // Winning condition
                if (iLoveYouCondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (player?.isActivePlayer && ticket?.isActiveTicket && isWinningTicket) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;

                    // Logic for notifications and other UI updates
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);
                }

            });

        });



        if (newWinnersFound) {
            setiLoveYou(updatedWinners);
        }
    };

    const weLoveYouDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...weLoveYou];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Get non-null indices for all rows
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };

                const topRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "We Love You" condition
                const weLoveYouCondition =
                    topRowIndices.length >= 2 &&
                    updatedMarked[0][topRowIndices[0]] && // 1st number of top row
                    updatedMarked[0][topRowIndices[1]] && // 2nd number of top row

                    middleRowIndices.length >= 4 &&
                    updatedMarked[1][middleRowIndices[0]] && // 1st number of middle row
                    updatedMarked[1][middleRowIndices[1]] && // 2nd number of middle row
                    updatedMarked[1][middleRowIndices[2]] && // 3rd number of middle row
                    updatedMarked[1][middleRowIndices[3]] && // 4th number of middle row

                    lastRowIndices.length >= 3 &&
                    updatedMarked[2][lastRowIndices[0]] && // 1st number of last row
                    updatedMarked[2][lastRowIndices[1]] && // 2nd number of last row
                    updatedMarked[2][lastRowIndices[2]];   // 3rd number of last row

                // Winning condition
                if (weLoveYouCondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (player?.isActivePlayer && ticket?.isActiveTicket && isWinningTicket) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });



        if (newWinnersFound) {
            setweLoveYou(updatedWinners);
        }
    };

    const dividendOneTwoFour = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...oneTwoFour];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Get non-null indices for all rows
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };

                const topRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "124" condition
                const dividend124Condition =
                    topRowIndices.length >= 1 &&
                    updatedMarked[0][topRowIndices[0]] && // 1st number of top row

                    middleRowIndices.length >= 2 &&
                    updatedMarked[1][middleRowIndices[0]] && // 1st number of middle row
                    updatedMarked[1][middleRowIndices[1]] && // 2nd number of middle row

                    lastRowIndices.length >= 4 &&
                    updatedMarked[2][lastRowIndices[0]] && // 1st number of last row
                    updatedMarked[2][lastRowIndices[1]] && // 2nd number of last row
                    updatedMarked[2][lastRowIndices[2]] && // 3rd number of last row
                    updatedMarked[2][lastRowIndices[3]];   // 4th number of last row

                // Winning condition
                if (dividend124Condition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (player?.isActivePlayer && ticket?.isActiveTicket && isWinningTicket) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });

        if (newWinnersFound) {
            setOneTwoFour(updatedWinners);
        }
    };

    const dividendFourTwoOne = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...fourTwoOne];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Get non-null indices for all rows
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };

                const topRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "124" condition
                const dividend124Condition =
                    topRowIndices.length >= 4 &&
                    updatedMarked[0][topRowIndices[0]] &&
                    updatedMarked[0][topRowIndices[1]] && // 1st number of top row
                    updatedMarked[0][topRowIndices[2]] &&
                    updatedMarked[0][topRowIndices[3]] &&

                    middleRowIndices.length >= 2 &&
                    updatedMarked[1][middleRowIndices[0]] && // 1st number of middle row
                    updatedMarked[1][middleRowIndices[1]] && // 2nd number of middle row

                    lastRowIndices.length >= 1 &&
                    updatedMarked[2][lastRowIndices[0]]  // 1st number of last row


                // Winning condition
                if (dividend124Condition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (player?.isActivePlayer && ticket?.isActiveTicket && isWinningTicket) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });



        if (newWinnersFound) {
            setFourTwoOne(updatedWinners);
        }
    };

    const dividendTwoTwoFive = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...twoTwoFive];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Get non-null indices for all rows
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };

                const topRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "124" condition
                const dividend124Condition =
                    topRowIndices.length >= 2 &&
                    updatedMarked[0][topRowIndices[0]] &&
                    updatedMarked[0][topRowIndices[1]] && // 1st number of top row


                    middleRowIndices.length >= 2 &&
                    updatedMarked[1][middleRowIndices[0]] && // 1st number of middle row
                    updatedMarked[1][middleRowIndices[1]] && // 2nd number of middle row

                    lastRowIndices.length >= 5 &&
                    updatedMarked[2][lastRowIndices[0]] &&
                    updatedMarked[2][lastRowIndices[1]] &&
                    updatedMarked[2][lastRowIndices[2]] &&
                    updatedMarked[2][lastRowIndices[3]] &&
                    updatedMarked[2][lastRowIndices[4]] // 1st number of last row


                // Winning condition
                if (dividend124Condition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (player?.isActivePlayer && ticket?.isActiveTicket && isWinningTicket) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });

        if (newWinnersFound) {
            settwoTwoFive(updatedWinners);
        }
    };

    const dividendOneTwoThree = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...oneTwoThree];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Get non-null indices for all rows
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };

                const topRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "124" condition
                const dividend124Condition =
                    topRowIndices.length >= 1 &&
                    updatedMarked[0][topRowIndices[0]] &&

                    middleRowIndices.length >= 2 &&
                    updatedMarked[1][middleRowIndices[0]] && // 1st number of middle row
                    updatedMarked[1][middleRowIndices[1]] && // 2nd number of middle row

                    lastRowIndices.length >= 3 &&
                    updatedMarked[2][lastRowIndices[0]] &&
                    updatedMarked[2][lastRowIndices[1]] &&
                    updatedMarked[2][lastRowIndices[2]]

                // Winning condition
                if (dividend124Condition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (player?.isActivePlayer && ticket?.isActiveTicket && isWinningTicket) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });


        if (newWinnersFound) {
            setOneTwoThree(updatedWinners);
        }
    };

    const dividendThreeThreeThree = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...threeThreeThree];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Get non-null indices for all rows
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };

                const topRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "124" condition
                const dividend124Condition =
                    topRowIndices.length >= 3 &&
                    updatedMarked[0][topRowIndices[0]] &&
                    updatedMarked[0][topRowIndices[1]] &&
                    updatedMarked[0][topRowIndices[2]] &&

                    middleRowIndices.length >= 3 &&
                    updatedMarked[1][middleRowIndices[0]] && // 1st number of middle row
                    updatedMarked[1][middleRowIndices[1]] &&
                    updatedMarked[1][middleRowIndices[2]] && // 2nd number of middle row

                    lastRowIndices.length >= 3 &&
                    updatedMarked[2][lastRowIndices[0]] &&
                    updatedMarked[2][lastRowIndices[1]] &&
                    updatedMarked[2][lastRowIndices[2]]

                // Winning condition
                if (dividend124Condition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (player?.isActivePlayer && ticket?.isActiveTicket && isWinningTicket) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });

        if (newWinnersFound) {
            setthreeThreeThree(updatedWinners);
        }
    };

    const dividendFourTwoOneReverse = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...fourTwoOneReverse];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Get non-null indices for all rows
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };

                const topRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "421" condition
                const dividend421Condition =
                    topRowIndices.length >= 5 &&
                    updatedMarked[0][topRowIndices[1]] && // 2nd number of top row
                    updatedMarked[0][topRowIndices[2]] && // 3rd number of top row
                    updatedMarked[0][topRowIndices[3]] && // 4th number of top row
                    updatedMarked[0][topRowIndices[4]] && // 5th number of top row

                    middleRowIndices.length >= 5 &&
                    updatedMarked[1][middleRowIndices[3]] && // 4th number of middle row
                    updatedMarked[1][middleRowIndices[4]] && // 5th number of middle row

                    lastRowIndices.length >= 5 &&
                    updatedMarked[2][lastRowIndices[4]];    // 5th number of last row

                // Winning condition
                if (dividend421Condition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (player?.isActivePlayer && ticket?.isActiveTicket && isWinningTicket) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });

        if (newWinnersFound) {
            setFourTwoOneReverse(updatedWinners);
        }
    };

    const dividendTripleThreeReverse = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...dividentTripleThreeReverse];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Get non-null indices for all rows
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };

                const topRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "333 (reverse)" condition
                const dividend333ReverseCondition =
                    topRowIndices.length >= 5 &&
                    updatedMarked[0][topRowIndices[2]] && // 3rd number of top row
                    updatedMarked[0][topRowIndices[3]] && // 4th number of top row
                    updatedMarked[0][topRowIndices[4]] && // 5th number of top row

                    middleRowIndices.length >= 5 &&
                    updatedMarked[1][middleRowIndices[2]] && // 3rd number of middle row
                    updatedMarked[1][middleRowIndices[3]] && // 4th number of middle row
                    updatedMarked[1][middleRowIndices[4]] && // 5th number of middle row

                    lastRowIndices.length >= 5 &&
                    updatedMarked[2][lastRowIndices[2]] && // 3rd number of last row
                    updatedMarked[2][lastRowIndices[3]] && // 4th number of last row
                    updatedMarked[2][lastRowIndices[4]];   // 5th number of last row

                // Winning condition
                if (dividend333ReverseCondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (player?.isActivePlayer && ticket?.isActiveTicket && isWinningTicket) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });

        if (newWinnersFound) {
            setDividentTripleThreeReverse(updatedWinners);
        }
    };

    const dividendThreetwoOneReverse = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...dividentThreeTwoOneReverse];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Get non-null indices for all rows
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };

                const topRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "321 (reverse)" condition
                const dividend321ReverseCondition =
                    topRowIndices.length >= 5 &&
                    updatedMarked[0][topRowIndices[2]] && // 3rd number of top row
                    updatedMarked[0][topRowIndices[3]] && // 4th number of top row
                    updatedMarked[0][topRowIndices[4]] && // 5th number of top row

                    middleRowIndices.length >= 5 &&
                    updatedMarked[1][middleRowIndices[3]] && // 4th number of middle row
                    updatedMarked[1][middleRowIndices[4]] && // 5th number of middle row

                    lastRowIndices.length >= 5 &&
                    updatedMarked[2][lastRowIndices[4]];    // 5th number of last row

                // Winning condition
                if (dividend321ReverseCondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (player?.isActivePlayer && ticket?.isActiveTicket && isWinningTicket) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });


        if (newWinnersFound) {
            setDividentThreeTwoOneReverse(updatedWinners);
        }
    };
    // full house divident

    const fullHouseDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...fullHouseWinners]; // Copy the current winners list
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                const updatedMarked = ticket.marked.map((row) => [...row]);

                // Check if the ticket has won (i.e., all rows are fully marked)
                const allRowsMarked = updatedMarked.every(row => row.filter(Boolean).length === 5);

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer &&
                    ticket?.isActiveTicket &&
                    allRowsMarked &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber) // Check ticket uniqueness
                ) {
                    const winnerData = {
                        name: player.name, // Owner of the ticket
                        serialNumber: ticket.serialNumber, // Ticket serial number
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData); // Add the winning ticket
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true; // Set the flag to indicate a new winner was found
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });


        if (newWinnersFound) {
            setFullHouseWinners(updatedWinners);
        }
    };

    //Min-Max divident

    // Smallest and Largest Dividend
    const smallestLargestDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...tempWinners];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Flatten the ticket to find the smallest and largest number
                const flattenedTicket = updatedTicket.flat().filter(num => num !== null);
                const smallestNumber = Math.min(...flattenedTicket);
                const largestNumber = Math.max(...flattenedTicket);

                // Find the positions of the smallest and largest numbers
                let smallestMarked = false;
                let largestMarked = false;

                updatedTicket.forEach((row, rowIndex) => {
                    row.forEach((cellNumber, colIndex) => {
                        if (cellNumber === smallestNumber && updatedMarked[rowIndex][colIndex]) {
                            smallestMarked = true;
                        }
                        if (cellNumber === largestNumber && updatedMarked[rowIndex][colIndex]) {
                            largestMarked = true;
                        }
                    });
                });

                // Winning condition: both smallest and largest numbers must be marked
                if (smallestMarked && largestMarked && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });

        if (newWinnersFound) {
            setTempWinners(updatedWinners);
        }
    };

    // 2 Smallest and 2 Largest Dividend
    const twoSmallestTwoLargestDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...twoSmallestTwoLargest];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Flatten the ticket to find the 2 smallest and 2 largest numbers
                const flattenedTicket = updatedTicket.flat().filter(num => num !== null);
                const sortedNumbers = [...flattenedTicket].sort((a, b) => a - b);

                const smallestNumbers = sortedNumbers.slice(0, 2);  // Get the 2 smallest numbers
                const largestNumbers = sortedNumbers.slice(-2);    // Get the 2 largest numbers

                // Find the positions of the 2 smallest and 2 largest numbers
                let smallestMarkedCount = 0;
                let largestMarkedCount = 0;

                updatedTicket.forEach((row, rowIndex) => {
                    row.forEach((cellNumber, colIndex) => {
                        if (smallestNumbers.includes(cellNumber) && updatedMarked[rowIndex][colIndex]) {
                            smallestMarkedCount++;
                        }
                        if (largestNumbers.includes(cellNumber) && updatedMarked[rowIndex][colIndex]) {
                            largestMarkedCount++;
                        }
                    });
                });

                // Winning condition: both 2 smallest and 2 largest numbers must be marked
                if (smallestMarkedCount === 2 && largestMarkedCount === 2 && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });

        if (newWinnersFound) {
            setTwoSmallestTwoLargest(updatedWinners);
        }
    };

    // pairs calculate

    // 1 Pair (Row) Dividend
    const onePairRowDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...onePairRowWinners];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Check each row for 1 pair (2 adjacent numbers both marked)
                updatedTicket.forEach((row, rowIndex) => {
                    for (let i = 0; i < row.length - 1; i++) {
                        if (
                            row[i] !== null &&
                            row[i + 1] !== null &&           // Ensure both numbers are not null
                            updatedMarked[rowIndex][i] &&   // Both adjacent numbers are marked
                            updatedMarked[rowIndex][i + 1]
                        ) {
                            isWinningTicket = true;
                            break; // No need to check further pairs in this row
                        }
                    }
                });

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });


        if (newWinnersFound) {
            setOnePairRowWinners(updatedWinners);
        }
    };

    const twoPairRowDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...twoPairRowWinners];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Flatten the ticket into a single array to check for pairs
                const flattenedTicket = updatedTicket.flat();
                const flattenedMarked = updatedMarked.flat();

                let pairCount = 0;
                const usedIndices = new Set(); // Track indices of numbers already used in pairs

                for (let i = 0; i < flattenedTicket.length - 1; i++) {
                    // Check if two adjacent numbers form a pair and haven't been used
                    if (
                        flattenedTicket[i] !== null &&
                        flattenedTicket[i + 1] !== null &&
                        flattenedMarked[i] &&
                        flattenedMarked[i + 1] &&
                        !usedIndices.has(i) &&          // Ensure the numbers are not used in another pair
                        !usedIndices.has(i + 1)
                    ) {
                        // Mark the indices as used in the pair
                        usedIndices.add(i);
                        usedIndices.add(i + 1);
                        pairCount++;

                        // Break if we already found 2 pairs
                        if (pairCount === 2) {
                            isWinningTicket = true;
                            break;
                        }
                    }
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;

                    // Logic for notifications and other UI updates
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);
                }

            });

        });



        if (newWinnersFound) {
            setTwoPairRowWinners(updatedWinners);
        }
    };

    const threePairRowDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...threePairRowWinners];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {


                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Flatten the ticket into a single array to check for pairs
                const flattenedTicket = updatedTicket.flat();
                const flattenedMarked = updatedMarked.flat();

                let pairCount = 0;
                const usedIndices = new Set(); // Track indices of numbers already used in pairs

                for (let i = 0; i < flattenedTicket.length - 1; i++) {
                    // Check if two adjacent numbers form a pair and haven't been used
                    if (
                        flattenedTicket[i] !== null &&
                        flattenedTicket[i + 1] !== null &&
                        flattenedMarked[i] &&
                        flattenedMarked[i + 1] &&
                        !usedIndices.has(i) &&          // Ensure the numbers are not used in another pair
                        !usedIndices.has(i + 1)
                    ) {
                        // Mark the indices as used in the pair
                        usedIndices.add(i);
                        usedIndices.add(i + 1);
                        pairCount++;

                        // Break if we already found 2 pairs
                        if (pairCount === 3) {
                            isWinningTicket = true;
                            break;
                        }
                    }
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;

                    // Logic for notifications and other UI updates
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);
                }

            });

        });


        if (newWinnersFound) {
            setThreePairRowWinners(updatedWinners);
        }
    };

    const fourPairRowDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...fourPairRowWinners];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {


                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);

                // Mark the called number on the ticket
                const updatedTicket = ticket.ticket;

                // Flatten the ticket into a single array to check for pairs
                const flattenedTicket = updatedTicket.flat();
                const flattenedMarked = updatedMarked.flat();

                let pairCount = 0;
                const usedIndices = new Set(); // Track indices of numbers already used in pairs

                for (let i = 0; i < flattenedTicket.length - 1; i++) {
                    // Check if two adjacent numbers form a pair and haven't been used
                    if (
                        flattenedTicket[i] !== null &&
                        flattenedTicket[i + 1] !== null &&
                        flattenedMarked[i] &&
                        flattenedMarked[i + 1] &&
                        !usedIndices.has(i) &&          // Ensure the numbers are not used in another pair
                        !usedIndices.has(i + 1)
                    ) {
                        // Mark the indices as used in the pair
                        usedIndices.add(i);
                        usedIndices.add(i + 1);
                        pairCount++;

                        // Break if we already found 2 pairs
                        if (pairCount === 4) {
                            isWinningTicket = true;
                            break;
                        }
                    }
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;

                    // Logic for notifications and other UI updates
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);
                }
            });
        });

        if (newWinnersFound) {
            setFourPairRowWinners(updatedWinners);

        }
    };

    const allPairRowDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...allPairs];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {


                const updatedMarked = ticket.marked.map((row) => [...row]);

                // Mark the called number on the ticket
                const updatedTicket = ticket.ticket;

                // Flatten the ticket and marked arrays
                const flattenedTicket = updatedTicket.flat();
                const flattenedMarked = updatedMarked.flat();

                let totalPairs = 0;
                let markedPairs = 0;
                const usedIndices = new Set(); // Track indices of numbers already used in pairs

                // Count all pairs in the flattened ticket
                for (let i = 0; i < flattenedTicket.length - 1; i++) {
                    // Check if two adjacent numbers form a pair
                    if (
                        flattenedTicket[i] !== null &&
                        flattenedTicket[i + 1] !== null &&
                        !usedIndices.has(i) &&          // Ensure the numbers are not used in another pair
                        !usedIndices.has(i + 1)
                    ) {
                        totalPairs++; // Count the pair
                        if (flattenedMarked[i] && flattenedMarked[i + 1]) {
                            markedPairs++; // Count marked pairs
                            // Mark the indices as used in the pair
                            usedIndices.add(i);
                            usedIndices.add(i + 1);
                        }
                    }
                }

                // If all pairs are marked
                const isWinningTicket = totalPairs > 0 && markedPairs === totalPairs;

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;

                    // Logic for notifications and other UI updates
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);
                }

            });

        });

        if (newWinnersFound) {
            setAllPairs(updatedWinners);

        }
    };
    // 1 pair (column)
    const onePairColumnDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...onePairColumnWinners];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);

                // Mark the called number on the ticket
                const updatedTicket = ticket.ticket;

                // Check each column for 1 pair (2 vertically adjacent numbers both marked)
                for (let colIndex = 0; colIndex < updatedTicket[0].length; colIndex++) {
                    for (let rowIndex = 0; rowIndex < updatedTicket.length - 1; rowIndex++) {
                        if (
                            updatedTicket[rowIndex][colIndex] !== null &&
                            updatedTicket[rowIndex + 1][colIndex] !== null && // Ensure both numbers are not null
                            updatedMarked[rowIndex][colIndex] &&               // Both vertically adjacent numbers are marked
                            updatedMarked[rowIndex + 1][colIndex]
                        ) {
                            isWinningTicket = true;
                            break; // No need to check further pairs in this column
                        }
                    }
                    if (isWinningTicket) break; // No need to check other columns if already winning
                }


                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });


        if (newWinnersFound) {
            setOnePairColumnWinners(updatedWinners);
        }
    };
    const twoPairColumnDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...twoPairColumnWinners];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {


                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);

                // Mark the called number on the ticket
                const updatedTicket = ticket.ticket;

                // Check for pairs in columns
                let pairCount = 0;
                const usedIndices = new Set(); // Track indices of numbers already used in pairs

                for (let colIndex = 0; colIndex < updatedTicket[0].length; colIndex++) {
                    for (let rowIndex = 0; rowIndex < updatedTicket.length - 1; rowIndex++) {
                        // Check if two adjacent numbers in the same column form a pair
                        if (
                            updatedTicket[rowIndex][colIndex] !== null &&
                            updatedTicket[rowIndex + 1][colIndex] !== null &&
                            updatedMarked[rowIndex][colIndex] &&
                            updatedMarked[rowIndex + 1][colIndex] &&
                            !usedIndices.has(`${rowIndex}-${colIndex}`) && // Ensure indices are not used in another pair
                            !usedIndices.has(`${rowIndex + 1}-${colIndex}`)
                        ) {
                            // Mark the indices as used in the pair
                            usedIndices.add(`${rowIndex}-${colIndex}`);
                            usedIndices.add(`${rowIndex + 1}-${colIndex}`);
                            pairCount++;

                            // Break if we already found 2 pairs
                            if (pairCount === 2) {
                                isWinningTicket = true;
                                break;
                            }
                        }
                    }
                    if (isWinningTicket) break; // Exit outer loop if already found 2 pairs
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;

                    // Logic for notifications and other UI updates
                    newDividendCount.current += 1;
                    togglePause();
                    setDividendsNotification(true);
                }


            });


        });

        if (newWinnersFound) {
            setTwoPairColumnWinners(updatedWinners);
        }
    };

    const threePairColumnDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...threePairColumnWinners];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);

                // Mark the called number on the ticket
                const updatedTicket = ticket.ticket;

                // Check for pairs in columns
                let pairCount = 0;
                const usedIndices = new Set(); // Track indices of numbers already used in pairs

                for (let colIndex = 0; colIndex < updatedTicket[0].length; colIndex++) {
                    for (let rowIndex = 0; rowIndex < updatedTicket.length - 1; rowIndex++) {
                        // Check if two adjacent numbers in the same column form a pair
                        if (
                            updatedTicket[rowIndex][colIndex] !== null &&
                            updatedTicket[rowIndex + 1][colIndex] !== null &&
                            updatedMarked[rowIndex][colIndex] &&
                            updatedMarked[rowIndex + 1][colIndex] &&
                            !usedIndices.has(`${rowIndex}-${colIndex}`) && // Ensure indices are not used in another pair
                            !usedIndices.has(`${rowIndex + 1}-${colIndex}`)
                        ) {
                            // Mark the indices as used in the pair
                            usedIndices.add(`${rowIndex}-${colIndex}`);
                            usedIndices.add(`${rowIndex + 1}-${colIndex}`);
                            pairCount++;

                            // Break if we already found 2 pairs
                            if (pairCount === 3) {
                                isWinningTicket = true;
                                break;
                            }
                        }
                    }
                    if (isWinningTicket) break; // Exit outer loop if already found 2 pairs
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;

                    // Logic for notifications and other UI updates
                    newDividendCount.current += 1;
                    togglePause();
                    setDividendsNotification(true);
                }

            });

        });



        if (newWinnersFound) {
            setThreePairColumnWinners(updatedWinners);
        }
    };

    const fourPairColumnDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...fourPairColumnWinners];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);

                // Mark the called number on the ticket
                const updatedTicket = ticket.ticket;

                // Check for pairs in columns
                let pairCount = 0;
                const usedIndices = new Set(); // Track indices of numbers already used in pairs

                for (let colIndex = 0; colIndex < updatedTicket[0].length; colIndex++) {
                    for (let rowIndex = 0; rowIndex < updatedTicket.length - 1; rowIndex++) {
                        // Check if two adjacent numbers in the same column form a pair
                        if (
                            updatedTicket[rowIndex][colIndex] !== null &&
                            updatedTicket[rowIndex + 1][colIndex] !== null &&
                            updatedMarked[rowIndex][colIndex] &&
                            updatedMarked[rowIndex + 1][colIndex] &&
                            !usedIndices.has(`${rowIndex}-${colIndex}`) && // Ensure indices are not used in another pair
                            !usedIndices.has(`${rowIndex + 1}-${colIndex}`)
                        ) {
                            // Mark the indices as used in the pair
                            usedIndices.add(`${rowIndex}-${colIndex}`);
                            usedIndices.add(`${rowIndex + 1}-${colIndex}`);
                            pairCount++;

                            // Break if we already found 2 pairs
                            if (pairCount === 4) {
                                isWinningTicket = true;
                                break;
                            }
                        }
                    }
                    if (isWinningTicket) break; // Exit outer loop if already found 2 pairs
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;

                    // Logic for notifications and other UI updates
                    newDividendCount.current += 1;
                    togglePause();
                    setDividendsNotification(true);
                }


            });

        });

        if (newWinnersFound) {
            setFourPairColumnWinners(updatedWinners);

        }
    };

    const allPairColumnDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...allPairColumnWinners];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                const updatedMarked = ticket.marked.map((row) => [...row]);

                // Mark the called number on the ticket
                const updatedTicket = ticket.ticket;

                let totalPairs = 0;
                let markedPairs = 0;
                const usedIndices = new Set(); // Track indices of numbers already used in pairs

                // Check vertically for pairs (column-wise)
                for (let colIndex = 0; colIndex < updatedTicket[0].length; colIndex++) {
                    for (let rowIndex = 0; rowIndex < updatedTicket.length - 1; rowIndex++) {
                        const currentCell = updatedTicket[rowIndex][colIndex];
                        const nextCell = updatedTicket[rowIndex + 1][colIndex];

                        // Check if two vertically adjacent numbers form a pair
                        if (
                            currentCell !== null &&
                            nextCell !== null &&
                            !usedIndices.has(`${rowIndex}-${colIndex}`) &&    // Ensure the numbers are not used in another pair
                            !usedIndices.has(`${rowIndex + 1}-${colIndex}`)
                        ) {
                            totalPairs++; // Count the pair
                            if (updatedMarked[rowIndex][colIndex] && updatedMarked[rowIndex + 1][colIndex]) {
                                markedPairs++; // Count marked pairs
                                // Mark the indices as used in the pair
                                usedIndices.add(`${rowIndex}-${colIndex}`);
                                usedIndices.add(`${rowIndex + 1}-${colIndex}`);
                            }
                        }
                    }
                }

                // If all pairs are marked
                const isWinningTicket = totalPairs > 0 && markedPairs === totalPairs;

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;

                    // Logic for notifications and other UI updates
                    newDividendCount.current += 1;
                    togglePause();
                    setDividendsNotification(true);
                }

            });
        });

        if (newWinnersFound) {
            setAllPairColumnWinners(updatedWinners);

        }
    };

    //Extra

    const breakfastDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...breakfast];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                const columns1To3Marked = updatedTicket.every((row, rowIndex) =>
                    row.slice(0, 3).every((cellNumber, colIndex) => {
                        if (cellNumber !== null) {
                            return updatedMarked[rowIndex][colIndex];
                        }
                        return true; // Ignore null cells
                    })
                );

                // Winning condition
                if (columns1To3Marked && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });

        if (newWinnersFound) {
            setBreakfast(updatedWinners);
        }
    };

    const lunchDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...lunch];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);

                const updatedTicket = ticket.ticket;

                // Check if all numbers in columns 4, 5, and 6 (index 3, 4, and 5) are marked
                const columns4To6Marked = updatedTicket.every((row, rowIndex) => {
                    return [3, 4, 5].every((colIndex) => {
                        const cellNumber = updatedTicket[rowIndex][colIndex];
                        if (cellNumber !== null) {
                            return updatedMarked[rowIndex][colIndex];
                        }
                        return true; // Ignore null cells
                    });
                });

                // Winning condition
                if (columns4To6Marked && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });



        if (newWinnersFound) {
            setLunch(updatedWinners);
        }
    };

    const dinnerDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...dinner];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);

                const updatedTicket = ticket.ticket;

                // Check if all numbers in columns 7, 8, and 9 (index 6, 7, and 8) are marked
                const columns7To9Marked = updatedTicket.every((row, rowIndex) => {
                    return [6, 7, 8].every((colIndex) => {
                        const cellNumber = updatedTicket[rowIndex][colIndex];
                        if (cellNumber !== null) {
                            return updatedMarked[rowIndex][colIndex];
                        }
                        return true; // Ignore null cells
                    });
                });

                // Winning condition
                if (columns7To9Marked && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });

        if (newWinnersFound) {
            setDinner(updatedWinners);
        }
    };

    const dayDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...day];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);

                const updatedTicket = ticket.ticket;

                // Check if all numbers between 1 and 45 are marked
                const numbers1To45Marked = updatedTicket.every((row, rowIndex) =>
                    row.every((cellNumber, colIndex) => {
                        if (cellNumber !== null && cellNumber >= 1 && cellNumber <= 45) {
                            return updatedMarked[rowIndex][colIndex];
                        }
                        return true; // Ignore numbers outside 1-45
                    })
                );

                // Winning condition
                if (numbers1To45Marked && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it

                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }
            });
        });



        if (newWinnersFound) {
            setDay(updatedWinners);
        }
    };

    const nightDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...night];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Check if all numbers between 1 and 45 are marked
                const numbers46To90Marked = updatedTicket.every((row, rowIndex) =>
                    row.every((cellNumber, colIndex) => {
                        if (cellNumber !== null && cellNumber >= 46 && cellNumber <= 90) {
                            return updatedMarked[rowIndex][colIndex];
                        }
                        return true; // Ignore numbers outside 46-90
                    })
                );

                // Winning condition
                if (numbers46To90Marked && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });



        if (newWinnersFound) {
            setNight(updatedWinners);
        }
    };

    const centerDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...center];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };


                const middleRowIndices = getNonNullIndices(updatedTicket[1]);

                // Check the "center" condition
                const centerCondition =
                    middleRowIndices.length >= 4 &&
                    updatedMarked[1][middleRowIndices[2]];// 3rd number of middle row


                // Winning condition
                if (centerCondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });


        if (newWinnersFound) {
            setCenter(updatedWinners);
        }
    };

    const bambooDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...bamboo];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };


                const fristRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "bamboo" condition
                const bambooCondition =

                    fristRowIndices.length >= 3 &&
                    updatedMarked[0][fristRowIndices[2]] &&// 3rd number of frist row

                    middleRowIndices.length >= 3 &&
                    updatedMarked[1][middleRowIndices[2]] &&// 3rd number of middle row

                    lastRowIndices.length >= 3 &&
                    updatedMarked[2][lastRowIndices[2]];// 3rd number of last row

                // Winning condition
                if (bambooCondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });


        if (newWinnersFound) {
            setBamboo(updatedWinners);
        }
    };

    const firsthalfDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...firsthalf];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };


                const fristRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "first half" condition
                const firsthalfCondition =

                    fristRowIndices.length >= 3 &&
                    updatedMarked[0][fristRowIndices[0]] &&// 1st number of first row
                    updatedMarked[0][fristRowIndices[1]] &&// 2nd number of first row
                    updatedMarked[0][fristRowIndices[2]] &&// 3rd number of frist row

                    middleRowIndices.length >= 3 &&
                    updatedMarked[1][middleRowIndices[0]] &&// 1st number of middle row
                    updatedMarked[1][middleRowIndices[1]] &&// 2nd number of middle row
                    updatedMarked[1][middleRowIndices[2]] &&// 3rd number of middle row

                    lastRowIndices.length >= 3 &&
                    updatedMarked[2][lastRowIndices[0]] &&// 1st number of last row
                    updatedMarked[2][lastRowIndices[1]] &&// 2nd number of last row
                    updatedMarked[2][lastRowIndices[2]];// 3rd number of last row

                // Winning condition
                if (firsthalfCondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });


        if (newWinnersFound) {
            setFirsthalf(updatedWinners);
        }
    };

    const secondhalfDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...secondhalf];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {
                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };


                const fristRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "scoend half" condition
                const secondhalfCondition =

                    fristRowIndices.length >= 5 &&
                    updatedMarked[0][fristRowIndices[2]] &&// 3rd number of first row
                    updatedMarked[0][fristRowIndices[3]] &&// 4th number of first row
                    updatedMarked[0][fristRowIndices[4]] &&// 5th number of frist row

                    middleRowIndices.length >= 5 &&
                    updatedMarked[1][middleRowIndices[2]] &&// 3rd number of middle row
                    updatedMarked[1][middleRowIndices[3]] &&// 4th number of middle row
                    updatedMarked[1][middleRowIndices[4]] &&// 5th number of middle row

                    lastRowIndices.length >= 5 &&
                    updatedMarked[2][lastRowIndices[2]] &&// 3rd number of last row
                    updatedMarked[2][lastRowIndices[3]] &&// 4th number of last row
                    updatedMarked[2][lastRowIndices[4]];// 5th number of last row

                // Winning condition
                if (secondhalfCondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });



        if (newWinnersFound) {
            setSecondhalf(updatedWinners);
        }
    };

    const shehnaibidaaiDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...shehnaibidaai];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {


                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };


                const fristRowIndices = getNonNullIndices(updatedTicket[0]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "first half" condition
                const ShehnaibidaaiCondition =

                    fristRowIndices.length >= 3 &&
                    updatedMarked[0][fristRowIndices[0]] &&// 1st number of first row
                    updatedMarked[0][fristRowIndices[1]] &&// 2nd number of first row
                    updatedMarked[0][fristRowIndices[2]] &&// 3rd number of frist row

                    lastRowIndices.length >= 5 &&
                    updatedMarked[2][lastRowIndices[2]] &&// 1st number of last row
                    updatedMarked[2][lastRowIndices[3]] &&// 2nd number of last row
                    updatedMarked[2][lastRowIndices[4]];// 3rd number of last row

                // Winning condition
                if (ShehnaibidaaiCondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });



        if (newWinnersFound) {
            setShehnaibidaai(updatedWinners);
        }
    };

    const brahmaDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...brahma];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Check if all numbers between 1 and 30 are marked
                const numbers1To30Marked = updatedTicket.every((row, rowIndex) =>
                    row.every((cellNumber, colIndex) => {
                        if (cellNumber !== null && cellNumber >= 1 && cellNumber <= 30) {
                            return updatedMarked[rowIndex][colIndex];
                        }
                        return true; // Ignore numbers outside 1-30
                    })
                );

                // Winning condition
                if (numbers1To30Marked && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });



        if (newWinnersFound) {
            setBrahma(updatedWinners);
        }
    };

    const vishnuDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...vishnu];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {


                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Check if all numbers between 31 and 60 are marked
                const numbers31To60Marked = updatedTicket.every((row, rowIndex) =>
                    row.every((cellNumber, colIndex) => {
                        if (cellNumber !== null && cellNumber >= 31 && cellNumber <= 60) {
                            return updatedMarked[rowIndex][colIndex];
                        }
                        return true; // Ignore numbers outside 31-60
                    })
                );

                // Winning condition
                if (numbers31To60Marked && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });



        if (newWinnersFound) {
            setVishnu(updatedWinners);
        }
    };

    const maheshDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...mahesh];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Check if all numbers between 31 and 60 are marked
                const numbers61To90Marked = updatedTicket.every((row, rowIndex) =>
                    row.every((cellNumber, colIndex) => {
                        if (cellNumber !== null && cellNumber >= 61 && cellNumber <= 90) {
                            return updatedMarked[rowIndex][colIndex];
                        }
                        return true; // Ignore numbers outside 31-60
                    })
                );

                // Winning condition
                if (numbers61To90Marked && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });



        if (newWinnersFound) {
            setMahesh(updatedWinners);
        }
    };

    const railwaytrackDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...railwaytrack];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);

                const updatedTicket = ticket.ticket;

                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };


                const fristRowIndices = getNonNullIndices(updatedTicket[0]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "first half" condition
                const railwaytrackcondition =

                    fristRowIndices.length >= 5 &&
                    updatedMarked[0][fristRowIndices[0]] &&// 1st number of first row
                    updatedMarked[0][fristRowIndices[1]] &&// 2nd number of first row
                    updatedMarked[0][fristRowIndices[2]] &&// 3rd number of frist row
                    updatedMarked[0][fristRowIndices[3]] &&
                    updatedMarked[0][fristRowIndices[4]] &&

                    lastRowIndices.length >= 5 &&
                    updatedMarked[2][lastRowIndices[0]] &&
                    updatedMarked[2][lastRowIndices[1]] &&
                    updatedMarked[2][lastRowIndices[2]] &&// 1st number of last row
                    updatedMarked[2][lastRowIndices[3]] &&// 2nd number of last row
                    updatedMarked[2][lastRowIndices[4]];// 3rd number of last row

                // Winning condition
                if (railwaytrackcondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });


        if (newWinnersFound) {
            setRailwaytrack(updatedWinners);
        }
    };

    const drumDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...drum];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };


                const fristRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "first half" condition
                const drumcondition =
                    fristRowIndices.length >= 4 &&
                    updatedMarked[0][fristRowIndices[1]] &&// 2nd number of first row
                    updatedMarked[0][fristRowIndices[2]] &&// 3rd number of frist row
                    updatedMarked[0][fristRowIndices[3]] &&

                    middleRowIndices.length >= 4 &&
                    updatedMarked[1][middleRowIndices[1]] &&// 3rd number of middle row
                    updatedMarked[1][middleRowIndices[2]] &&// 4th number of middle row
                    updatedMarked[1][middleRowIndices[3]] &&// 5th number of middle row

                    lastRowIndices.length >= 4 &&
                    updatedMarked[2][lastRowIndices[1]] &&
                    updatedMarked[2][lastRowIndices[2]] &&// 1st number of last row
                    updatedMarked[2][lastRowIndices[3]];// 2nd number of last row

                // Winning condition
                if (drumcondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });



        if (newWinnersFound) {
            setDrum(updatedWinners);
        }
    };

    const zipDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...zip];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {


                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);

                const updatedTicket = ticket.ticket;

                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };


                const fristRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "Drum" condition
                const zipcondition =
                    fristRowIndices.length >= 2 &&
                    updatedMarked[0][fristRowIndices[0]] &&
                    updatedMarked[0][fristRowIndices[1]] &&

                    middleRowIndices.length >= 3 &&
                    updatedMarked[1][middleRowIndices[2]] &&

                    lastRowIndices.length >= 5 &&
                    updatedMarked[2][lastRowIndices[3]] &&
                    updatedMarked[2][lastRowIndices[4]];// 2nd number of last row

                // Winning condition
                if (zipcondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });


        if (newWinnersFound) {
            setZip(updatedWinners);
        }
    };
    const zapDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...zap];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {


                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };


                const fristRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "zap" condition
                const zapcondition =
                    fristRowIndices.length >= 2 &&
                    updatedMarked[0][fristRowIndices[0]] &&
                    updatedMarked[0][fristRowIndices[1]] &&

                    middleRowIndices.length >= 3 &&
                    updatedMarked[1][middleRowIndices[2]] &&

                    lastRowIndices.length >= 5 &&
                    updatedMarked[2][lastRowIndices[3]] &&
                    updatedMarked[2][lastRowIndices[4]];

                // Winning condition
                if (zapcondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });


        if (newWinnersFound) {
            setZap(updatedWinners);
        }
    };

    const pyramidDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...pyramid];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;
                // Get non-null indices for all rows
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };

                const topRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "Pyramid" condition
                const pyramidCondition =
                    topRowIndices.length >= 3 &&
                    updatedMarked[0][topRowIndices[2]] && // 1st number of top row

                    middleRowIndices.length >= 4 &&
                    updatedMarked[1][middleRowIndices[1]] && // 2nd number of middle row
                    updatedMarked[1][middleRowIndices[3]] && // 4th number of middle row

                    lastRowIndices.length >= 5 &&
                    updatedMarked[2][lastRowIndices[0]] && // 1st number of last row
                    updatedMarked[2][lastRowIndices[2]] && // 3rd number of last row
                    updatedMarked[2][lastRowIndices[4]];  // last number of last row

                // Winning condition
                if (pyramidCondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });


        if (newWinnersFound) {
            setPyramid(updatedWinners);
        }
    };

    const reversepyramidDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...reversepyramid];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);

                const updatedTicket = ticket.ticket;
                // Get non-null indices for all rows
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };

                const topRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "Reverse Pyramid" condition
                const reversepyramidCondition =
                    topRowIndices.length >= 5 &&
                    updatedMarked[0][topRowIndices[0]] && //1st number of top row
                    updatedMarked[0][topRowIndices[2]] && // 3rd number of top row
                    updatedMarked[0][topRowIndices[4]] && // 4th number of top row

                    middleRowIndices.length >= 4 &&
                    updatedMarked[1][middleRowIndices[1]] && // 2nd number of middle row
                    updatedMarked[1][middleRowIndices[3]] && // 4th number of middle row

                    lastRowIndices.length >= 3 &&
                    updatedMarked[2][lastRowIndices[2]]; // 3rd number of last row


                // Winning condition
                if (reversepyramidCondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });

        if (newWinnersFound) {
            setReversePyramid(updatedWinners);
        }
    };

    const circleDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...circle];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);

                const updatedTicket = ticket.ticket;
                // Get non-null indices for all rows
                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };

                const topRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "Circle" condition
                const circleCondition =
                    topRowIndices.length >= 3 &&
                    updatedMarked[0][topRowIndices[2]] && // 3rd number of top row


                    middleRowIndices.length >= 4 &&
                    updatedMarked[1][middleRowIndices[1]] && // 2nd number of middle row
                    updatedMarked[1][middleRowIndices[3]] && // 4th number of middle row

                    lastRowIndices.length >= 3 &&
                    updatedMarked[2][lastRowIndices[2]]; // 3rd number of last row


                // Winning condition
                if (circleCondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                // If this ticket wins and hasn't been added to winners yet, add it

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });


        if (newWinnersFound) {
            setCircle(updatedWinners);
        }
    };

    const PlusDividend = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...plus];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = false;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                const getNonNullIndices = (row) => {
                    return row
                        .map((num, index) => (num !== null ? index : -1))
                        .filter((index) => index !== -1);
                };

                const topRowIndices = getNonNullIndices(updatedTicket[0]);
                const middleRowIndices = getNonNullIndices(updatedTicket[1]);
                const lastRowIndices = getNonNullIndices(updatedTicket[2]);

                // Check the "Plus" condition
                const plusCondition =
                    topRowIndices.length >= 3 &&
                    updatedMarked[0][topRowIndices[2]] && // 3rd number of top row


                    middleRowIndices.length >= 4 &&
                    updatedMarked[1][middleRowIndices[1]] && // 2nd number of middle row
                    updatedMarked[1][middleRowIndices[2]] && // 3rd number of middle row
                    updatedMarked[1][middleRowIndices[3]] && // 4th number of middle row

                    lastRowIndices.length >= 3 &&
                    updatedMarked[2][lastRowIndices[2]]; // 3rd number of last row


                // Winning condition
                if (plusCondition && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)) {
                    isWinningTicket = true;
                }

                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket &&
                    !updatedWinners.some((w) => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };


                    if (dividendUsed.length < dividendCount) {
                        updatedWinners.push(winnerData);
                        setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    }

                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });


        if (newWinnersFound) {
            setPlus(updatedWinners);
        }
    };

    const allEvenDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...alleven];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = true; // Assume it is a winning ticket until proven otherwise
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Check if all even numbers are marked
                for (let rowIndex = 0; rowIndex < updatedTicket.length; rowIndex++) {
                    for (let colIndex = 0; colIndex < updatedTicket[rowIndex].length; colIndex++) {
                        const cellNumber = updatedTicket[rowIndex][colIndex];
                        if (cellNumber !== null && cellNumber % 2 === 0) { // Check for even numbers
                            if (!updatedMarked[rowIndex][colIndex]) {
                                isWinningTicket = false; // If any even number is not marked, the ticket is not a winner
                                break;
                            }
                        }
                    }
                    if (!isWinningTicket) break; // No need to continue if we already found an unmarked even number
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });


        if (newWinnersFound) {
            setAllEven(updatedWinners);
        }
    };

    const allOddDivident = (number, dividendCount, dividend, updatedPlayers) => {
        const arrayOfWinningPointNumber =
            gameData.winnersDetails
                .filter((winner) => winner.dividend.dividendName === dividend.dividendName && winner.isApproved)
                .map((winner) => winner.winingPointNumber);

        const dividendUsed = [...new Set(arrayOfWinningPointNumber)];
        if ((dividendUsed.length >= dividendCount)) return;

        const updatedWinners = [...allodd];
        let newWinnersFound = false;

        updatedPlayers.map((player) => {
            player?.tickets.map((ticket) => {

                let isWinningTicket = true;
                const updatedMarked = ticket.marked.map((row) => [...row]);
                const updatedTicket = ticket.ticket;

                // Check if all even numbers are marked
                for (let rowIndex = 0; rowIndex < updatedTicket.length; rowIndex++) {
                    for (let colIndex = 0; colIndex < updatedTicket[rowIndex].length; colIndex++) {
                        const cellNumber = updatedTicket[rowIndex][colIndex];
                        if (cellNumber !== null && cellNumber % 2 !== 0) { // Check for Odd numbers
                            if (!updatedMarked[rowIndex][colIndex]) {
                                isWinningTicket = false; // If any even number is not marked, the ticket is not a winner
                                break;
                            }
                        }
                    }
                    if (!isWinningTicket) break; // No need to continue if we already found an unmarked even number
                }

                // If this ticket wins and hasn't been added to winners yet, add it
                if (
                    player?.isActivePlayer && ticket?.isActiveTicket &&
                    isWinningTicket && !updatedWinners.some(w => w.ticket.serialNumber === ticket.serialNumber)
                ) {
                    const winnerData = {
                        name: player.name,
                        serialNumber: ticket.serialNumber,
                        dividend: dividend,
                        isApproved: false,
                        ticket: ticket,
                        winingPointNumber: number,
                    };

                    updatedWinners.push(winnerData);
                    setWinnersList((prevWinners) => [winnerData, ...prevWinners]);
                    newWinnersFound = true;
                    newDividendCount.current = newDividendCount.current + 1;
                    // Logic for notifications and other UI updates
                    togglePause();
                    setDividendsNotification(true);

                }

            });

        });

        if (newWinnersFound) {
            setAllOdd(updatedWinners);
        }
    };

    const togglePause = () => {
        setIsPaused(!isPaused);
    };



    useEffect(() => {
        let interval;

        if (isAutoRunning && mode === 'automatic' && !isPaused) {
            interval = setInterval(() => {
                generateRandomNumber();
            }, secondForAuto * 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isAutoRunning, mode, winners, isPaused, secondForAuto, calledNumbers])


    const startGameManually = () => {
        if (!gameData.isRunning) {
            Alert.alert(
                "Are You Sure? You want to start the game?",
                "After that, You will not be able to add any player or do any change in the game.",
                [
                    {
                        text: "Cancel",
                        onPress: () => {
                            // Return early if user cancels
                            return;
                        },
                        style: "cancel"
                    },
                    {
                        text: "Yes",
                        onPress: () => {
                            const updatedGameData = { ...gameData, isRunning: true };
                            dispatch(updateGame({ gameKey, gameData: updatedGameData }));
                        }
                    }
                ]
            );
            return; // Exit the function until user confirms
        } else {
            generateRandomNumber();
        }
    }




    const startAutomaticMode = () => {

        // Check if the game is not running
        if (!gameData.isRunning) {
            // Display confirmation alert
            Alert.alert(
                "Are You Sure? You want to start the game?",
                "After that, You will not be able to add any player or do any change in the game.",
                [
                    {
                        text: "Cancel",
                        onPress: () => {
                            // Return early if user cancels
                            return;
                        },
                        style: "cancel"
                    },
                    {
                        text: "Yes",
                        onPress: () => {
                            const updatedGameData = { ...gameData, isRunning: true };
                            dispatch(updateGame({ gameKey, gameData: updatedGameData }));
                            setIsAutoRunning(true);
                        }
                    }
                ]
            );
            return; // Exit the function until user confirms
        } else {
            setIsAutoRunning(true);
        }

    };

    const numberBoard = Array.from({ length: 90 }, (_, index) => index + 1);
    const calledNumbersSet = new Set(calledNumbers); // For efficient lookup



    useFocusEffect(
        useCallback(() => {
            // Combine all row winners into the winners array
            const combinedWinners = [
                ...firstRowWinners,
                ...secondRowWinners,
                ...thirdRowWinners,
                // corners
                ...fourcorners,
                ...queenCornersWinners,
                ...kingCornerWinners,
                ...fourCornercenterWinners,
                ...bullEyes,
                ...twinLines,
                ...sixcorners,
                ...sixcornersCenter,
                ...ReversetwinLines,
                //early
                ...earlyFiveWinners,
                ...earlySixWinners,
                ...earlySevenWinners,
                ...earlyEightWinners,
                ...earlyNightWinners,
                ...earlyTenWinners,
                ...earlyElevenWinners,
                ...earlyTwelveWinners,
                ...earlyThirteenWinners,
                ...earlyFourteenWinners,
                // extra section
                ...center,
                ...bamboo,
                ...firsthalf,
                ...shehnaibidaai,
                ...secondhalf,
                ...railwaytrack,
                ...drum,
                ...zip,
                ...zap,
                ...day,
                ...breakfast,
                ...lunch,
                ...dinner,
                ...night,
                ...brahma,
                ...vishnu,
                ...mahesh,
                // all number start and end with
                ...hockyStick,
                ...fatLady,
                ...uglyDuckling,
                // special numbers
                ...iLoveYou,
                ...weLoveYou,
                ...oneTwoFour,
                ...fourTwoOne,
                ...twoTwoFive,
                ...oneTwoThree,
                ...threeThreeThree,
                ...fourTwoOneReverse,
                ...dividentTripleThreeReverse,
                ...dividentThreeTwoOneReverse,
                // full house
                ...fullHouseWinners,
                // temp- smallest and largest
                ...tempWinners,
                ...twoSmallestTwoLargest,
                // pair
                ...onePairRowWinners,
                ...twoPairRowWinners,
                ...threePairRowWinners,
                ...fourPairRowWinners,
                ...allPairs,
                ...onePairColumnWinners,
                ...twoPairColumnWinners,
                ...threePairColumnWinners,
                ...fourPairColumnWinners,
                ...allPairColumnWinners,
                //math
                ...pyramid,
                ...reversepyramid,
                ...circle,
                ...plus,
                ...alleven,
                ...allodd,

            ];

            // Reverse the combined array to make the last entry appear first
            const reversedWinners = combinedWinners.reverse();

            // Update the winners state with the reversed list
            //  setWinners(winnersList);

        }, [firstRowWinners, secondRowWinners, thirdRowWinners,
            // corners
            fourcorners, queenCornersWinners, kingCornerWinners, fourCornercenterWinners, bullEyes, twinLines, sixcorners, sixcornersCenter, ReversetwinLines,
            // early lines
            earlyFiveWinners, earlySixWinners, earlySevenWinners, earlyEightWinners,
            earlyNightWinners, earlyTenWinners, earlyElevenWinners,
            earlyTwelveWinners, earlyThirteenWinners, earlyFourteenWinners,
            //extra
            center, bamboo, firsthalf, shehnaibidaai, secondhalf, railwaytrack, drum, zip, zap, day, breakfast, lunch, dinner, night, brahma, vishnu, mahesh,
            //math
            pyramid, reversepyramid, circle, plus, alleven, allodd,
            // all number start and end with
            hockyStick, fatLady, uglyDuckling,
            // special number
            iLoveYou, weLoveYou, oneTwoFour, fourTwoOne, twoTwoFive,
            oneTwoThree, threeThreeThree, fourTwoOneReverse, dividentTripleThreeReverse, dividentThreeTwoOneReverse,
            // full house
            fullHouseWinners,
            // max-min
            tempWinners, twoSmallestTwoLargest,
            // pairs
            onePairRowWinners, twoPairRowWinners, threePairRowWinners, fourPairRowWinners, allPairs,
            onePairColumnWinners, twoPairColumnWinners, threePairColumnWinners, fourPairColumnWinners, allPairColumnWinners
        ])
    );



    // Sync calledNumbers and dividendsWiseWinners with the Redux store whenever calledNumbers changes

    useEffect(() => {
        // Create an updated version of dividendsWiseWinners
        const updatedDividendsWiseWinners = [
            { type: "First/Top Line", winners: firstRowWinners },
            { type: "Second/Middle Line", winners: secondRowWinners },
            { type: "Third/Last Line", winners: thirdRowWinners },
            // Corner Line winners
            { type: "4 Corners", winners: fourcorners },
            { type: "King Corners", winners: kingCornerWinners },
            { type: "Queen Corners", winners: queenCornersWinners },
            { type: "4 Corners and Center", winners: fourCornercenterWinners },
            { type: "Bulls Eyes", winners: bullEyes },
            { type: "Twin Lines", winners: twinLines },
            { type: '6 Corners', winners: sixcorners },
            { type: '6 Corners and Center', winners: sixcornersCenter },
            { type: 'Reverse Twin', winners: ReversetwinLines },

            // Early Line winners
            { type: 'Early 5/Jaldi 5', winners: earlyFiveWinners },
            { type: 'Early 6/Jaldi 6', winners: earlySixWinners },
            { type: 'Early 7/Jaldi 7', winners: earlySevenWinners },
            { type: 'Early 8/Jaldi 8', winners: earlyEightWinners },
            { type: 'Early 9/Jaldi 9', winners: earlyNightWinners },
            { type: 'Early 10/Jaldi 10', winners: earlyTenWinners },
            { type: 'Early 11/Jaldi 11', winners: earlyElevenWinners },
            { type: 'Early 12/Jaldi 12', winners: earlyTwelveWinners },
            { type: 'Early 13/Jaldi 13', winners: earlyThirteenWinners },
            { type: 'Early 14/Jaldi 14', winners: earlyFourteenWinners },

            //Extra
            { type: 'Breakfast', winners: breakfast },
            { type: 'Lunch', winners: lunch },
            { type: 'Dinner', winners: dinner },
            { type: 'Day || Jawani', winners: day },
            { type: 'Night || Budhapa', winners: night },
            { type: 'Center || Laddu', winners: center },
            { type: 'Bamboo', winners: bamboo },
            { type: 'First Half', winners: firsthalf },
            { type: 'Second Half', winners: secondhalf },
            { type: 'Shehnai Bidaai', winners: shehnaibidaai },
            { type: 'Brahma', winners: brahma },
            { type: 'Vishnu', winners: vishnu },
            { type: 'Mahesh', winners: mahesh },
            { type: 'Railway Track', winners: railwaytrack },
            { type: 'Drum', winners: drum },
            { type: 'zip', winners: zip },
            { type: 'zap', winners: zap },

            // math
            { type: 'Pyramid', winners: pyramid },
            { type: 'Reverse Pyramid', winners: reversepyramid },
            { type: 'Circle', winners: circle },
            { type: 'Plus', winners: plus },
            { type: 'All Even', winners: alleven },
            { type: 'All Odd', winners: allodd },
            // all number start and end with
            { type: 'Hockey Stick', winners: hockyStick },
            { type: 'Fat Lady', winners: fatLady },
            { type: 'Ugly Duckling', winners: uglyDuckling },

            //Special Numbers
            { type: 'I Love You 143', winners: iLoveYou },
            { type: 'We Love You 243', winners: weLoveYou },
            { type: '124', winners: oneTwoFour },
            { type: '421', winners: fourTwoOne },
            { type: '225', winners: twoTwoFive },
            { type: '123', winners: oneTwoThree },
            { type: '333', winners: threeThreeThree },
            { type: '4 2 ka 1(Reverse)', winners: fourTwoOneReverse },
            { type: '333 (reverse)', winners: dividentTripleThreeReverse },
            { type: '3 2 ka 1(Reverse)', winners: dividentThreeTwoOneReverse },
            // full house winners
            { type: 'House', winners: fullHouseWinners },
            //min-max winners
            { type: 'Temp./ BP', winners: tempWinners },
            { type: 'Double Temp.', winners: twoSmallestTwoLargest },
            // pair
            { type: '1 Pair (Row)', winners: onePairRowWinners },
            { type: '2 Pair (Row)', winners: twoPairRowWinners },
            { type: '3 Pair (Row)', winners: threePairRowWinners },
            { type: '4 Pair (Row)', winners: fourPairRowWinners },
            { type: 'All Pair (Row)', winners: allPairs },
            { type: '1 Pair (Column)', winners: onePairColumnWinners },
            { type: '2 Pair (Column)', winners: twoPairColumnWinners },
            { type: '3 Pair (Column)', winners: threePairColumnWinners },
            { type: '4 Pair (Column)', winners: fourPairColumnWinners },
            { type: 'All Pair (Column)', winners: allPairColumnWinners },
        ];

        // Update the game data with the called numbers and the updated dividendsWiseWinners
        const updatedGameData = {
            ...gameData,
            calledNumbers: calledNumbers,
            winnersDetails: winnersList,
            dividendsWiseWinners: updatedDividendsWiseWinners,
        };

        // Dispatch the updated game data to the Redux store
        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
    }, [calledNumbers, firstRowWinners, secondRowWinners, thirdRowWinners,
        // corners
        fourcorners, queenCornersWinners, kingCornerWinners, fourCornercenterWinners, bullEyes, twinLines, sixcorners, sixcornersCenter, ReversetwinLines,
        // early lines
        earlyFiveWinners, earlySixWinners, earlySevenWinners, earlyEightWinners, earlyNightWinners, earlyTenWinners, earlyElevenWinners, earlyTwelveWinners,
        earlyThirteenWinners, earlyFourteenWinners,
        // extra
        center, bamboo, firsthalf, secondhalf, shehnaibidaai, railwaytrack, drum, zip, zap, day, breakfast, lunch, dinner, night, brahma, vishnu, mahesh,
        //math
        pyramid, reversepyramid, circle, plus, alleven, allodd,
        // all number start and end with
        hockyStick, fatLady, uglyDuckling,
        // special number
        iLoveYou, weLoveYou, oneTwoFour, fourTwoOne, twoTwoFive,
        oneTwoThree, threeThreeThree, fourTwoOneReverse, dividentTripleThreeReverse, dividentThreeTwoOneReverse,
        // full house
        fullHouseWinners,
        // max-min 
        tempWinners, twoSmallestTwoLargest,
        // pairs
        onePairRowWinners, twoPairRowWinners, threePairRowWinners, fourPairRowWinners, allPairs,
        onePairColumnWinners, twoPairColumnWinners, threePairColumnWinners, fourPairColumnWinners, allPairColumnWinners
    ]);


    const handleApproveAlert = () => {
        const updatedGameData = {
            ...gameData,
            isDividendApproveAlert: !gameData.isDividendApproveAlert
        };

        // Dispatch the updated game data to the Redux store
        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
        setRerender(!rerender);
    }

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
            const filePath = `${RNFS.CachesDirectoryPath}/temp.jpg`;
            await RNFS.moveFile(uri, filePath);
            // Get the last called number from the calledNumbers state
            const lastCalledNumber = calledNumbers.length > 0 ? calledNumbers[calledNumbers.length - 1] : null;

            // Create the message
            const message = lastCalledNumber ? ` ${lastCalledNumber} is the Last Number Called` : 'Start of the Game 😊 No Number Called Yet.Please Find the Board. All the Best For your Game 👍';
            // Share the image
            await Share.open({
                url: 'file://' + filePath,
                type: 'image/jpeg',
                message: message,
            });

        } catch (error) {
            console.error('Error sharing the ticket: ', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                {/* Button to open/close the modal */}
                <TouchableOpacity onPress={() => setCalledNumberModalVisible(!calledNumberModalVisible)} style={{

                    height: 50,
                    width: 50,
                    marginLeft: 20,
                    marginTop: 20,
                }}>
                    <Text><MaterialIcons name="history" size={25} color="black" /></Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleApproveAlert}
                    style={{
                        height: 50,
                        width: 50,
                        //marginRight: 10,
                        marginTop: 20,
                    }}>
                    <Text>{gameData.isDividendApproveAlert ? <FontAwesome name="bell-o" size={20} color="black" /> : <FontAwesome name="bell-slash-o" size={20} color="black" />}</Text>
                </TouchableOpacity>
                {/* Sliding Modal */}
                {calledNumberModalVisible && (
                    <SlidingNonBlockingModal calledNumbers={calledNumbers} modalVisible={calledNumberModalVisible} setModalVisible={setCalledNumberModalVisible} />
                )}
            </View>

            <View style={styles.boardContainer}>
                <ViewShot ref={viewShotRef}
                    options={{ format: "jpg", quality: 0.9 }}>
                    <View style={{ backgroundColor: '#f2f2f2' }}>
                        <View style={styles.numberBoard}>
                            {numberBoard.map(number => (
                                <View
                                    key={number}
                                    style={[
                                        styles.numberCell,
                                        calledNumbers.includes(number) && (calledNumbers[calledNumbers.length - 1] == number ? { backgroundColor: 'red' } : styles.calledCell),
                                        overlayNumber === number && styles.overlayCell
                                    ]}
                                >
                                    <Text style={{
                                        color: calledNumbers.includes(number) ?
                                            '#fff' :
                                            '#999999', fontSize: 17
                                    }}>{number}</Text>
                                </View>
                            ))}
                        </View>
                        <Text style={{ fontSize: 14, textAlign: 'center' }}>{currentTime}</Text>
                        <Text style={{ color: 'blue', fontSize: 15, textAlign: 'center' }}>
                            <Text style={{ color: 'red' }}>
                                {calledNumbers[calledNumbers.length - 1]}
                            </Text>
                            {calledNumbers.length > 1 && '<--'}
                            {calledNumbers.slice(-5, -1).reverse().join('<--')}
                            {'    '}
                            {calledNumbers.length !== 0 && `Total: ${calledNumbers.length} `}
                        </Text>
                    </View>
                </ViewShot>

                {/* Radio Button Group */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <RadioButtonGroup
                        options={['manual', 'automatic']}
                        selectedValue={mode}
                        onValueChange={(value) => {
                            setMode(value);
                            setIsAutoRunning(false); // Stop automatic if switching to manual
                        }}
                    />

                    <TouchableOpacity onPress={toggleMute} >
                        <Text >{isMuted ? <MaterialIcons name="volume-off" size={30} color="black" /> : <MaterialIcons name="volume-up" size={30} color="black" />}</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                        onPress={handleApproveAlert}
                        style={{ marginLeft: 10, padding: 5 }}>
                        <Text>{gameData.isDividendApproveAlert ? <FontAwesome name="bell-o" size={24} color="black" /> : <FontAwesome name="bell-slash-o" size={24} color="black" />}</Text>
                    </TouchableOpacity> */}
                </View>


                {/* Overlay */}
                {overlayNumber !== null && (
                    <View style={styles.overlayContainer}>
                        <View style={styles.overlayContent}>
                            <Text style={styles.overlayText}>{overlayNumber}</Text>
                        </View>
                    </View>
                )}
            </View>





            <View>
                {mode === 'automatic' && isAutoRunning && (
                    <>
                        <Text style={{ color: 'red', textAlign: 'center' }}>Delay: {secondForAuto} Seconds</Text>
                        <Slider
                            style={{ width: '95%', height: 40 }}
                            minimumValue={1}
                            maximumValue={25}
                            step={1}
                            value={secondForAuto}
                            minimumTrackTintColor="#009999"
                            maximumTrackTintColor="#666666"
                            onValueChange={(value) => setSecondForAuto(value)}
                        />
                    </>
                )}
            </View>
            <View>
                {dividendsNotification &&
                    <Text style={{
                        fontWeight: 'bold', color: 'red', marginBottom: 10,
                        fontSize: 16, textAlign: 'center'
                    }}>{newDividendCount.current} {newDividendCount.current > 1 ? "New Claims Notification" : "New Claim Notification"}</Text>
                }

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-evenly', marginTop: '' }}>
                    <TouchableOpacity
                        onPress={() => { setDividendsModalVisible(true); setIsPaused(true) }}
                        style={{ width: '32%', borderRadius: 3, alignItems: 'center', justifyContent: 'center', height: 35, backgroundColor: "#ff8080" }}>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <MaterialIcons name="verified" size={24} color="#000099" />
                            <Text style={{ marginLeft: 7, fontWeight: 500, color: '#000099' }}> Verify</Text>
                        </View>
                    </TouchableOpacity>
                    {!dividendsNotification &&
                        <View style={{ width: '32%' }}>
                            {/* Manual Mode Button */}
                            {mode === 'manual' && (
                                <>
                                    {calledNumbers.length >= 90 ?
                                        <TouchableOpacity onPress={startGameManually}
                                            style={{ borderRadius: 3, alignItems: 'center', justifyContent: 'center', height: 50, marginHorizontal: 5, backgroundColor: '#ffd633' }}>
                                            <Text style={{ fontWeight: '600' }}>Finish</Text>
                                            <Text style={{ fontWeight: '600' }}>Game</Text>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={startGameManually}
                                            style={{ borderRadius: 3, alignItems: 'center', justifyContent: 'center', height: 50, marginHorizontal: 5, backgroundColor: '#ffd633' }}>
                                            <Text style={{ fontWeight: '600' }}>Next</Text>
                                            <Text style={{ fontWeight: '600' }}>Number</Text>
                                        </TouchableOpacity>
                                    }
                                </>
                            )}

                            {/* Automatic Mode Start Button */}
                            {mode === 'automatic' && !isAutoRunning && (

                                <TouchableOpacity onPress={startAutomaticMode}
                                    style={{ borderRadius: 3, alignItems: 'center', justifyContent: 'center', height: 35, marginHorizontal: 5, backgroundColor: '#ffd633' }}>
                                    <Text style={{ fontWeight: '600' }}><MaterialIcons name="play-arrow" size={32} color="black" /></Text>
                                </TouchableOpacity>
                            )}

                            {mode === 'automatic' && isAutoRunning && (

                                <TouchableOpacity onPress={togglePause}
                                    style={{ borderRadius: 3, alignItems: 'center', justifyContent: 'center', height: 35, marginHorizontal: 5, backgroundColor: '#ffd633' }}>
                                    <Text style={{ fontWeight: '600' }}>
                                        {isPaused ?
                                            <MaterialIcons name="play-arrow" size={32} color="black" />
                                            : <MaterialIcons name="pause" size={32} color="black" />}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    }
                    {dividendsNotification ?
                        <TouchableOpacity
                            onPress={() => {
                                setIsPaused(false)
                                setDividendsNotification(false);
                                //  setNewDividendCount(0);
                                newDividendCount.current = 0;
                            }}
                            style={{ width: '32%', borderRadius: 3, alignItems: 'center', justifyContent: 'center', height: 35, backgroundColor: "#ffdb4d" }}>
                            <Text style={{ color: 'black', fontWeight: '600' }}>Cancel</Text>
                        </TouchableOpacity> :
                        <TouchableOpacity
                            onPress={handleShare}
                            style={{ width: '32%', borderRadius: 3, alignItems: 'center', justifyContent: 'center', height: 35, backgroundColor: "#206020" }}>
                            <Text style={{ color: '#fff', fontWeight: '600' }}>Share</Text>
                        </TouchableOpacity>
                    }


                </View>
            </View>
            <DividendsVerifyModal
                gameKey={gameKey}
                visible={dividendsModalVisible}
                resumeGame={togglePause}
                onClose={() => {
                    setDividendsModalVisible(false);
                    setRerender(!rerender);
                    setDividendsNotification(false);
                    newDividendCount.current = 0;
                }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    winner: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 20,
    },
    ticketContainer: {
        marginBottom: 20,
    },
    ticketNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        borderWidth: 1,
        borderColor: '#ddd',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    markedCell: {
        backgroundColor: 'lightgreen', // Marked number background color
    },
    number: {
        fontSize: 16,
    },
    boardContainer: {
        position: 'relative',
        width: '100%',
        alignItems: 'center',
        marginVertical: 20,
    },
    numberBoard: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderRightWidth: 1,
        width: "100%", // Adjust width to fit your design
        maxHeight: 600, // Adjust height to fit your design
    },
    numberCell: {
        width: '10%',
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    calledCell: {
        backgroundColor: 'blue', // Color for called numbers
    },
    overlayContainer: {
        position: 'absolute',
        top: -55,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    overlayContent: {
        // backgroundColor: 'white',
        padding: 20,

    },
    overlayText: {
        fontSize: 160,
        // fontWeight: 'bold',
        color: 'red',
    },

    winnerContainer: {
        marginTop: 20,
    },
    winner: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        marginBottom: 10,
        textAlign: 'center',
    },
    ticketContainer: {
        marginBottom: 10,
    },
    ticketNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    cell: {
        borderWidth: 1,
        borderColor: '#ddd',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    markedCell: {
        backgroundColor: 'lightgreen',
    },
    number: {
        fontSize: 16,
    },

});

export default PlaySection;