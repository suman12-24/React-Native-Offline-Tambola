import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Modal, Alert, ScrollView, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateGame } from '../redux/slices/gameSlice';
import { generateUniqueTickets } from './utils';
import { generateUniqueTicketsSubsequent } from './utilsTwo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { dividendObjectArray } from './CreateGame';
import DividendsPrize from '../Components/DividendsPrize';
const PlayerManager = ({ navigation, route }) => {
    const games = useSelector((state) => state.game.games);
    const { gameKey } = route.params;
    const gameData = games[gameKey];

    // console.log("game data player manager", gameData?.playerInfo[0]?.tickets);

    const [players, setPlayers] = useState(gameData?.playerInfo || []);
    const [newPlayerName, setNewPlayerName] = useState('');
    const [tktQuantAfterTktGeneratin, setTktQuantAfterTktGeneratin] = useState();
    const [addPlayerModalVisible, setAddPlayerModalVisible] = useState(false);
    const [globalTicketCount, setGlobalTicketCount] = useState(gameData.startWithTickets);
    const [ticketsGenerated, setTicketsGenerated] = useState(false);
    const [openPlayerTicketIncrementBox, setOpenPlayerTicketIncrementBox] = useState();
    const windowHeight = Dimensions.get('window').height;
    const [rerender, setRerender] = useState(false);
    const [error, setError] = useState(false);

    const [DividentPrizeModalVisible, setDividentPrizeModalVisible] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (gameData && gameData.playerInfo) {
            setPlayers(gameData.playerInfo);
            setGlobalTicketCount(gameData.startWithTickets);
        }
    }, [gameData, rerender]);

    const openAddPlayerModal = () => {
        setAddPlayerModalVisible(true);
    };

    const closeAddPlayerModal = () => {
        setAddPlayerModalVisible(false);
        setNewPlayerName('');
    };



    // const addPlayer = () => {
    //     const trimmedName = newPlayerName.trim();

    //     // Check if the name is unique
    //     const isDuplicateName = players.some(player => player.name.toLowerCase() === trimmedName.toLowerCase());

    //     if (isDuplicateName) {
    //         setError(true);
    //         return;
    //     }

    //     // Proceed with adding the player if the name is unique
    //     const newPlayer = {
    //         id: players.length + 1,
    //         name: trimmedName || `Player ${players.length + 1}`,
    //         ticketCount: globalTicketCount,
    //         tickets: [],
    //         isActivePlayer: true,
    //     };

    //     const updatedPlayers = [...players, newPlayer];
    //     const updatedGameData = { ...gameData, playerInfo: updatedPlayers };

    //     dispatch(updateGame({ gameKey, gameData: updatedGameData }));
    //     setPlayers(updatedPlayers);
    //     closeAddPlayerModal();
    //     setError(false); // Clear any previous error
    // };

    const defaultNameArray = [
        "AAKRITI JI", "AANCHAL JI", "AAPTI JI", "AARADHYA JI", "AARTI JI", "AARUSHI JI",
        "AASHA JI", "AASHI JI", "ABHI JI", "ABHIJNA JI", "ABHILASA JI", "ABHINANDAN JI", "ABHINITHI JI",
        "ABHISHEK JI", "ABHISRI JI", "ABHITHI JI", "ADISHREE JI", "ADITHI JI", "ADITI JI", "ADITRI JI",
        "ADRIJA JI", "ADRIKA JI", "ADRISA JI", "ADVIKA JI", "ADWITA JI", "ADYA JI", "AGRIMA JI", "AHUJA JI",
        "AISHWARYA JI", "AISWARYA JI", "AKANKSHA JI", "AKSHITA JI", "ALIA JI", "ALISHA JI", "ALKA JI",
        "ALPANA JI", "AMARTA JI", "AMBALIKA JI", "AMBIKA JI", "AMITA JI", "AMRITA JI", "ANAMIKA JI",
        "ANANDI JI", "ANANYA JI", "ANCHITA JI", "ANISH JI", "ANISHA JI", "ANITA JI", "ANJALI JI", "ANJALIKA JI",
        "ANJANA JI", "ANJU JI", "ANKITA JI", "ANKUR JI", "ANNAPURNA JI", "ANNU JI", "ANSHULA JI", "ANTINI JI",
        "ANUMATI JI", "ANUPAMA JI", "ANUPRABHA JI", "ANURATI JI", "ANUSRI JI", "ANUVA JI", "ANWESHA JI", "ANYA JI",
        "APARNA JI", "APEKSHA JI", "APSARA JI", "ARADHANA JI", "ARADHYA JI", "ARCHANA JI", "ARCHITA JI", "ARIKTHA JI",
        "AROHI JI", "ARPANA JI", "ARPITA JI", "ARSHIA JI", "ARUNA JI", "ARUNDHATHI JI", "ARUNDHATI JI", "ARUSHI JI", "ARYA JI",
        "ASHA JI", "ASHIMA JI", "ASHWANI JI", "ASIS JI", "ASMITA JI", "AVANTI JI", "AVANTIKA JI", "AVNI JI", "AVNITA JI", "AYESHA JI",
        "AYUSHMATI JI", "BABITA JI", "BABITHA JI", "BAHULA JI", "BAISAKHI JI", "BAISHALI JI", "BALA JI", "BANITA JI", "BANSAREE JI",
        "BANSRI JI", "BARKHA JI", "BARSHA JI", "BASANTI JI", "BEENA JI", "BELA JI", "BENU JI",
        "BHAGIRATHI JI", "BHAGWATI JI", "BHAGYA JI", "BHAGYASHREE JI", "BHAKTI JI", "BHANAVI JI",
        "BHANU JI", "BHARTI JI", "BHAVANA JI", "BHAVANI JI", "BHAVARI JI", "BHAVIKA JI", "BHAVINA JI", "BHAVNA JI",
        "BHAVRI JI", "BHAVYA JI", "BHOOMI JI", "BHRANTI JI", "BHUMI JI", "BHUMIKA JI", "BHUMIKA PUNJABI JI", "BIJAYA JI", "BIJLI JI",
        "BIJU JI", "BIMALA JI", "BIMLA JAIN JI", "BIMLA JI", "BINA JI", "BINAL JI", "BINDIYA JI", "BINDU JI", "BINITA JI", "BINKAL JI",
        "BINTI JOSHI JI", "BIPASHA JI", "BISHAKHA JI", "BULBULI JI", "CHAAYA JI", "CHAITALY JI", "CHAITANYA JI", "CHAITRA JI", "CHAKORI JI",
        "CHAMAN JI", "CHAMELI JI", "CHAMPA JI", "CHANCHAL JI", "CHANDA JI", "CHANDIKA JI", "CHANDNI JI", "CHANDRIKA JI", "CHARU JI",
        "CHARVI JI", "CHETNA PATEL JI", "CHHABI JI", "CHHAYA JI", "CHITI JI", "CHITKALA JI", "CHITRA JI", "CHITRALI JI", "CHITRANI JI",
        "DAKSHA JI", "DAMINI JI", "DARSHANA JI", "DARSHINI JI", "DARSHITA JI", "DARSHTI JI", "DAY JI", "DAYA JI", "DAYANITA JI", "DEBANSHI JI",
        "DEBOLINA JI", "DEBOSREE JI", "DEEPA JI", "DEEPALI JI", "DEEPIKA JI", "DEEPTI JI", "DESHNA JI", "DEVAKI JI", "DEVANSH JI",
        "DEVANSHI JI", "DEVIKA JI", "DEVKI JI", "DEVYA JI", "DEVYANI JI", "DHANVI JI", "DHARA JI", "DHARANI JI", "DHARNA JI", "DHARTI JI",
        "DHATRI JI", "DHITHA JI", "DHITHI JI", "DHRITI JI", "DHRUVI JI", "DHUTHI JI", "DIKSHA JI", "DILSHAD JI", "DIMPAL JI", "DIMPLE JI",
        "DIPALI JI", "DIPANWITA JI", "DIPIKA JI", "DIPTI JI", "DISHA JI", "DISHANI JI", "DISHITA JI", "DITI JI", "DIVENA JI", "DIVIJA JI",
        "DIVYA JI", "DIVYANA JI", "DIVYANKA JI", "DIYA JI", "DIYU JI", "DOYEL JI", "DRISTI JI", "DURGA JI", "ESHANI JI", "ESHIKA JI",
        "ESHITA JI", "GANGA JI", "GANPATI BAPPA MOURYA  JI", "GARG JI", "GARGEE JI", "GARGI JI", "GARIMA JI", "GAURI JI", "GAURIKA JI",
        "GAYATRI JI", "GITA JI", "GUPTA KISHORE JI", "GURDEEP JI", "HARJEET JI", "HARSHITA JI", "HASTE RAHO JI", "HEMA JI", "HEMAKSHI JI",
        "HEMANGI JI", "HEMLATA JI", "HOORI JI", "INDRA JI", "INDRANI JI", "INDU JI", "ISHANA JI", "ISHANI JI", "ISHANYA JI", "ISHI JI",
        "ISHIKA JI", "ISHITA JI", "ISHWARI JI", "JAANVI JI", "JAGRUTI JI", "JAHNVI JI", "JAMUNA JI", "JAYANTHI JI", "JAYANTI JI", "JAYATI JI",
        "JAYITRI JI", "JAYSHRI JI", "JI JI", "JINDAGI NA MILEGI DOBARA JI", "JITENDRA JI", "JYOTHI JI", "JYOTIKA JI", "JYOTSNA JI",
        "KAJAL JI", "KANCHAN JI", "KAREENA JI", "KARISHMA JI", "KAUR JI", "KAVERI JI", "KAVITA JI", "KAVYA JI", "KIRAN JI", "KOMAL JI",
        "KULDEEP JI", "KUSUM JI", "LEELA JI", "LEKHA JI", "LIPIKA JI", "LUCKY JI", "MAAHI JI", "MAAYA JI", "MADHAVI JI", "MADHU JI",
        "MADHURI JI", "MAMTA JI", "MANAL JI", "MANALI SHAH JI", "MANAVA JI", "MANJEET JI", "MANJU JI", "MANSHI JI", "MANSI JI", "MANSVI JI",
        "MANU JINDAL JI", "MANVI JI", "MAYURI JI", "MEDHA  JI", "MEENA JI", "MEENU JI", "MEERA JI", "MEGHA JI", "MEHER JI", "MEHER SONI JI",
        "MEHRA JI", "MEHTA JI", "MENAKA JI", "MENKA JI", "MINAKSHI JI", "MINAL JI", "MIRALI JI", "MITTU JI", "MOHALI B JI", "MOHINI JI",
        "MONALISA JI", "MONIKA JI", "MOULY JI", "MRINAL JI", "NABANITA JI", "NAGMA JI", "NAINA JI", "NAMITA JI", "NAMRATA JI", "NAMRTA JI",
        "NANCY JI", "NANDA JI", "NANDINI JI", "NAYNA JI", "NEELAM JI", "NEELU JI", "NEEN JI", "NEERU SETHI  JI", "NEHA JI", "NEHALI JI",
        "NIDHI JI", "NIHARIKA SINGHI JI", "NIKITA JI", "NILA JI", "NILA SANGVI JI", "NILANJANA JI", "NILU JI", "NINA JI", "NIRALI JI",
        "NIRMALA JI", "NITA JI", "NITU JI", "NIYATI JI", "NUSRAT JI", "NUTAN JI", "PADMA JI", "PADMINI JI", "PAHAL JI", "PALAK JI",
        "PALLAVI JI", "PANVI JI", "PARI JI", "PARINEETI  JI", "PARMILA JI", "PARUL JI", "PARVATI JI", "PAYAL JI", "PIHU JI", "PIU JI",
        "PIYU JI", "POMPA JI", "POOJA JI", "POONAM JI", "PRACHI JI", "PRAGATI JI", "PRAGYA JI", "PRATIKSHA JI", "PRATIMA JI", "PREETI JI",
        "PREMA JI", "PREMLATA JI", "PRERANA JI", "PRERNA JI", "PRINCESS JI", "PRITI JI", "PRIYA JI", "PRIYAL JI", "PRIYANKA JI", "PUJA JI",
        "PUNAM JI", "PURNIMA JI", "PURVI JI", "PUSHPA JI", "RADHIKA JI", "RAJASHRI JI", "RAJNI JI", "RAKESH JI", "RAKHI JI", "RAMOLA JI",
        "RANI JI", "RASHMI JI", "RAWAT JI", "REKHA JI", "RESHMA JI", "RIDDHI JI", "RIMA JI", "RISHAV JI", "RISHIKA JI", "RITIKA JI",
        "ROSHNI JI", "RUBINA JI", "RUCHI JI", "RUCHIKA JI", "RUHI OBEROI JI", "RUMI JI", "RUPAL JI", "RUPALI JI", "RUPASHI JI", "RUPASHRI JI",
        "SABITA JI", "SABKA MALIK EK JI", "SABNAM JI", "SABRI JI", "SACHI JI", "SADHIKA JI", "SADHVI JI", "SADHYA JI", "SAFIA JI", "SAHELI JI",
        "SAHIBA JI", "SAHILA JI", "SAHITHA JI", "SAI SABKE SATH JI", "SAKHI JI", "SALIMA JI", "SALONI JI", "SAMATA JI", "SAMBHAV JI",
        "SAMIDHA JI", "SAMIKA JI", "SAMIKSHA JI", "SAMIT JI", "SAMITA JI", "SAMIYA JI", "SANA JI", "SANANDA JI", "SANCHALI JI", "SANCHITA JI",
        "SANDHAYA JI", "SANDHYA JI", "SANGITA JI", "SANIKA JI", "SANIYA JI", "SANJANA JI", "SANKUL JI", "SANSKAR JI", "SANSKRITI JI",
        "SANSKRTI JI", "SANVALI JI", "SAPARNA JI", "SARALA JI", "SARAMA JI", "SARANI JI", "SARANYA JI", "SARASI JI", "SARASWATI JI",
        "SARBANI JI", "SARIKA JI", "SARIT JI", "SARJANA JI", "SAROJ JI", "SAROJA JI", "SAROJINI JI", "SATI JI", "SATYA JI", "SAVITA JI",
        "SAVITRI JI", "SEEMA JI", "SEERAT JI", "SEJAL JI", "SELMA JI", "SHAILI JI", "SHALINI JI", "SHARIKA JI", "SHARMILA JI", "SHASHI JI",
        "SHEELA JI", "SHEETAL JI", "SHEFALI JI", "SHEHNAI JI", "SHILPA JI", "SHIPRA JI", "SHIVANGI JI", "SHIVANI JI", "SHIVAYA JI",
        "SHOBHA JI", "SHRADDHA JI", "SHREYA JI", "SHRI JI", "SHRIMAN JI", "SHRUTI JI", "SHUKLA JI", "SHUKMINDER JI", "SHUKTI JI", "SHULKA JI",
        "SHWETA JI", "SIDDHI JI", "SIKTA JI", "SIMPLE JI", "SIMRAN JI", "SINHA JI", "SITA JI", "SIYA JI", "SMITA JI", "SMRITI JI", "SNEHA JI",
        "SNEHAL JI", "SOMA JI", "SONAKSHI JI", "SONAL JI", "SONALI JI", "SONAM JI", "SONIKA JI", "SONPARI JI", "SOUJANYA JI", "SOUMYA JI",
        "SRISTI JI", "SRUJANA JI", "SUCHI JI", "SUCHITA JI", "SUCHITRA JI", "SUDIPTA JI", "SUDIPTI JI", "SUKANYA JI", "SULTANA JI", "SUMAN JI",
        "SUMANA JI", "SUMATI JI", "SUMIT JI", "SUMITA JI", "SUMITI KHURANA JI", "SUMITRA JI", "SUNAYA JI", "SUNAYANI JI", "SUNDARI JI",
        "SUNILA JI", "SUNITA JI", "SUPARNA JI", "SUPRITI JI", "SUPRIYA JI", "SURINA JI", "SUSHILA JI", "SUSMITA JI", "SUTANUKA JI",
        "SWAGATA JI", "SWAPNA JI", "SWAPNIL JI", "SWASTI JI", "SWATI JI", "SWATI KALA  JI", "SWETA JI", "TAKIA JI ", "TAKIA SULTANA JI",
        "TANPRIT JI", "TANU JI", "TANUJA JI", "TANUSHREE JI", "TANVI JI", "TANYA JI", "TAPASI JI", "TAPTI JI", "TARA JI", "TARIKA JI",
        "TARINI JI", "TARU JI", "TINA JI", "TWINKLE JI", "URMIL DODANI JI", "USHA JI", "VAIDEHI JI", "VARTIKA JI",
        "VIDHI JI", "VIDHYA JI", "VIDISHA JI", "VIJEYA JI", "VINITA JI", "YAMUNA JI", "YASH JI", "YASHVI JI", "ZARANA JI", "ZIMMI JI"
    ];

    const addPlayer = () => {
        const trimmedName = newPlayerName.trim();

        // Check if the name is unique
        const isDuplicateName = players.some(player => player.name.toLowerCase() === trimmedName.toLowerCase());

        if (isDuplicateName) {
            setError(true);
            return;
        }

        let playerName;

        // Check if a newPlayerName is provided
        if (trimmedName) {
            playerName = trimmedName;
        } else {
            // Filter out names already used
            const availableNames = defaultNameArray.filter(name => !players.some(player => player.name === name));

            if (availableNames.length > 0) {
                // Choose a random name from the available ones
                playerName = availableNames[Math.floor(Math.random() * availableNames.length)];
            } else {
                setError(true);
                Alert.alert("All default names have been used. Please enter a unique name.");
                return;
            }
        }

        // Proceed with adding the player if the name is unique or a random unique name is assigned
        const newPlayer = {
            id: players.length + 1,
            name: playerName,
            ticketCount: globalTicketCount,
            tickets: [],
            isActivePlayer: true,
        };

        const updatedPlayers = [...players, newPlayer];
        const updatedGameData = { ...gameData, playerInfo: updatedPlayers };

        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
        setPlayers(updatedPlayers);
        closeAddPlayerModal();
        setError(false); // Clear any previous error
    };


    const addPlayerSubsequent = () => {

        if (!(tktQuantAfterTktGeneratin > 0 && tktQuantAfterTktGeneratin <= 36)) return;

        const trimmedName = newPlayerName.trim();

        // Check if the name is unique
        const isDuplicateName = players.some(player => player.name.toLowerCase() === trimmedName.toLowerCase());

        if (isDuplicateName) {
            setError(true);
            return;
        }


        let playerName;

        // Check if a newPlayerName is provided
        if (trimmedName) {
            playerName = trimmedName;
        } else {
            // Filter out names already used
            const availableNames = defaultNameArray.filter(name => !players.some(player => player.name === name));

            if (availableNames.length > 0) {
                // Choose a random name from the available ones
                playerName = availableNames[Math.floor(Math.random() * availableNames.length)];
            } else {
                setError(true);
                Alert.alert("All default names have been used. Please enter a unique name.");
                return;
            }
        }


        const newPlayer = {
            id: players.length + 1,
            name: playerName,
            //  name: trimmedName.trim() || `Player ${players.length + 1}`,
            ticketCount: tktQuantAfterTktGeneratin,
            tickets: generateTicketsSubsequent(),
            isActivePlayer: true,
        };

        const updatedPlayers = [...players, newPlayer];
        const updatedGameData = { ...gameData, playerInfo: updatedPlayers };
        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
        setPlayers(updatedPlayers);
        closeAddPlayerModal();
        setError(false);
    };


    const deletePlayer = (playerId) => {
        Alert.alert(
            "Delete Player",
            "Are you sure you want to delete this game?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => {
                        const updatedPlayerInfo = players.filter(player => player?.id !== playerId);
                        // setPlayers(players.filter(player => player.id !== playerId));
                        const updatedGameData = { ...gameData, playerInfo: updatedPlayerInfo };
                        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
                    },
                    style: "destructive"
                }
            ]
        );
    };
    const deleteAllPlayers = () => {
        Alert.alert(
            "Delete All Player?",
            "You can add players later.",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => {
                        // setPlayers(updatedPlayers);
                        const updatedGameData = { ...gameData, playerInfo: [] };
                        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
                    },
                    style: "destructive"
                }
            ]
        );
    }

    const incrementPlayerTicket = (playerId) => {
        // setPlayers(players.map(player => {
        //     if (player?.id === playerId) {
        //         return player?.ticketCount < 36 ? { ...player, ticketCount: player?.ticketCount + 1 } : { ...player, ticketCount: 36 };
        //     }
        //     return player;
        // }));

        const updatedPlayers = players.map(player => {
            if (player?.id === playerId) {
                return player?.ticketCount < 36 ? { ...player, ticketCount: player?.ticketCount + 1 } : { ...player, ticketCount: 36 };
            }
            return player;
        });

        setPlayers(updatedPlayers);
        const updatedGameData = { ...gameData, playerInfo: updatedPlayers };
        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
    };

    const decrementPlayerTicket = (playerId) => {
        // setPlayers(players.map(player => {
        //     if (player?.id === playerId && player?.ticketCount > 0) {
        //         return { ...player, ticketCount: player?.ticketCount - 1 };
        //     }
        //     return player;
        // }));

        const updatedPlayers = players.map(player => {
            if (player?.id === playerId && player?.ticketCount > 0) {
                return { ...player, ticketCount: player?.ticketCount - 1 };
            }
            return player;
        });

        setPlayers(updatedPlayers);
        const updatedGameData = { ...gameData, playerInfo: updatedPlayers };
        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
    };

    const incrementGlobalTicketCount = () => {
        if (globalTicketCount < 36) {
            const ticketCount = globalTicketCount + 1;
            setGlobalTicketCount(ticketCount);
            const updatedPlayers = players.map(player => ({
                ...player,
                ticketCount: ticketCount
            }));

            setPlayers(updatedPlayers);
            const updatedGameData = { ...gameData, playerInfo: updatedPlayers, startWithTickets: ticketCount };
            dispatch(updateGame({ gameKey, gameData: updatedGameData }));
        }
    };

    const decrementGlobalTicketCount = () => {
        if (globalTicketCount > 0) {
            const ticketCount = globalTicketCount - 1;
            setGlobalTicketCount(ticketCount);
            const updatedPlayers = players.map(player => ({
                ...player,
                ticketCount: ticketCount
            }));
            setPlayers(updatedPlayers);

            const updatedGameData = { ...gameData, playerInfo: updatedPlayers, startWithTickets: ticketCount };
            dispatch(updateGame({ gameKey, gameData: updatedGameData }));
        }
    };



    const generateTickets = () => {
        const totalTicketsRequested = players.reduce((sum, player) => sum + player?.ticketCount, 0);
        const availableTickets = generateUniqueTickets(totalTicketsRequested);
        // console.log("availableTickets", availableTickets);
        let serialNumber = 1;
        const updatedPlayers = players.map((player, index) => {
            const startIdx = players.slice(0, index).reduce((sum, p) => sum + p?.ticketCount, 0);
            const assignedTickets = availableTickets.slice(startIdx, startIdx + player?.ticketCount).map(ticketData => ({
                ...ticketData,
                serialNumber: serialNumber++,
                isActiveTicket: true,
            }));
            return { ...player, tickets: assignedTickets };
        });

        setPlayers(updatedPlayers);
        const updatedGameData = { ...gameData, playerInfo: updatedPlayers, isTicketGenerated: true };
        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
        //  setTicketsGenerated(true);

        // Update the game in Redux
        const updatedGame = {
            ...gameData,
            playerInfo: updatedPlayers,
            isPlayed: false,
        };

        dispatch(updateGame({ key: gameKey, game: updatedGame }));
    };


    const generateTicketsSubsequent = () => {
        // Extract all ticket arrays from all players and remove the serialNumber property
        const getAllTicketsWithoutSerialNumber = (gameData) => {
            return gameData?.playerInfo
                .flatMap(player => player?.tickets || [])
                .map(({ serialNumber, ...ticketWithoutSerialNumber }) => ticketWithoutSerialNumber) || [];
        };

        const allTicketsWithoutSerialNumber = getAllTicketsWithoutSerialNumber(gameData);
        const availableTickets = generateUniqueTicketsSubsequent(tktQuantAfterTktGeneratin, allTicketsWithoutSerialNumber);
        setTktQuantAfterTktGeneratin('');
        return availableTickets;
    };


    const startGame = () => {
        // const updatedGameData = { ...gameData, isRunning: true };
        // dispatch(updateGame({ gameKey, gameData: updatedGameData }));
        navigation.navigate('PlaySection', { gameKey });
    };




    const resetGame = () => {
        Alert.alert(
            "Reset Game?",
            "All Tickets of All Players Will Be Deleted.",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    onPress: () => {
                        // Reset players' tickets and ticket counts
                        const updatedPlayers = gameData?.playerInfo?.map((player) => ({
                            ...player,
                            tickets: [],
                            ticketCount: 1,
                            isActivePlayer: true
                        }));

                        // Reset game data with cleared players' tickets and called numbers
                        const updatedGameData = {
                            ...gameData,
                            playerInfo: updatedPlayers,
                            startWithTickets: 1,
                            ticketTheme: {
                                ticketText: '#140d99',
                                backgroundColor: '#f9ecf9',
                                borderColor: '#602488',
                                selectedCellBackgroundColor: 'red',
                            },
                            calledNumbers: [],
                            winnersDetails: [], // Clear winners as well, if applicable
                            dividends: [],
                            dividendObjectArray: dividendObjectArray,
                            dividendsWiseWinners: [], // Reset dividends-wise winners
                            groupedWinnersByDividendAndSequence: {},
                            isTicketGenerated: false,
                            isDividendApproveAlert: false,
                            isBoardTouchOn: false,
                            isRunning: false,
                            roundCount: 0,
                            ticketSearchBoxValue: '',
                            isGameCompleted: false
                        };

                        // Dispatch the updated game data to Redux
                        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
                        setRerender(!rerender);
                    },
                    style: "destructive",
                },
            ]
        );
    };



    const handlePlayerActivation = (playerId) => {
        // Update the specific player's tickets
        const updatedPlayers = players.map(player => {
            if (player?.id === playerId) {
                return {
                    ...player,
                    isActivePlayer: false, // Change to false or toggle as needed
                    tickets: player?.tickets?.map(ticket => ({
                        ...ticket,
                        isActiveTicket: false, // Set all tickets as inactive
                    })),
                };
            }
            return player;
        });

        // Update the entire game data if there's a change
        const updatedGameData = { ...gameData, playerInfo: updatedPlayers };
        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
        setRerender(!rerender);
    };

    const handlePlayerActivationWarning = (playerName, playerId) => {
        Alert.alert(
            "Delete Player?",
            `Do you want to delete ticket of ${playerName}?`,
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    onPress: () => {
                        handlePlayerActivation(playerId);
                        setOpenPlayerTicketIncrementBox();
                    },
                    style: "destructive",
                },
            ]
        );
    }



    const handleNextRound = () => {

        const updatedPlayers = gameData?.playerInfo?.map((player) => ({
            ...player,
            tickets: player.tickets.map((ticket) => ({
                ...ticket,
                marked: Array.from({ length: 3 }, () => Array(9).fill(false)), // Resetting marked array to 3x9 false
            })),
        }));


        const updatedGameData = {
            ...gameData,
            playerInfo: updatedPlayers,
            calledNumbers: [],
            winnersDetails: [],
            dividendsWiseWinners: [],
            groupedWinnersByDividendAndSequence: {},
            isTicketGenerated: true,
            isDividendApproveAlert: false,
            isBoardTouchOn: false,
            isRunning: false,
            roundCount: gameData.roundCount + 1,
            isGameCompleted: false
        };

        // Dispatch the updated game data to Redux
        dispatch(updateGame({ gameKey, gameData: updatedGameData }));
    };


    const handleNextRoundAlert = () => {
        Alert.alert(
            `Play Round ${gameData.roundCount + 1} with same tickets?`,
            `All player's existing tickets will remain same. You don't need to regenerate and re-distribute them again.`,
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: `Yes, Start Round ${gameData.roundCount + 1}`,
                    onPress: () => {
                        handleNextRound();
                    },
                    style: "destructive",
                },
            ]
        );
    }








    // console.log("game data information", gameData?.playerInfo);
    // console.log("game data information", gameData?.playerInfo?.reduce((sum, player) => sum + player.tickets.length, 0));

    return (
        <View style={{
            flexGrow: 1,
            padding: 20,
            backgroundColor: '#000033',
            justifyContent: 'space-between'
        }}>
            <View style={{ height: windowHeight * .90 }}>
                {
                    gameData?.playerInfo?.reduce((sum, player) => sum + player?.tickets.length, 0) != 0 ?

                        <View style={{ backgroundColor: '#fff', height: gameData?.dividends.length > 0 ? '28%' : '23%' }}>
                            <Text style={{ textTransform: 'uppercase', marginTop: 10, textAlign: 'center', fontSize: 19, color: '#004080' }}>{gameKey} {gameData.roundCount > 0 && "Round" + gameData.roundCount}</Text>
                            <View style={{ alignItems: 'center', marginTop: 6, }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('TicketTheme', { gameKey })}
                                    style={{
                                        alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff8080',
                                        height: 40, width: "50%", borderRadius: 4
                                    }}>
                                    <Text style={{ fontWeight: '600' }}>Change Ticket Theme</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 6, alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                                <Text style={{ color: '#660066', marginLeft: 15 }}>{`${gameData.playerInfo.length} Players`}</Text>
                                <Text style={{ color: 'green', marginRight: 15 }}>{`${gameData.playerInfo.reduce((sum, player) => sum + Number(player?.ticketCount), 0)} Tickets`}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 6, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Branding', { gameKey: gameKey })}
                                    style={{
                                        alignItems: 'center', justifyContent: 'center', backgroundColor: '#006600',
                                        height: 36, width: '30%', borderRadius: 4
                                    }}>
                                    <Text style={{ color: '#fff', fontWeight: '600' }}>Branding</Text>
                                </TouchableOpacity>

                                {
                                    !gameData.isGameCompleted &&

                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('AutoVerifyHomeScreen', { gameKey: gameKey })}
                                        style={{
                                            marginLeft: 5,
                                            alignItems: 'center', justifyContent: 'center', backgroundColor: '#000033',
                                            height: 36, width: '30%', borderRadius: 4
                                        }}>
                                        <Text style={{ color: '#ffcc00', fontWeight: '600' }}>Auto Verify</Text>
                                    </TouchableOpacity>
                                }

                                <TouchableOpacity
                                    onPress={resetGame}
                                    style={{
                                        marginLeft: 5,
                                        alignItems: 'center', justifyContent: 'center', backgroundColor: '#862d86',
                                        height: 36, width: '30%', borderRadius: 4
                                    }}>
                                    <Text style={{ color: '#fff', fontWeight: '600' }}>Reset Game</Text>
                                </TouchableOpacity>

                                {
                                    gameData.isGameCompleted &&

                                    <TouchableOpacity
                                        onPress={handleNextRoundAlert}
                                        style={{
                                            marginLeft: 5,
                                            alignItems: 'center', justifyContent: 'center', backgroundColor: '#000033',
                                            height: 36, width: '30%', borderRadius: 4
                                        }}>
                                        <Text style={{ color: '#ffcc00', fontWeight: '600' }}>Next Round</Text>
                                    </TouchableOpacity>
                                }

                            </View>
                            {
                                gameData?.dividends.length > 0 &&
                                <TouchableOpacity
                                    onPress={() => setDividentPrizeModalVisible(true)}
                                    style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10, color: 'green', fontWeight: '600' }}>Auto Claim Verification </Text>
                                    <View style={{ marginTop: 12, marginLeft: 10 }}><Ionicons name="toggle" size={26} color="green" /></View>
                                </TouchableOpacity>
                            }
                        </View>
                        :
                        <View style={{ backgroundColor: '#fff', height: gameData?.dividends.length > 0 ? '28%' : '23%' }}>
                            <Text style={{ textTransform: 'uppercase', marginTop: 10, textAlign: 'center', fontSize: 16, color: '#004080' }}>{gameKey}</Text>

                            <View style={{ flexDirection: 'row', marginTop: 6, alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                                <Text style={{ color: '#660066', marginLeft: 15 }}>{`${gameData.playerInfo.length} Players`}</Text>
                                <Text style={{ color: 'green', marginRight: 15 }}>{`${players.reduce((sum, player) => sum + Number(player?.ticketCount), 0)} Tickets`}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 6, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Branding', { gameKey: gameKey })}
                                    style={{
                                        alignItems: 'center', justifyContent: 'center', backgroundColor: '#006600',
                                        height: 36, width: '30%', borderRadius: 4
                                    }}>
                                    <Text style={{ color: '#fff', fontWeight: '600' }}>Branding</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('AutoVerifyHomeScreen', { gameKey: gameKey })}
                                    style={{
                                        marginLeft: 5,
                                        alignItems: 'center', justifyContent: 'center', backgroundColor: '#000033',
                                        height: 36, width: '30%', borderRadius: 4
                                    }}>
                                    <Text style={{ color: '#ffcc00', fontWeight: '600' }}>Auto Verify</Text>
                                </TouchableOpacity>
                                {players.length != 0 &&
                                    <TouchableOpacity
                                        onPress={deleteAllPlayers}
                                        style={{
                                            marginLeft: 5,
                                            alignItems: 'center', justifyContent: 'center', backgroundColor: '#862d86',
                                            height: 36, width: '30%', borderRadius: 4
                                        }}>
                                        <Text style={{ color: '#fff', fontWeight: '600' }}>Delete Players</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                    <View >
                                        <Text style={{ color: '#000080', fontSize: 15, fontWeight: '500', fontStyle: 'italic' }}>Start With Tickets</Text>
                                    </View>
                                    {/* {assignTicketsVisible && ( */}
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginVertical: 5,
                                    }}>
                                        <TouchableOpacity onPress={decrementGlobalTicketCount}>
                                            <Text style={styles.ticketControlButton}><Feather name="minus-circle" size={24} color="#000080" /></Text>
                                        </TouchableOpacity>
                                        <Text style={{ color: '#000080', fontSize: 15, fontWeight: '500', }}>{globalTicketCount}</Text>
                                        <TouchableOpacity onPress={incrementGlobalTicketCount}>
                                            <Text style={styles.ticketControlButton}><Feather name="plus-circle" size={24} color="#000080" /></Text>
                                        </TouchableOpacity>
                                        {/* <Button title="Confirm" onPress={assignGlobalTickets} /> */}
                                    </View>
                                    {/* )} */}
                                </View>
                            </View>
                            {
                                gameData?.dividends.length > 0 &&
                                <TouchableOpacity
                                    onPress={() => setDividentPrizeModalVisible(true)}
                                    style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10, color: 'green', fontWeight: '600' }}>Auto Claim Verification </Text>
                                    <View style={{ marginTop: 12, marginLeft: 10 }}><Ionicons name="toggle" size={26} color="green" /></View>
                                </TouchableOpacity>
                            }

                        </View>
                }



                <View style={{ height: gameData?.dividends.length > 0 ? '71%' : '76%' }}>
                    <FlatList
                        data={players}
                        keyExtractor={(item) => item?.id?.toString()}
                        renderItem={({ item, index }) => (
                            <View style={{
                                backgroundColor: '#f9f9f9',
                                borderRadius: 6,
                                paddingVertical: 5,
                                paddingHorizontal: 10,
                                marginTop: 10,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                shadowRadius: 4,
                                elevation: 2,

                            }}>
                                < TouchableOpacity
                                    onPress={() => navigation.navigate('ViewTicketScreen', { selectedPlayerId: item?.id, gameKey: gameKey })}
                                    style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ width: '83%', marginRight: '2%' }}>
                                        {/* <TouchableOpacity onPress={() => openTicketModal(item)}> */}
                                        <Text style={{ textAlign: 'left', fontWeight: '400', color: '#000080', fontSize: 19, textDecorationLine: item?.isActivePlayer ? 'none' : 'line-through' }}>{index + 1}. {item?.name}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            {item?.tickets.length > 0 ?
                                                <Text style={{ marginTop: 5, color: 'green', fontStyle: 'italic', fontSize: 17 }}>{item?.ticketCount} Tickets({item?.tickets[0]?.serialNumber}-{item?.tickets[item?.tickets.length - 1]?.serialNumber}) </Text> :
                                                <Text style={{ marginTop: 5, color: 'red', fontStyle: 'italic', fontSize: 17 }}>0 Tickets generated</Text>
                                            }
                                        </View>
                                    </View>
                                    <View>
                                        {!(openPlayerTicketIncrementBox === index) && (item?.isActivePlayer ?
                                            <TouchableOpacity
                                                style={{ flexDirection: 'row', alignItems: 'center' }}
                                                onPress={() => setOpenPlayerTicketIncrementBox(index)}>
                                                <Text style={{ fontWeight: '400', fontSize: 19, color: '#000080', }}>{item?.ticketCount}</Text>
                                                <View>
                                                    <Text style={{ marginLeft: 10 }}><FontAwesome6 name="pen" size={18} color="#666666" /></Text>
                                                </View>
                                            </TouchableOpacity> :
                                            <Text style={{ color: 'red', marginRight: 5 }}>Not Active</Text>
                                        )
                                        }
                                    </View>
                                </TouchableOpacity>

                                {openPlayerTicketIncrementBox === index && (
                                    gameData?.playerInfo?.reduce((sum, player) => sum + player?.tickets.length, 0) != 0 ?
                                        <View style={{
                                            paddingVertical: 10,
                                            backgroundColor: '#cce6ff',
                                            flexDirection: 'row',

                                        }}>
                                            <View style={{ width: '33.33%' }}></View>
                                            <View style={{
                                                width: '33.33%',
                                            }}>

                                            </View>
                                            <View style={{ width: '33.33%', alignItems: 'flex-end' }}>
                                                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => handlePlayerActivationWarning(item?.name, item?.id)}>
                                                    <Text><MaterialIcons name="delete" size={28} color="red" /></Text>
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                        :
                                        <View style={{
                                            paddingVertical: 10,
                                            backgroundColor: '#cce6ff',
                                            flexDirection: 'row',

                                        }}>
                                            <View style={{ width: '33.33%' }}></View>
                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '33.33%',
                                            }}>
                                                <TouchableOpacity onPress={() => decrementPlayerTicket(item?.id)}>
                                                    <Text style={styles.ticketControlButton}><Feather name="minus-circle" size={24} color="#000080" /></Text>
                                                </TouchableOpacity>
                                                <Text style={{ color: '#000080', fontSize: 15, fontWeight: '500', }}>{item?.ticketCount}</Text>
                                                <TouchableOpacity onPress={() => incrementPlayerTicket(item?.id)}>
                                                    <Text style={styles.ticketControlButton}><Feather name="plus-circle" size={24} color="#000080" /></Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ width: '33.33%', alignItems: 'flex-end' }}>
                                                {item?.ticketCount == 0 ?
                                                    <TouchableOpacity style={{ marginRight: 10 }} onPress={() => deletePlayer(item?.id)}>
                                                        <Text ><MaterialIcons name="delete" size={28} color="red" /></Text>
                                                    </TouchableOpacity>
                                                    :
                                                    <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setOpenPlayerTicketIncrementBox("")}>
                                                        <Text style={styles.ticketControlButton}><MaterialCommunityIcons name="checkbox-marked-circle" size={30} color="black" /></Text>
                                                    </TouchableOpacity>
                                                }
                                            </View>

                                        </View>
                                )
                                }
                            </View>
                        )}
                        contentContainerStyle={{ paddingBottom: 50, marginBottom: 20 }}
                    />
                </View>

            </View>
            <View>

                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    {
                        !gameData.isRunning && !gameData.roundCount > 0 && (<TouchableOpacity
                            onPress={openAddPlayerModal}
                            style={{
                                height: 45, width: '35%', backgroundColor: "#ffcc00",
                                alignItems: 'center', justifyContent: 'center', borderRadius: 5
                            }}>
                            <Text style={{ fontWeight: '600', fontSize: 14 }}><Ionicons name="person-add" size={14} color="black" />  Add Player</Text>
                        </TouchableOpacity>)
                    }

                    {players.length != 0 && (

                        players.reduce((sum, player) => sum + player?.tickets.length, 0) == 0 ?
                            (
                                <TouchableOpacity
                                    onPress={generateTickets}
                                    style={{
                                        marginLeft: 10, height: 45, width: '40%', backgroundColor: "#ff8080",
                                        alignItems: 'center', justifyContent: 'center', borderRadius: 5
                                    }}>
                                    <Text style={{ fontWeight: '600', fontSize: 14 }}>Generate Tickets</Text>
                                </TouchableOpacity>
                            )
                            :
                            (
                                gameData.isRunning ? <TouchableOpacity
                                    onPress={() => navigation.navigate('PlaySection', { gameKey })}
                                    style={{
                                        marginLeft: 10, height: 45, width: '55%', backgroundColor: "#ff8080",
                                        alignItems: 'center', justifyContent: 'center', borderRadius: 5
                                    }}>
                                    <Text style={{ fontWeight: '600', fontSize: 14 }}>Resume Game</Text>
                                </TouchableOpacity> :
                                    <TouchableOpacity
                                        onPress={startGame}
                                        style={{
                                            marginLeft: 10, height: 45, width: '35%', backgroundColor: "#ff8080",
                                            alignItems: 'center', justifyContent: 'center', borderRadius: 5
                                        }}>
                                        <Text style={{ fontWeight: '600', fontSize: 14 }}>Start Game</Text>
                                    </TouchableOpacity>


                                /* <TouchableOpacity
                                        onPress={generateTickets}
                                        style={{
                                            marginLeft: 10, height: 40, width: 110, backgroundColor: "#00802b",
                                            alignItems: 'center', justifyContent: 'center', borderRadius: 5
                                        }}>
                                        <Text style={{ fontWeight: '600', fontSize: 14, color: '#fff' }}><MaterialCommunityIcons name="share" size={15} color="#fff" />Share Links</Text>
                                    </TouchableOpacity> */

                            )
                    )
                    }
                </View>
            </View>

            <Modal
                visible={addPlayerModalVisible}
                animationType="slide"
                onRequestClose={closeAddPlayerModal}
            >
                <View style={{
                    flex: 1,
                    padding: 20,
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                    <View style={{
                        height: gameData?.playerInfo?.reduce((sum, player) => sum + player?.tickets.length, 0) != 0 ? 370 : 300,

                        backgroundColor: '#fff', paddingHorizontal: 15, paddingTop: 15,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '600',
                            marginBottom: 20,
                            textAlign: 'center',
                            color: 'red'
                        }}>Add Player</Text>
                        {
                            gameData?.playerInfo?.reduce((sum, player) => sum + player?.tickets.length, 0) != 0 && (
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ color: 'black', fontWeight: '700', fontSize: 16, marginBottom: 10 }}>How Many Tickets?</Text>
                                    <TextInput
                                        style={{

                                            backgroundColor: '#f2f2f2',
                                            borderColor: 'black',
                                            height: 50,
                                            width: 50,
                                            borderWidth: 2,
                                            marginBottom: 10,
                                            paddingHorizontal: 10,
                                            paddingTop: 10,
                                            fontSize: 26,
                                            lineHeight: 30, // Increases the line height, making the cursor appear taller
                                        }}
                                        keyboardType='numeric'
                                        placeholder='00'
                                        placeholderTextColor="#595959"
                                        selectionColor="black"  // Changes the cursor color to black
                                        value={tktQuantAfterTktGeneratin}
                                        onChangeText={setTktQuantAfterTktGeneratin}
                                    />
                                    {!(tktQuantAfterTktGeneratin > 0 && tktQuantAfterTktGeneratin <= 36) && <Text style={{ color: 'red' }}>Ticket quantity should be 1 to 36</Text>}
                                </View>
                            )
                        }

                        <Text style={{ marginVertical: 10, fontWeight: '600', color: '#004d99', textAlign: 'center' }}>Enter Player Name</Text>

                        <TextInput
                            style={{
                                height: 55,
                                fontSize: 20,
                                backgroundColor: '#f2f2f2',
                                borderColor: 'black',
                                borderRadius: 15,
                                borderWidth: 2,
                                marginBottom: 10,
                                paddingHorizontal: 10,
                            }}
                            placeholder="Enter Player Name"
                            value={newPlayerName}
                            onChangeText={(name) => { setNewPlayerName(name); setError(false) }}
                        />
                        {/* {
                            gameData?.playerInfo?.reduce((sum, player) => sum + player.tickets.length, 0) != 0 ?
                                <Button title="Submit" onPress={addPlayerSubsequent} />
                                :
                                <Button title="Submit" onPress={addPlayer} />
                        }

                        <Button title="Close" onPress={closeAddPlayerModal} /> */}

                        {error ? <Text style={{ color: 'red' }}>Name {newPlayerName} Already Exist. Please Enter Different Name</Text> : null}
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 50 }}>
                            <TouchableOpacity
                                onPress={closeAddPlayerModal}
                                style={{ height: 40, width: 120, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderWidth: .5, color: '#666666' }}>
                                <Text style={{ color: 'red' }}>EXIT</Text>
                            </TouchableOpacity>

                            {
                                gameData?.playerInfo?.reduce((sum, player) => sum + player?.tickets.length, 0) != 0 ?
                                    <TouchableOpacity
                                        onPress={addPlayerSubsequent}
                                        style={{
                                            marginLeft: 10,
                                            height: 40, width: 120,
                                            backgroundColor: '#ffcc00', alignItems: 'center', justifyContent: 'center',
                                        }}>
                                        <Text style={{ color: '#666666' }}>CREATE</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={addPlayer}
                                        style={{
                                            marginLeft: 10,
                                            height: 40, width: 120,
                                            backgroundColor: '#ffcc00', alignItems: 'center', justifyContent: 'center',
                                        }}>
                                        <Text style={{ color: '#666666' }}>CREATE</Text>
                                    </TouchableOpacity>
                            }
                        </View>




                    </View>
                </View>
            </Modal>

            <DividendsPrize
                gameKey={gameKey}
                visible={DividentPrizeModalVisible}
                onClose={() => {
                    setDividentPrizeModalVisible(false);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },



    ticketControlButton: {
        marginHorizontal: 7,
    },
    playerTicketCount: {
        fontSize: 20,
    },

    modalContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 8,
        marginVertical: 10,
        width: '100%',
    },
    ticketContainer: {
        backgroundColor: '#f9f9f9',
        borderRadius: 6,
        padding: 10,
        marginVertical: 5,
    },
    ticketText: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default PlayerManager;
