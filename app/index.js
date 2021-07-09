import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import CurrencyList from './screens/CurrencyList'
import Home from './screens/Home'
import Navigation from './config/Navigation'
import { api } from './util/Api';


EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#ffff',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray: '#F0F0F0',
    $darkText: '#343434',
})


api('/latest?base=USD')
    .then((res) => console.log(res))
    .catch((err) => console.log('err', err));

export default () => <Navigation />