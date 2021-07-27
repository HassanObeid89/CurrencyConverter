import React, {useState, useEffect} from 'react';

import { StatusBar, KeyboardAvoidingView, Alert, ActivityIndicator } from 'react-native'
import { Container, styles } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons'


const TEMP_BASE_PRICE = '100';



export default ({navigation}) => {

    const [baseCurrency, _setBaseCurrency] = useState('USD')
    const [quoteCurrency, setQuoteCurrency] = useState('GBP')
    const [value, setValue] = useState('100')
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({})

    const ratesURL = 'http://127.0.0.1:5000/api/rates'

    useEffect(() => {
        setTimeout (() => {
            fetch(ratesURL).then((res) => res.json())
        .then((json) => setData(json.result.rates))
        .catch((err) => alert(err))
        .finally(() => setIsLoading(false))
        }, 2500)
    },[])
  
    const conversionRate = data[quoteCurrency];

    const swapCurrencies = () => {
        _setBaseCurrency(quoteCurrency)
        setQuoteCurrency(baseCurrency)
    }

        return (
            <Container>
                <StatusBar translucent={false} barStyle='light-content' />
                <KeyboardAvoidingView behavior='padding'>
                <Logo />
                {isLoading ? (
                        <ActivityIndicator color={'#ffff'} size="large" />
                ):(
                    <>
                    <InputWithButton
                    buttonText={baseCurrency}
                    onPress={() => navigation.push('CurrencyList', {
                        activeCurrency: baseCurrency,
                        onChange: (currency) => _setBaseCurrency(currency)
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
                
                <ClearButton
                    text='Reverse Currencies'
                    onPress={() => swapCurrencies()}
                />
                </>
                )}
                            
                </KeyboardAvoidingView>
            </Container>
        )
    }

