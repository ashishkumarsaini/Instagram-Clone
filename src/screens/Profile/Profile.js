import React from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const Profile = () => {
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 15, alignItems: 'center', justifyContent: 'space-between'}}>
                <Image
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                    source={{
                        uri: 'https://source.unsplash.com/random/350x350',
                    }}
                />
               <View>
                   <Text style={{ textAlign: 'center', fontSize: 15 }}>100</Text>
                   <Text style={{ textAlign: 'center', fontSize: 15 }}>POSTS</Text>
               </View>
               <View>
                   <Text style={{ textAlign: 'center', fontSize: 15 }}>100</Text>
                   <Text style={{ textAlign: 'center', fontSize: 15 }}>FOLLOWERS</Text>
               </View>
               <View>
                   <Text style={{ textAlign: 'center', fontSize: 15 }}>100</Text>
                   <Text style={{ textAlign: 'center', fontSize: 15 }}>FOLLOWING</Text>
               </View>
            </View>
            <View style={{ marginHorizontal: 20, marginBottom: 15 }}>
                <Text style={{ fontSize: 16 }}>Ashish Saini</Text>
                <TouchableOpacity style={{ backgroundColor: '#fff', padding: 7, borderWidth: 1, borderRadius: 5, marginVertical: 7 }}>
                    <Text style={{ textAlign: 'center', fontSize: 15 }}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 20, marginBottom: 15 }}>
                <Text style={{ fontSize: 16 }}>Story Highlights</Text>
                <Text style={{ fontSize: 15 }}>Keep your favorite story on your profile.</Text>
                <View style={{ flexDirection : 'row', marginVertical: 10 }}>
                    <View style={{ height: 70, width: 70, marginRight: 10, borderRadius: 50 , backgroundColor: '#F0F0F0'}}></View>
                    <View style={{ height: 70, width: 70, marginRight: 10, borderRadius: 50 , backgroundColor: '#F0F0F0'}}></View>
                    <View style={{ height: 70, width: 70, marginRight: 10, borderRadius: 50 , backgroundColor: '#F0F0F0'}}></View>
                    <View style={{ height: 70, width: 70, marginRight: 10, borderRadius: 50 , backgroundColor: '#F0F0F0'}}></View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' , flexWrap: 'wrap' }}>
                {[1,2,3,4,5,6,7,8,9,10].map((val)=>(
                    <Image
                        key={val}
                        style={{ width: '33.33%', height: 130, borderWidth: 1, borderColor: '#fff' }}
                        source={{ uri: 'https://source.unsplash.com/random/350x350' }}
                    />
                ))}

            </View>
        </ScrollView>
    );
};

export default Profile;
