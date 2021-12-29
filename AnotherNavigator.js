import { createStackNavigator } from "react-navigation-stack";
import { createDropdownNavigator }  from "react-navigation-drawr"

import FriedsNavigation from "./FriedsNavigation";

import AnotherScreen from '../screens/AnotherScreen';
import GroupsScreen from  '../screens/GroupsScreen';
import AudiosScreen from  '../screens/AudiosScreen';
import Friend from "../components/Friend";


const _AnotherNavigator = createStackNavigator({
  Another: {
      screen: AnotherScreen,
      navigationOptions: {
          title: 'Еще'
      }
  }
})


const _GroupsNavigator = createStackNavigator({
    Another: {
        Groups: GroupsScreen,
        navigationOptions: {
            title: 'Сообщества'
        }
    }
})

const _AudiosNavigator = createStackNavigator({
    Another: {
        screen: AudiosScreen,
        navigationOptions: {
            title: 'Музыка'
        }
    }
})


const AnotherNavigator = createStackNavigator({
    Another: {
        screen: _AudiosNavigator,
        navigationOptions: {
            title: 'Еще'
        }
    },
    Friend: {
        screen: FriedsNavigation,
        navigationOptions: {
            title: 'Друзья'
        }
    },
    Groups: {
        screen: _GroupsNavigator,
        navigationOptions: {
            title: 'Сообщества'
        }
    },
    Audios: {
        screen: _AudiosNavigator,
        navigationOptions: {
            title: 'Музыка'
        }
    }
})

export default  AnotherNavigator;
