import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


const CommentScreen = ({navigation}) => {
    const goToNatification = () => {
        navigation.navigate('Notifications')
    }

    return (
        <View style={styles.container}>
            <Text>Комментарии</Text>
            <Button
                title="Уведомления"
                onPress={goToNatification}
            />
        </View>
    )
}

export default CommentScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
