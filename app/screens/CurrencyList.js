import React, { Component } from 'react'
import { FlatList, View, StatusBar } from 'react-native';

import {ListItem, Separator} from '../components/List'
import Navigation from '../config/Navigation';
import currencies from '../data/currencies';

//const TEMP_CURRENT_CURRENCY = 'USD'

export default ({navigation, route = {} }) => {

    const params = route.params || {}
    const { activeCurrency } = params;
    handlePress = () => {
        navigation.pop();
    }

    
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle='default' translucent={false} />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (
                        <ListItem 
                            text={item}
                            selected={item === activeCurrency}
                            onPress={this.handlePress}
                            
                        />
                    )}
                    ItemSeparatorComponent={Separator}
                    keyExtractor={(item) => item}
                    
                />
                
            </View>

        )
    }

