import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Navigation from './config/Navigation'



EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#ffff',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray: '#F0F0F0',
    $darkText: '#343434',
})


export default () => <Navigation />