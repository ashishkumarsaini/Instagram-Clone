import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import Header from './components/Header/Header';
import Dashboard from './screens/Dashboard/Dashboard';
import Profile from './screens/Profile/Profile';
import Story from "./components/Story/Story";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import { useAuth } from './helpers/firebase/auth/authContext';

const Tab = createBottomTabNavigator();

const Demo = () => {
    const [openStory, setOpenStory] = useState(false);
    if (openStory) {
        return (
            <Story setOpenStory={setOpenStory} />
        )
    }
    return (
        <>
            <Header />
            <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Dashboard">
                <Tab.Screen
                    name="Dashboard"
                    children={() => <Dashboard setOpenStory={setOpenStory} />}
                    options={{
                        tabBarLabelStyle: {
                            color: 'green',
                        },
                        tabBarIcon: ({ focused }) => focused ? <Entypo name="home" size={24} color="green" /> : <AntDesign name="home" size={24} color='black' />
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabelStyle: {
                            color: 'green',
                        },
                        tabBarIcon: ({ focused }) => focused ? <FontAwesome name="user" size={24} color="green" /> : <FontAwesome name="user-o" size={24} color="black" />
                    }}
                />
            </Tab.Navigator>
        </>
    )
}

const Stack = createNativeStackNavigator();

const CoreBrowsing = () => {
    const { currentUser } = useAuth();
    if (currentUser){
        return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
                    <Stack.Screen name="Home" component={Demo} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignIn'>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default CoreBrowsing;
