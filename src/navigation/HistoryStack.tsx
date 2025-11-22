import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HistoryStackParamList } from '../types/navigation';
import { AllPastEntriesScreen } from '../screens/history/AllPastEntriesScreen';

const Stack = createNativeStackNavigator<HistoryStackParamList>();

export const HistoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AllPastEntries" component={AllPastEntriesScreen} />
    </Stack.Navigator>
  );
};
