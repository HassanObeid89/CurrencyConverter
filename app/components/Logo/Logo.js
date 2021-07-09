import React, { Component } from 'react';
import {View, Text, Keyboard, Animated, Platform} from 'react-native'
import styles from './styles'

class Logo extends Component {

    constructor(props) {
        super(props)

        this.containerImageWidth = new Animated.Value(styles.$largeContainerSize)
    }
    componentDidMount() {
        let showListener = 'keyboardWillShow'
        let hideListener = 'keyboardWillHide'
        if (Platform.OS === 'android') {
            showListener = 'keyboardDidShow'
            hideListener = 'keyboardDidHide'
        }

        this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow)
        this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide)
    }

    componentWillUnmount() {
        this.keyboardShowListener.remove()
        this.keyboardHideListener.remove()
    }

    keyboardShow = () => {
        
        Animated.parallel([

            Animated.timing(this.containerImageWidth, {
                toValue: styles.$smallContainerSize,
            })
        ]).start();
     }

    keyboardHide = () => {
        Animated.parallel([

            Animated.timing(this.containerImageWidth, {
                toValue: styles.$largeContainerSize,
            })
        ]).start();
    }

    render() {

        const containerImageStyle = [
            styles.containerImage,
            {width: this.containerImageWidth, height: this.containerImageWidth },
        ]

        return (
            <View style={styles.container}>
                <Animated.Image
                    style={containerImageStyle}
                source={require('./images/logo.png')}
                />
                <Text style={styles.text} >Currency Converter</Text>
            </View>
        )
    }
}

export default Logo;