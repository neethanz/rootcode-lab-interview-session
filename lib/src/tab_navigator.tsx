import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DetailsScreen from './screens/details_screen';
import ExploreScreen from './screens/explore_screen';
import HomeScreen from './screens/home_screen';

function YourLibrary() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>YourLibrary!</Text>
    </View>
  );
}

const SettingsStack = createNativeStackNavigator();

function ExploreStackScreens() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: 'black',
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Explore') {
              iconName = focused ? 'search' : 'search';
            } else if (route.name === 'YourLibrary') {
              iconName = focused ? 'spotify' : 'spotify';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#fbbc05',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreStackScreens}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="YourLibrary"
          component={YourLibrary}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
