import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"

const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer initialRouteName="Splash">
        <Stack.Navigator>
            <Stack.Screen></Stack.Screen>
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Router