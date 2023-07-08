import { NavigationContainer } from "@react-navigation/native";
import { Box, NativeBaseProvider } from "native-base";
import React from "react";

import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Box>Hello world</Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
