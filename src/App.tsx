import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from "react";

import 'react-native-gesture-handler';
import ListFinancialProject from "./screens/ListFinancialProject";

const {Navigator, Screen} = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={"home"}>
        <Screen name="home" component={ListFinancialProject}/>
      </Navigator>
    </NavigationContainer>
  );
}
