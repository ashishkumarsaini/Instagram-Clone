import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Header = () => {
    return (
        <View
            style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}
        >
            <AntDesign name="instagram" size={32} color="black" />
            <Text style={{ fontSize: 20,  marginLeft: 10 }}>Instagram Clone</Text>
        </View>
    );
};

export default Header;
