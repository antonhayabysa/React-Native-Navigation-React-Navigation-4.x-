import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';


const Friend = ({name, goToFriend}) => (
    <TouchableOpacity
        style={styles.container}
        onPress={() => goToFriend(name)}
    >
        <Text>{name}</Text>
    </TouchableOpacity>
)


const  styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            paddingVertical:20,
            borderBottomWidth: 0.7,

        }
})

export  default Friend
