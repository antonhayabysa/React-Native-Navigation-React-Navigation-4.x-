import {createStackNavigator} from "react-navigation-stack";

import FriendScreen from '../screens/FriendScreen';
import FriendsScreen from '../screens/FriendsScreen';

const FriedsNavigation = createStackNavigator({

    Friends: {
        screen: FriendsScreen,
        navigationOptions: {
            title: 'Друзья'
        }
    },
    Friend: {
        screen: FriendScreen,
        navigationOptions: ({navigation}) => ({
            title: navigation.getParam('name'),
        })
    }
})


export default FriedsNavigation
