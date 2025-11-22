export type RootTabParamList = {
  JournalTab: undefined;
  ReflectionsTab: undefined;
  WisdomTab: undefined;
  HistoryTab: undefined;
  SettingsTab: undefined;
};

export type JournalStackParamList = {
  JournalsHome: undefined;
  CreateJournal: undefined;
  JournalEntries: { journalId: string; title: string };
  WriteEntry: { journalId: string };
  EditEntry: { entryId: string };
};

export type ReflectionsStackParamList = {
  TodayReflection: undefined;
  ReflectionHistory: undefined;
  ViewReflection: { reflectionId: string };
};

export type WisdomStackParamList = {
  WisdomHome: undefined;
  ShareWisdom: undefined;
};

export type HistoryStackParamList = {
  AllPastEntries: undefined;
  EntryDetails: { entryId: string };
};

export type SettingsStackParamList = {
  SettingsHome: undefined;
  AboutApp: undefined;
  PrivacyExplanation: undefined;
};
