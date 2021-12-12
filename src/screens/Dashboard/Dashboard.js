import React, { useState } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

const Dashboard = ({ setOpenStory }) => {
    const [refreshing, setRefreshing] = useState(false);
    const [imageVal, setImageVal] = useState('https://source.unsplash.com/random/350x350');

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => {
            setRefreshing(false)
        });
    }, []);

    if (refreshing){
        return null;
    }

    return (
        <ScrollView
            style={{ backgroundColor: '#fff' }}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', padding: 10, marginBottom: 10 }}>
                <View>
                    <Image
                        style={{ width: 80, height: 80, borderRadius: 50, marginRight: 10 }}
                        source={{
                            uri: imageVal,
                        }}
                    />
                    <Ionicons name="add-circle" size={26} color="green" style={{ position: 'absolute', bottom: 0, right: 0 }} />
                </View>
                {[1,2,3,5,6,7].map((val)=>(
                    <TouchableOpacity onPress={() => setOpenStory(true)} key={val} style={{ borderWidth: 2, borderColor: 'green', borderRadius: 50, padding: 3, marginRight: 10 }}>
                        <Image
                            style={{ width: 70, height: 70, borderRadius: 50 }}
                            source={{
                                uri: imageVal,
                            }}
                        />
                    </TouchableOpacity>
                ))}


            </ScrollView>
            {
                [1,2,3].map((val)=>(
                    <View style={{ marginBottom: 10 }} key={val}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5}}>
                            <Image
                                style={{ width: 30, height: 30, borderRadius: 50, marginRight: 5 }}
                                source={{
                                    uri: 'https://source.unsplash.com/random/350x350',
                                }}
                            />
                            <Text style={{ fontSize: 15 }}>ashish_saini</Text>
                        </View>
                        <Image
                            style={{ width: '100%', height: 400 }}
                            source={{
                                uri: 'https://source.unsplash.com/random/350x350',
                            }}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 5 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome5 name="heart" size={30} color="black" style={{ marginLeft: 10 }} />
                                <FontAwesome name="comment-o" size={30} color="black" style={{ marginLeft: 10 }} />
                                <Feather name="send" size={30} color="black" style={{ marginLeft: 10 }} />
                            </View>
                        </View>

                    </View>
                ))
            }
        </ScrollView>
    );
};

export default Dashboard;
