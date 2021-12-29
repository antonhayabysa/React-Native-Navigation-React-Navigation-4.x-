import React, {useState} from 'react';
import { Button} from 'react-native';
import FriendList from "../components/FriendList";

const FriendsScreen = ({navigation}) => {

    const [friends, setFriends] = useState([
        {id: '1', name: 'Anton'},
        {id: '2', name: 'Anna'},
        {id: '3', name: 'Oleg'},
        {id: '4', name: 'Sasha'}
    ])

    const goToFriend = (name) => {
        navigation.navigate('Friend', {name})
    }


    const toggleMenu = () => {
        navigation.toggleDrawer()
    }

    return (
        <>
            <FriendList
            friends={friends}
            goToFriend={goToFriend}
            />
            <Button
                title="Музыка"
                onPress={toggleMenu}
            />
        </>
    )
}

export default FriendsScreen;


