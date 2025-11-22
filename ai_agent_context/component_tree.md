# NurtureBook Component Tree

## App Root
- App.tsx
  - NavigationProvider
  - ThemeProvider
  - StorageProvider

## Navigation
- BottomTabNavigator
  - JournalStack
  - ReflectionsStack
  - HistoryStack
  - SettingsStack

### JournalStack Screens
1. JournalsHomeScreen
2. CreateJournalScreen
3. JournalEntriesScreen
4. WriteEntryScreen
5. EditEntryScreen

### ReflectionsStack Screens
1. TodayReflectionScreen
2. ReflectionHistoryScreen
3. ViewReflectionScreen

### HistoryStack Screens
1. AllPastEntriesScreen
2. EntryDetailsScreen

### SettingsStack Screens
1. SettingsHomeScreen
2. AboutAppScreen
3. PrivacyExplanationScreen

## Reusable Components
- AppHeader
- AppButton
- TextInputBox (multi-line journal editor)
- EmptyStateMessage
- CardItem
- ListItemRow
- TimestampLabel
