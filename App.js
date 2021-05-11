import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getUsers} from "./src/api/API";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {UsersComponent, UserDetailsComponent, PostsComponent} from "./src/components";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

// let StackNavigator = createStackNavigator();
let BottomTabNavigator = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            {/*<StackNavigator.Navigator>*/}
            {/*    <StackNavigator.Screen name={'Users'} component={UsersComponent}/>*/}
            {/*    <StackNavigator.Screen name={'Posts'} component={PostsComponent}/>*/}
            {/*    <StackNavigator.Screen name={'User Details'} component={UserDetailsComponent}/>*/}
            {/*</StackNavigator.Navigator>*/}

            // 25:00
            <BottomTabNavigator.Navigator tabBarOptions={{tabStyle:{justifyContent: 'center', alignItems: 'center'}}}>
                <BottomTabNavigator.Screen name={'Users'} component={UsersComponent}/>
                <BottomTabNavigator.Screen name={'Posts'} component={PostsComponent}/>
            </BottomTabNavigator.Navigator>

        </NavigationContainer>

    )
        ;
}

const styles = StyleSheet.create({});
