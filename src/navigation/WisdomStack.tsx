import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WisdomStackParamList } from '../types/navigation';
import { WisdomHomeScreen } from '../screens/wisdom/WisdomHomeScreen';
import { ShareWisdomScreen } from '../screens/wisdom/ShareWisdomScreen';

const Stack = createNativeStackNavigator<WisdomStackParamList>();

export const WisdomStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WisdomHome" component={WisdomHomeScreen} />
      <Stack.Screen name="ShareWisdom" component={ShareWisdomScreen} />
    </Stack.Navigator>
  );
};
