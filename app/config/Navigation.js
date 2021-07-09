import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="CurrencyList" component={CurrencyList} />
    </MainStack.Navigator>
);

export default () => (
    <NavigationContainer>
        <MainStackScreen />
    </NavigationContainer>
);