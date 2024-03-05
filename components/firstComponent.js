import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from "react-native";
import { Text, ProgressBarAndroid, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Resume() {
    const handleLinkedInPress = () => {
        Linking.openURL('https://www.linkedin.com/in/kohlaa');
    };

    const handleGithubPress = () => {
        Linking.openURL('https://github.com/Kohlaa');
    };
    // const downloadCV = () => {
    //     // const cvUrl = 'cv_url_here';
    //     // Linking.openURL(cvUrl);
    // };
    return (
        < >

            <View style={{ width: '100%', height: '20%' }}>
                <Image
                    source={require('../assets/cv_bg_img.png')}
                    style={{ width: '100%', height: '130%' }}
                />
            </View>
            <ScrollView>
                <View contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1, marginBottom: '42%' }}>

                    <View style={{
                        width: '100%',
                        height: '50%',
                        alignItems: 'center',
                    }}>
                        <Image source={require('../assets/personal.jpg')}
                            style={{ width: '45%', height: '55%', borderRadius: 100, marginBottom: '10%' }}
                        />
                        <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: '5%' }}>
                            Mohamed Kohla
                        </Text>
                        <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: '4%' }}>
                            Software developer
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={handleLinkedInPress} style={{ marginRight: 20 }}>
                                <Ionicons name="logo-linkedin" size={30} color="blue" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleGithubPress} style={{ marginRight: 20 }}>
                                <Ionicons name="logo-github" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: '3%', marginTop: '3%' }} />

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 10, marginTop: 40 }}>
                        <Text style={{ backgroundColor: 'yellow' }}>Age</Text>
                        <Text>22</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 10 }}>
                        <Text style={{ backgroundColor: 'yellow' }}>Address</Text>
                        <Text>Egypt</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 10 }}>
                        <Text style={{ backgroundColor: 'yellow' }}>bla bla bla</Text>
                        <Text>bla</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 10 }}>
                        <Text style={{ backgroundColor: 'yellow' }}>bla bla bla</Text>
                        <Text>bla</Text>
                    </View>
                    <View style={{ width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: '3%', marginTop: '3%', marginLeft: '10%' }} />
                    <Text style={{ marginLeft: '15%', marginBottom: '5%' }}>
                        Languages
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginLeft: '20%', marginRight: '20%' }}>
                        <Text >Arabic</Text>
                        <Text>100%</Text>
                    </View>
                    <ProgressBarAndroid style={{ marginLeft: '10%', marginRight: '10%' }}
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={1}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginLeft: '20%', marginRight: '20%' }}>
                        <Text >English</Text>
                        <Text>5%</Text>
                    </View>
                    <ProgressBarAndroid style={{ marginLeft: '10%', marginRight: '10%' }}
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={.3}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginLeft: '20%', marginRight: '20%' }}>
                        <Text >French</Text>
                        <Text>2.5%</Text>
                    </View>
                    <ProgressBarAndroid style={{ marginLeft: '10%', marginRight: '10%' }}
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={.2}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginLeft: '20%', marginRight: '20%' }}>
                        <Text >german</Text>
                        <Text>1.25%</Text>
                    </View>
                    <ProgressBarAndroid style={{ marginLeft: '10%', marginRight: '10%' }}
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={.1}
                    />
                    <View style={{ width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, marginTop: '10%', marginLeft: '10%' }} />


                </View>
                <Text style={{ marginLeft: '15%', marginBottom: '5%' }}>
                    Skills
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginLeft: '20%', marginRight: '20%' }}>
                    <Text >CPP</Text>
                    <Text>100%</Text>
                </View>
                <ProgressBarAndroid style={{ marginLeft: '10%', marginRight: '10%' }}
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={1}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginLeft: '20%', marginRight: '20%' }}>
                    <Text >C#</Text>
                    <Text>100%</Text>
                </View>
                <ProgressBarAndroid style={{ marginLeft: '10%', marginRight: '10%' }}
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={1}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginLeft: '20%', marginRight: '20%' }}>
                    <Text >Java</Text>
                    <Text>90%</Text>
                </View>
                <ProgressBarAndroid style={{ marginLeft: '10%', marginRight: '10%' }}
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={.9}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginLeft: '20%', marginRight: '20%' }}>
                    <Text >JS</Text>
                    <Text>1.25%</Text>
                </View>
                <ProgressBarAndroid style={{ marginLeft: '10%', marginRight: '10%' }}
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={.1}
                />
                <View style={{ width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, marginTop: '10%', marginBottom: '10%', marginLeft: '10%' }} />

                <Text style={{ marginLeft: '15%', marginBottom: '5%' }}>
                    Extra Skills
                </Text>
                <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: '20%' }}>
                    <Ionicons name="archive" size={30} color="blue" />
                    <Text style={{ marginLeft: '5%' }} >BootStrap</Text>

                </View>

                <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: '20%' }}>
                    <Ionicons name="analytics" size={30} color="blue" />
                    <Text style={{ marginLeft: '5%' }}>BootStrap</Text>

                </View>

                <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: '20%' }}>
                    <Ionicons name="accessibility" size={30} color="blue" />
                    <Text style={{ marginLeft: '5%' }} >BootStrap</Text>

                </View>

                <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: '20%' }}>
                    <Ionicons name="add-circle-outline" size={30} color="blue" />
                    <Text style={{ marginLeft: '5%' }}>BootStrap</Text>

                </View>

            </ScrollView>
        </>
    );
}
