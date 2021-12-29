import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


const GroupsScreen = ({navigation}) => {
    const toggleMenu = () => {
        navigation.toggleDrawer()
    }

    return (
        <View style={styles.container}>
            <Text>Еще</Text>
            <Button
                title="Сообщества"
                onPress={toggleMenu}
            />
        </View>
    )
}

export default GroupsScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
