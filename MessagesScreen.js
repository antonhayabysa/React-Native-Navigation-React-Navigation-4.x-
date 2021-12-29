import  React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const MessagesScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Сообщения</Text>
        </View>
    )
}

export default MessagesScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
