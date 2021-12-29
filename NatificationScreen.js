import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


const NatificationScreen = ({navigation}) => {
    const goToComment = () => {
        navigation.navigate('Comment')
    }

    return (
        <View style={styles.container}>
            <Text>Уведомления</Text>
            <Button
                title="Комментарии"
                onPress={goToComment}
            />
        </View>
    )
}

export default NatificationScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
