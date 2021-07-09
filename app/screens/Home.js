import React, {useState} from 'react';

import { StatusBar, KeyboardAvoidingView } from 'react-native'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons'
import Navigation from '../config/Navigation';
import { onChange } from 'react-native-reanimated';

const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '79.74'


export default ({navigation}) => {

    const [baseCurrency, setBaseCurrency] = useState('USD')
    const [quoteCurrency, setQuoteCurrency] = useState('GBP')
    const [value, setValue] = useState('100')
    
    const conversionRate = 0.89824;
    const swapCurrencies = () => {
        setBaseCurrency(quoteCurrency)
        setQuoteCurrency(baseCurrency)
    }

        return (
            <Container>
                <StatusBar translucent={false} barStyle='light-content' />
                <KeyboardAvoidingView behavior='padding'>
                <Logo />
                <InputWithButton
                    buttonText={baseCurrency}
                    onPress={() => navigation.push('CurrencyList', {
                        activeCurrency: baseCurrency,
                        onChange: (currency) => setBaseCurrency(currency)
                    })}
                    defaultValue={TEMP_BASE_PRICE}
                    value={value}
                    keyboardType='numeric'
                    onChangeText={(text) => setValue(text)}
                />
                <InputWithButton
                    buttonText={quoteCurrency}
                    onPress={() => 
                        navigation.push('CurrencyList', {
                            activeCurrency: quoteCurrency,
                            onChange: (currency) => setQuoteCurrency(currency) })
                    }
                    editable={false}
                    value={
                        value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
                    }
                />
                </KeyboardAvoidingView>
                <ClearButton
                    text='Reverse Currencies'
                    onPress={() => swapCurrencies()}
                />
            </Container>
        )
    }

