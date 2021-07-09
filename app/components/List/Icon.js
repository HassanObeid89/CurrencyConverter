import React from "react";
import PropTypes from 'prop-types'
import { View, Image } from "react-native";
import styles from "./styles";

const Icon = ({checkMark, visible}) => {
    const iconStyle = [styles.icon]

    if (visible) {
        iconStyle.push(styles.iconVisible);
    }

    return (<View style={iconStyle} >
        {checkMark ? <Image style={styles.checkIcon} resizeMode='contain' source={require('./images/check.png')} /> : null}
    </View>)
}


Icon.prototype = {
    checkMark: PropTypes.bool,
    visible: PropTypes.bool,
}

export default Icon;