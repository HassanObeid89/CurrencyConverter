import React, {Component} from 'react';

import { StatusBar, KeyboardAvoidingView } from 'react-native'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons'
import Navigation from '../config/Navigation';

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'GBP'
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '79.74'


export default ({navigation}) => {
    
        return (
            <Container>
                <StatusBar translucent={false} barStyle='light-content' />
                <KeyboardAvoidingView behavior='padding'>
                <Logo />
                <InputWithButton
                    buttonText={TEMP_BASE_CURRENCY}
                        onPress={() => navigation.push('CurrencyList')}
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType='numeric'
                        onChangeText={() => console.log('todo')}
                />
                <InputWithButton
                    buttonText={TEMP_QUOTE_CURRENCY}
                        onPress={() => navigation.push('CurrencyList')}
                    editable={false}
                    value={TEMP_QUOTE_PRICE}
                />
                </KeyboardAvoidingView>
                <ClearButton
                    text='Reverse Currencies'
                    onPress={() => console.log('todo')}
                />
            </Container>
        )
    }

