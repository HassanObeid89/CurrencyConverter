import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import { View } from 'react-native'



const Container = ({ children }) => (
    <View style={styles.container}>
        {children}
    </View>
    
)

Container.propTypes = {
    children: PropTypes.any
};

export default Container;