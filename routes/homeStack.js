import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header'
import React from 'react'

const screens={
    Home:{
        screen: Home,
        navigationOptions:{
            HeaderTitle: () => <Header />,
        }
    },
    ReviewDetails:{
        screen: ReviewDetails,
        navigationOptions:{
            title: 'Review Details',
        }
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor: '#444',
        headerStyle:{
            backgroundColor: '#eee',
            height: 60,
        }
    }
})

export default HomeStack;