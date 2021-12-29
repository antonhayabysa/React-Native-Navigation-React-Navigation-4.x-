import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


const AudiosScreen = ({navigation}) => {
    const toggleMenu = () => {
        navigation.toggleDrawer()
    }

    return (
        <View style={styles.container}>
            <Text>Еще</Text>
            <Button
                title="Музыка"
                onPress={toggleMenu}
            />
        </View>
    )
}

export default AudiosScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
