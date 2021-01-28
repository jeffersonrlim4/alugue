import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Home from './pages/Home';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            
            <Stack.Navigator>
                <Stack.Screen 
                name="home" 
                component={Home}
                options={{
                    title: 'ALUGUE',
                    headerTitleStyle: {
                        fontFamily: 'Montserrat_700Bold'
                    },
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <Feather name="shopping-bag" size={24} />
                        </TouchableOpacity>
                    )
                }} />
                <Stack.Screen 
                name="detail" 
                component={Detail} 
                options={{
                    title: 'DETALHES',
                    headerTitleStyle: {
                        fontFamily: 'Montserrat_700Bold'
                    },
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <Feather name="shopping-bag" size={24} />
                        </TouchableOpacity>
                    )
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
