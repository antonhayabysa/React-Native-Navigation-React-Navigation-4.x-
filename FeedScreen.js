import  React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const FeedScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Новости</Text>
        </View>
    )
}


export default FeedScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
