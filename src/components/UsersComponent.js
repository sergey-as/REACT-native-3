import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {getUsers} from "../api/API";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    let [users, setUsers] = useState([]);

    console.log(users);

    // async function fetchData() {
    //     let users = await getUsers();
    //     setUsers([...users]);
    // }

    useEffect(() => {
        async function fetchData() {
            let users = await getUsers();
            setUsers([...users]);
        }

        fetchData();

        return () => {
            console.log('hello');
        };
    }, []);

    return <View>
        <FlatList
            data={users}
            renderItem={
                ({item}) => {
                    return <UserComponent item={item}/>
                }}
            keyExtractor={item => '' + item.id}
        />

    </View>;
};

export default UsersComponent;

const styles = StyleSheet.create({});
