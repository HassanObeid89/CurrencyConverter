import React, {Component} from 'react';

import { View, StatusBar } from 'react-native'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'




class Home extends Component {

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle='light-content' />
                <Logo />
            </Container>
        )
    }
}

export default Home;