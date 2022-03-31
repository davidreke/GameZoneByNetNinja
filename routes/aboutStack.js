import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/About'
import ReviewDetails from '../screens/ReviewDetails';

const screens={
    About:{
        screen: About,
        navigationOptions:{
            title: 'About GameZone',
        }
    },
    
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor: '#444',
        headerStyle:{
            backgroundColor: '#eee',
            height: 60,
        }
    }
})

export default AboutStack