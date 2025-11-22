import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { JournalStackParamList } from '../types/navigation';
import { JournalsHomeScreen } from '../screens/journals/JournalsHomeScreen';
import { CreateJournalScreen } from '../screens/journals/CreateJournalScreen';
import { JournalEntriesScreen } from '../screens/journals/JournalEntriesScreen';
import { WriteEntryScreen } from '../screens/journals/WriteEntryScreen';

const Stack = createNativeStackNavigator<JournalStackParamList>();

export const JournalStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="JournalsHome" component={JournalsHomeScreen} />
      <Stack.Screen name="CreateJournal" component={CreateJournalScreen} />
      <Stack.Screen name="JournalEntries" component={JournalEntriesScreen} />
      <Stack.Screen name="WriteEntry" component={WriteEntryScreen} />
    </Stack.Navigator>
  );
};
