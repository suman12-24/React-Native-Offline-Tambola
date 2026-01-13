// ScreenshotShare.js
import React, { useImperativeHandle, useRef, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import Share from 'react-native-share';
import { useSelector } from 'react-redux';

const ScreenshotShare = React.forwardRef(({ tickets, gameId, playerName, brandingName, gameKey }, ref) => {
    const games = useSelector((state) => state.game.games);
    const gameData = games[gameKey];

    const { width, height } = Dimensions.get('window');
    const refs = useRef([]);
    useImperativeHandle(ref, () => ({
        captureScreenshots: async () => {
            try {
                // Capture screenshots of each section
                const uris = await Promise.all(refs.current.map(r => captureRef(r, { format: 'png', quality: 0.8 })));
                const files = uris.map(uri => `file://${uri}`);


                // Define the WhatsApp caption
                const caption = `${playerName}, Please Find Your ${tickets.length} Tickets`;


                // Share the screenshots
                await Share.open({
                    urls: files,
                    message: caption, // WhatsApp caption here
                    type: 'image/png',
                    social: Share.Social.WHATSAPP,
                });
            } catch (error) {
                console.log("Error capturing screenshots: ", error);
            }
        }
    }));



    const renderSectionForSix = (ticketsSubset) => {
        // Group tickets into one column: 1-6
        const groupedColumns = [
            ticketsSubset.slice(0, 6)  // Tickets 1 to 6 for a single column
        ];

        return (
            <View style={{
                borderWidth: 1,
                borderColor: '#ccc',
                backgroundColor: '#262626',
                width: '80%',
                paddingBottom: 7,
            }} ref={el => refs.current.push(el)}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    {groupedColumns.map((column, colIndex) => (
                        <View key={colIndex} style={{ flex: 1, paddingHorizontal: 1 }}>
                            {column.map((ticketData, ticketIndex) => (
                                <View
                                    key={ticketIndex}
                                    style={{
                                        marginTop: ticketIndex == 0 ? 0 : 7,
                                        borderWidth: 1,
                                        backgroundColor: gameData.ticketTheme?.backgroundColor,
                                        borderColor: gameData.ticketTheme?.borderColor,
                                    }}
                                >

                                    <View style={{ width: '100%' }}>
                                        <Text style={{ textAlign: 'center', fontSize: 14, color: gameData.ticketTheme?.ticketText }}>{brandingName}</Text>
                                        <Text style={{
                                            textTransform: 'uppercase',
                                            fontSize: 13,
                                            color: gameData.ticketTheme?.ticketText,
                                            textAlign: 'center',
                                            fontWeight: '700',
                                            marginBottom: 5,
                                        }}>
                                            {playerName} - {gameId} - {String(ticketData?.serialNumber).padStart(4, '0')}
                                        </Text>
                                    </View>

                                    <View style={{ height: height * 0.09, width: '100%', borderColor: gameData.ticketTheme?.borderColor, borderWidth: 0.5 }}>
                                        {ticketData?.ticket.map((row, rowIndex) => (
                                            <View key={rowIndex} style={styles.row}>
                                                {row.map((number, colIndex) => {
                                                    const isMarked = ticketData.marked[rowIndex][colIndex];
                                                    return (
                                                        <View
                                                            key={colIndex}
                                                            style={{
                                                                borderWidth: 0.5,
                                                                borderColor: gameData.ticketTheme?.borderColor,
                                                                backgroundColor: isMarked ? 'red' : '#fff',
                                                                width: '11.18%',
                                                                height: 25,
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                            }}
                                                        >
                                                            <Text
                                                                style={[
                                                                    { fontSize: 13, fontWeight: '500' },
                                                                    { color: isMarked ? '#fff' : 'black' }
                                                                ]}
                                                            >
                                                                {number !== null ? number : ''}
                                                            </Text>
                                                        </View>
                                                    );
                                                })}
                                            </View>
                                        ))}

                                        {!ticketData?.isActiveTicket && (
                                            <View style={{ position: 'absolute', top: '20%', right: '-3%', height: height * 0.15, width: width * 0.9 }}>
                                                <View style={{
                                                    width: '99%',
                                                    height: 1.5,
                                                    marginTop: '6%',
                                                    backgroundColor: 'red',
                                                    borderWidth: 0.4,
                                                    borderColor: '#0000b3',
                                                    transform: [{ rotate: '13.5deg' }],
                                                }}></View>
                                                <View style={{
                                                    width: '99%',
                                                    borderWidth: 0.4,
                                                    borderColor: '#0000b3',
                                                    height: 1.5,
                                                    marginTop: '.5%',
                                                    backgroundColor: 'red',
                                                    transform: [{ rotate: '167deg' }],
                                                }}></View>
                                            </View>
                                        )}
                                    </View>

                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </View>
        );
    };


    const renderSectionForTwelve = (ticketsSubset) => {
        // Group tickets into two columns: 1-6 and 7-12
        const groupedColumns = [
            ticketsSubset.slice(0, 6),    // Tickets 1 to 6 for column 1
            ticketsSubset.slice(6, 12)    // Tickets 7 to 12 for column 2
        ];

        return (
            <View style={{
                borderWidth: 1,
                paddingBottom: 7,
                borderColor: '#ccc',
                backgroundColor: '#262626',
                width: '140%',
            }} ref={el => refs.current.push(el)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {groupedColumns.map((column, colIndex) => (
                        <View key={colIndex} style={{ flex: 1, paddingHorizontal: 1 }}>
                            {column.map((ticketData, ticketIndex) => (
                                <View
                                    key={ticketIndex}
                                    style={{
                                        marginTop: ticketIndex == 0 ? 0 : 7,
                                        borderWidth: 1,
                                        backgroundColor: gameData.ticketTheme?.backgroundColor,
                                        borderColor: gameData.ticketTheme?.borderColor,

                                    }}>


                                    <View style={{ width: '100%' }}>
                                        <Text style={{ textAlign: 'center', fontSize: 14, color: gameData.ticketTheme?.ticketText }}>{brandingName}</Text>
                                        <Text style={{
                                            textTransform: 'uppercase',
                                            fontSize: 13,
                                            color: gameData.ticketTheme?.ticketText,
                                            textAlign: 'center',
                                            fontWeight: '700',
                                            marginBottom: 5,
                                        }}>
                                            {playerName} - {gameId} - {String(ticketData?.serialNumber).padStart(4, '0')}
                                        </Text>
                                    </View>

                                    <View style={{ height: height * 0.09, width: '100%', borderColor: gameData.ticketTheme?.borderColor, borderWidth: 0.5 }}>
                                        {ticketData?.ticket.map((row, rowIndex) => (
                                            <View key={rowIndex} style={styles.row}>
                                                {row.map((number, colIndex) => {
                                                    const isMarked = ticketData.marked[rowIndex][colIndex];
                                                    return (
                                                        <View
                                                            key={colIndex}
                                                            style={{
                                                                borderWidth: 0.5,
                                                                borderColor: gameData.ticketTheme?.borderColor,
                                                                backgroundColor: isMarked ? 'red' : '#fff',
                                                                width: '11.18%',
                                                                height: 25,
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                            }}
                                                        >
                                                            <Text
                                                                style={[
                                                                    { fontSize: 13, fontWeight: '500' },
                                                                    { color: isMarked ? '#fff' : 'black' }
                                                                ]}
                                                            >
                                                                {number !== null ? number : ''}
                                                            </Text>
                                                        </View>
                                                    );
                                                })}
                                            </View>
                                        ))}
                                        {!ticketData?.isActiveTicket && (
                                            <View style={{ position: 'absolute', top: '0%', right: '-16%', height: height * 0.15, width: width * 0.9 }}>
                                                <View style={{
                                                    width: '91%',
                                                    height: 3,
                                                    marginTop: '8.3%',
                                                    backgroundColor: 'red',
                                                    borderWidth: 0.6,
                                                    borderColor: '#0000b3',
                                                    transform: [{ rotate: '16.5deg' }],
                                                }}></View>
                                                <View style={{
                                                    width: '91%',
                                                    borderWidth: 0.6,
                                                    borderColor: '#0000b3',
                                                    height: 3,
                                                    marginTop: '3.3%',
                                                    backgroundColor: 'red',
                                                    transform: [{ rotate: '163deg' }],
                                                }}></View>
                                            </View>
                                        )}
                                    </View>

                                </View>
                            ))}

                        </View>
                    ))}
                </View>
            </View>
        );
    };


    const renderSectionForEighteen = (ticketsSubset) => {
        // Group tickets into three columns: 1-6, 7-12, 13-18
        const groupedColumns = [
            ticketsSubset.slice(0, 6),    // Tickets 1 to 6 for column 1
            ticketsSubset.slice(6, 12),   // Tickets 7 to 12 for column 2
            ticketsSubset.slice(12, 18)   // Tickets 13 to 18 for column 3
        ];

        return (
            <View style={{
                borderWidth: 1,
                borderColor: '#ccc',
                backgroundColor: '#262626',
                width: '200%',
                paddingBottom: 7,
            }} ref={el => refs.current.push(el)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {groupedColumns.map((column, colIndex) => (
                        <View key={colIndex} style={{ flex: 1, paddingHorizontal: 1 }}>
                            {column.map((ticketData, ticketIndex) => (
                                <View
                                    key={ticketIndex}
                                    style={{
                                        marginTop: ticketIndex == 0 ? 0 : 7,
                                        borderWidth: 1,
                                        backgroundColor: gameData.ticketTheme?.backgroundColor,
                                        borderColor: gameData.ticketTheme?.borderColor,

                                    }}
                                >

                                    <View style={{ width: '100%' }}>
                                        <Text style={{ textAlign: 'center', fontSize: 14, color: gameData.ticketTheme?.ticketText }}>{brandingName}</Text>
                                        <Text style={{
                                            textTransform: 'uppercase',
                                            fontSize: 13,
                                            color: gameData.ticketTheme?.ticketText,
                                            textAlign: 'center',
                                            fontWeight: '700',
                                            marginBottom: 5,
                                        }}>
                                            {playerName} - {gameId} - {String(ticketData?.serialNumber).padStart(4, '0')}
                                        </Text>
                                    </View>


                                    <View style={{ height: height * 0.09, width: '100%', borderColor: gameData.ticketTheme?.borderColor, borderWidth: 0.5 }}>
                                        {ticketData?.ticket.map((row, rowIndex) => (
                                            <View key={rowIndex} style={styles.row}>
                                                {row.map((number, colIndex) => {
                                                    const isMarked = ticketData.marked[rowIndex][colIndex];
                                                    return (
                                                        <View
                                                            key={colIndex}
                                                            style={{
                                                                borderWidth: 0.5,
                                                                borderColor: gameData.ticketTheme?.borderColor,
                                                                backgroundColor: isMarked ? 'red' : '#fff',
                                                                width: '11.18%',
                                                                height: 25,
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                            }}
                                                        >
                                                            <Text
                                                                style={[
                                                                    { fontSize: 13, fontWeight: '500' },
                                                                    { color: isMarked ? '#fff' : 'black' }
                                                                ]}
                                                            >
                                                                {number !== null ? number : ''}
                                                            </Text>
                                                        </View>
                                                    );
                                                })}
                                            </View>
                                        ))}
                                        {!ticketData?.isActiveTicket && (
                                            <View style={{ position: 'absolute', top: '3%', right: '-15%', height: height * 0.15, width: width * 0.9 }}>
                                                <View style={{
                                                    width: '92%',
                                                    height: 3,
                                                    marginTop: '6.6%',
                                                    backgroundColor: 'red',
                                                    borderWidth: 0.6,
                                                    borderColor: '#0000b3',
                                                    transform: [{ rotate: '16.5deg' }],
                                                }}></View>
                                                <View style={{
                                                    width: '95%',
                                                    borderWidth: 0.6,
                                                    borderColor: '#0000b3',
                                                    height: 3,
                                                    marginTop: '5%',
                                                    backgroundColor: 'red',
                                                    transform: [{ rotate: '163deg' }],
                                                }}></View>
                                            </View>
                                        )}
                                    </View>


                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </View>
        );
    };

    const renderTickets = () => {

        if (tickets.length <= 6) {
            return (
                <>
                    {renderSectionForSix(tickets.slice(0, 6))}
                </>
            );
        }


        if (tickets.length > 6 && tickets.length < 12) {
            return (
                <>
                    {renderSectionForTwelve(tickets.slice(0, tickets.length))}
                </>
            );
        }

        if (tickets.length == 12) {
            return (
                <>
                    {renderSectionForTwelve(tickets.slice(0, 12))}
                </>
            );
        }

        if (tickets.length > 12 && tickets.length < 18) {
            return (
                <>
                    {renderSectionForTwelve(tickets.slice(0, 12))}
                    {renderSectionForSix(tickets.slice(12, tickets.length))}
                </>
            );
        }

        if (tickets.length == 18) {
            return (
                <>
                    {renderSectionForEighteen(tickets.slice(0, tickets.length))}
                </>
            );
        }

        if (tickets.length > 18 && tickets.length <= 24) {
            return (
                <>
                    {renderSectionForTwelve(tickets.slice(0, 12))}
                    {renderSectionForTwelve(tickets.slice(12, tickets.length))}
                </>
            );
        }

        if (tickets.length > 24 && tickets.length <= 30) {
            // If there are 36 tickets, render and share in two sets of 18
            return (
                <>
                    {renderSectionForEighteen(tickets.slice(0, 18))}
                    {renderSectionForTwelve(tickets.slice(18, tickets.length))}
                </>
            );
        }

        if (tickets.length > 30 && tickets.length <= 36) {
            // If there are 36 tickets, render and share in two sets of 18
            return (
                <>
                    {renderSectionForEighteen(tickets.slice(0, 18))}
                    {renderSectionForEighteen(tickets.slice(18, tickets.length))}
                </>
            );
        }


    };

    return (
        <ScrollView style={styles.container}>
            {renderTickets()}
        </ScrollView>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    section: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#f9f9f9',
        width: '200%',
    },
    row: {
        flexDirection: 'row',
    },
    ticketTitle: {
        fontSize: 13,
        color: '#0000b3',
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: 5,
    },
});

export default ScreenshotShare;
