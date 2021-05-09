import React from 'react';
import {View, Text, Button, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

const UserComponent = (props) => {
    const {item} = props;

    return <View style={[styles.box]}>
        <Text>name: {item.name}</Text>
        <Text>email: {item.email}</Text>
    </View>;
};

export default UserComponent;

const styles = StyleSheet.create({
    box: {
        height: 100,
        backgroundColor: 'silver',
        marginBottom: 3
    }
});
