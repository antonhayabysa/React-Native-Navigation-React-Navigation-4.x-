import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator} from "react-navigation-stack";

import NotificationNavigator from '../screens/NotificationNavigator'
import AnotherNavigator from './AnotherNavigator';

import FeedScreen from '../screens/FeedScreen';
import SearchScreen from  '../screens/SearchScreen';
import MessagesScreen from  '../screens/MessagesScreen';


const _FeedNavigation = createStackNavigator({ Feed: {
        screen: FeedScreen,
        navigationOptions: {
            title: 'Новости'
        }
    }})

const _SearchNavigation = createStackNavigator({ Feed: {
        screen: SearchScreen,
        navigationOptions: {
            title: 'Поиск'
        }
    }})
const _MessagesNavigation = createStackNavigator({ Feed: {
        screen: MessagesScreen,
        navigationOptions: {
            title: 'Сообщения'
        }
    }})

const AppNavigation = createBottomTabNavigator({
    Feed: {
        screen: _FeedNavigation,
        navigationOptions: {
            title: 'Новости'
        }
    },
    Screen:{
        screen: _SearchNavigation,
        navigationOptions: {
            title: 'Поиск'
        }
    },
    Messages: {
        screen: _MessagesNavigation,
        navigationOptions: {
            title: 'Сообщения'
        }
    },
    Notification: {
        screen: NotificationNavigator,
        navigationOptions: {
            title: 'Уведомления'
        }
    },
    Another: {
        screen: AnotherNavigator,
        navigationOptions: {
            title: 'Еще'
        }
    }

}, {

    initialRouteName: 'Messages'
})


export default createAppContainer(AppNavigation)


