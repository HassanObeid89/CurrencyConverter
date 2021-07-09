import React, {useState, useEffect} from 'react';

import { StatusBar, KeyboardAvoidingView, Alert, ActivityIndicator } from 'react-native'
import { Container, styles } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons'
import { api } from '../util/Api'

const TEMP_BASE_PRICE = '100';



export default ({navigation}) => {

    const [baseCurrency, _setBaseCurrency] = useState('USD')
    const [quoteCurrency, setQuoteCurrency] = useState('GBP')
    const [value, setValue] = useState('100')
    const [rates, setRates] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    
    

    useEffect(() => {
        const setBaseCurrency = async (currency) => {
            setIsLoading(true)

            const rates = await api(`/latest?base=${currency}`)
                .then((res) => {
                    console.log(res);
                    _setBaseCurrency(currency);
                    setRates(res.rates);
                })
                .catch((err) => {
                    Alert.alert('Sorry, something went wrong')

                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
        setBaseCurrency('USD');
        
    },[])

    const conversionRate = rates[quoteCurrency];

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

