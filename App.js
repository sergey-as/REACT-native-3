import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getUsers} from "./src/api/API";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {UsersComponent, UserDetailsComponent, PostsComponent} from "./src/components";

let StackNavigator = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator>
                <StackNavigator.Screen name={'Users'} component={UsersComponent}/>
                <StackNavigator.Screen name={'Posts'} component={PostsComponent}/>
                <StackNavigator.Screen name={'User Details'} component={UserDetailsComponent}/>
            </StackNavigator.Navigator>
        </NavigationContainer>

    )
        ;
}

const styles = StyleSheet.create({});
