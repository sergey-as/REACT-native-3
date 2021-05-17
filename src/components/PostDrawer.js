import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity, FlatList} from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import TemplateComponent from "./TemplateComponent";
import {PostsComponent} from "./PostsComponent";

let Drawer = createDrawerNavigator();

const PostDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Posts" options={{title: 'posts'}} component={PostsComponent} />
            <Drawer.Screen name="Template"  options={{title: 'template'}} component={TemplateComponent} />
            {/*<Drawer.Screen name="PostsComponent" component={PostsComponent} />*/}
            {/*<Drawer.Screen name="TemplateComponent" component={TemplateComponent} />*/}
        </Drawer.Navigator>
    );
};

export default PostDrawer;

const styles = StyleSheet.create({});
