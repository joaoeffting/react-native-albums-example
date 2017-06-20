//@flow

import React from 'react';
import { View } from 'react-native';

type Props = {
    children: {}
}

const CardSection = ({ children } : Props) => {
    const { containerStyle } = style;
    return (
        <View style={containerStyle}>{children}</View>
    );
};

const style = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default CardSection;
