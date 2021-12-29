import React, {useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';


const FriendScreen = ({navigation}) => (
    <View>
        <Text style={styles.textContainer}>
            Друг{navigation.getParam('name')}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default FriendScreen
