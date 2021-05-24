import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Components/Login';
import Home from './Components/Home';
import Create from './Components/Create';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                    name="Login"
                    component={Login} 
            />
            <Stack.Screen
                    name="Home"
                    component={Home}
            />
            <Stack.Screen
                    name="Create"
                    component={Create}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;