import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';

const Story = ({ setOpenStory }) => {
    useEffect(() => {
        let timeout = setTimeout(() => {
            setOpenStory(false);
        }, 2000);
        return () => {
            clearTimeout(timeout);
        }
    }, []);

    return (
        <View style={{ paddingVertical: 20, backgroundColor: '#000', flex: 1 }}>
            <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    style={{ width: 30, height: 30, borderRadius: 50, marginRight: 5 }}
                    source={{
                        uri: 'https://source.unsplash.com/random/350x350',
                    }}
                />
                <Text style={{ color: '#fff', fontSize: 17 }}>ashish_saini</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    style={{ width: '100%', height: 600 }}
                    source={{
                        uri: 'https://source.unsplash.com/random/350x350',
                    }}
                />
            </View>
        </View>
    )
}

export default Story;