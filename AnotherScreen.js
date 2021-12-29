import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


const AnotherScreen = ({navigation}) => {
    const toggleMenu = () => {
        navigation.toggleDrawer()
    }

    return (
        <View style={styles.container}>
            <Text>Еще</Text>
            <Button
                title="Боковое меню"
                onPress={toggleMenu}
            />
        </View>
    )
}

export default AnotherScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
