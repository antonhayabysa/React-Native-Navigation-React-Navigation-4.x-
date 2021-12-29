import  React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Поиск</Text>
        </View>
    )
}



export default SearchScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
