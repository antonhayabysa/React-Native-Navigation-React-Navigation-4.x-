import React, {useState} from 'react';
import {FlatList} from 'react-native';
import Friend from './Friend';

const FriendList = ({friends, goToFriend}) => {

    <FlatList
        data={friends}
        renderItems={({item}) => (
            <Friend
            name={item.name}
            goToFriend={goToFriend}
            />
        )}
        keyExtractor={item => item.id}
    />
}


export default FriendList;
