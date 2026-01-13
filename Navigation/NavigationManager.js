import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlayerManager from '../Screens/PlayerManager';
import PlaySection from '../Screens/PlaySection';
import CreateGame from '../Screens/CreateGame';
import HomeScreen from '../Screens/HomeScreen';
import CustomHeader from '../Components/CustomHeader';
import AutoVerifyHomeScreen from '../Screens/AutoVerifyHomeScreen';
import DividendsHomeScreen from '../Screens/DividendsHomeScreen';
import ViewTicketScreen from '../Screens/ViewTicketScreen';
import Branding from '../Screens/Branding';
import TicketTheme from '../Screens/TicketTheme';

const Stack = createStackNavigator();
const NavigationManager = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    cardStyleInterpolator: ({ current: { progress } }) => ({
                        cardStyle: {
                            opacity: progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1],
                            }),
                            transform: [
                                {
                                    translateX: progress.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1000, 0],
                                    }),
                                },
                            ],
                        },
                    }),
                }}

                initialRouteName="HomeScreen">
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        header: () => <CustomHeader title={"Tambola Book"} />
                    }}
                />

                <Stack.Screen
                    name="CreateGame"
                    component={CreateGame}
                    options={{
                        title: 'Manage Players',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="PlayerManager"
                    component={PlayerManager}
                    options={{
                        title: 'Manage Players',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="PlaySection"
                    component={PlaySection}
                    options={{
                        title: 'Play Section',
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="AutoVerifyHomeScreen"
                    component={AutoVerifyHomeScreen}
                    options={{
                        title: 'Auto Verify',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="DividendsHomeScreen"
                    component={DividendsHomeScreen}
                    options={{
                        title: 'Dividends Home Screen',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ViewTicketScreen"
                    component={ViewTicketScreen}
                    options={{
                        title: 'Dividends Home Screen',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Branding"
                    component={Branding}
                    options={{
                        title: 'Dividends Home Screen',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="TicketTheme"
                    component={TicketTheme}
                    options={{
                        title: 'Dividends Home Screen',
                        headerShown: false,
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationManager;
