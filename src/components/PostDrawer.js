import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity, FlatList} from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";

let Drawer = createDrawerNavigator();

const PostDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="PostsComponent" component={PostsComponent} />
            <Drawer.Screen name="TemplateComponent" component={TemplateComponent} />
        </Drawer.Navigator>
    );
};

export default PostDrawer;

const styles = StyleSheet.create({});
