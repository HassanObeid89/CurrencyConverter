import React, { Component } from 'react'
import { FlatList, View, StatusBar } from 'react-native';

import {ListItem, Separator} from '../components/List'
import Navigation from '../config/Navigation';
import currencies from '../data/currencies';

//const TEMP_CURRENT_CURRENCY = 'USD'

export default ({navigation, route = {} }) => {

    const params = route.params || {}
    const { activeCurrency } = params;

    const handlePress = (item) => {
        if (params.onChange) {
            params.onChange(item)
        }
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
                            onPress={() => handlePress(item)}
                            // onClick={() => handlePress(item)}
                        />
                    )}
                    ItemSeparatorComponent={Separator}
                    keyExtractor={(item) => item}
                    
                />
                
            </View>

        )
    }

