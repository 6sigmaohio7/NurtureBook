import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsStackParamList } from '../types/navigation';
import { SettingsHomeScreen } from '../screens/settings/SettingsHomeScreen';

const Stack = createNativeStackNavigator<SettingsStackParamList>();

export const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsHome" component={SettingsHomeScreen} />
    </Stack.Navigator>
  );
};
