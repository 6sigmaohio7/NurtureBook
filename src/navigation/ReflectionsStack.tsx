import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReflectionsStackParamList } from '../types/navigation';
import { TodayReflectionScreen } from '../screens/reflections/TodayReflectionScreen';
import { ReflectionHistoryScreen } from '../screens/reflections/ReflectionHistoryScreen';

const Stack = createNativeStackNavigator<ReflectionsStackParamList>();

export const ReflectionsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TodayReflection" component={TodayReflectionScreen} />
      <Stack.Screen name="ReflectionHistory" component={ReflectionHistoryScreen} />
    </Stack.Navigator>
  );
};
