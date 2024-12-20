import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.forText}>Home Screen</Text>
            <Button onPress={() => navigation.navigate("Counter")}
            title="Counter"/>
         </View>
    );
};
const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2c3e50',
    },
    forText: {
        fontSize:50,
        color:'yellow',
    },
});

export default HomeScreen;