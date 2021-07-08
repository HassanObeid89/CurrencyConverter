import React, {Component} from 'react';

import { View, StatusBar } from 'react-native'
import { Container } from '../components/Container'




class Home extends Component {

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle='light-content' />
            </Container>
        )
    }
}

export default Home;