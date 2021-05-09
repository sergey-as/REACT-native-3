import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getUsers} from "./src/api/API";
import UsersComponent from "./src/components/UsersComponent";

export default function App() {
// 33:30
    return (
        <View style={styles.container}>
            <UsersComponent/>
        </View>
    );
}

const styles = StyleSheet.create({});
