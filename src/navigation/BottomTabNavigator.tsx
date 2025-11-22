import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../types/navigation';
import { JournalStack } from './JournalStack';
import { ReflectionsStack } from './ReflectionsStack';
import { WisdomStack } from './WisdomStack';
import { HistoryStack } from './HistoryStack';
import { SettingsStack } from './SettingsStack';
import { theme } from '../theme/theme';

const Tab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: 'transparent',
          elevation: 0,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textLight,
      }}
    >
      <Tab.Screen name="JournalTab" component={JournalStack} options={{ title: 'Journal' }} />
      <Tab.Screen name="ReflectionsTab" component={ReflectionsStack} options={{ title: 'Reflect' }} />
      <Tab.Screen name="WisdomTab" component={WisdomStack} options={{ title: 'Wisdom' }} />
      <Tab.Screen name="HistoryTab" component={HistoryStack} options={{ title: 'History' }} />
      <Tab.Screen name="SettingsTab" component={SettingsStack} options={{ title: 'Settings' }} />
    </Tab.Navigator>
  );
};
