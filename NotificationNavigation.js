import {createStackNavigator} from 'react-navigation-stack';
import { createSwitchNavigator} from "react-navigation";


import  NatificationScreen from '../screens/NatificationScreen'
import CommentScreen from "../screens/CommentScreen";


const _NatificationNavigator = createStackNavigator({
    Notifications: {
        screen: NatificationScreen,
        navigationOptions: {
            title: 'Уведомления'
        }
    }
})


const _CommentNavigator = createStackNavigator({
    Comment: {
        screen: CommentScreen,
        navigationOptions: {
            title: 'Комментарии'}
    }
})

const NotificationNavigator = createSwitchNavigator({
    Notification: _NatificationNavigator,
    Comment: _CommentNavigator

})

export  default NotificationNavigator
