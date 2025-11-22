# NurtureBook Data Model (Local Storage)

## Storage Strategy
All data is stored locally using MMKV or SQLite.
Data must remain accessible offline and persist across app restarts.

## Core Entities

### UserJournal
Represents a single journal container created by the user.

Fields:
- id: string (uuid)
- title: string
- type: "free_write" | "guided" | "daily_question"
- createdAt: number (timestamp)
- updatedAt: number (timestamp)

### JournalEntry
Represents an individual entry written inside a journal.

Fields:
- id: string (uuid)
- journalId: string (foreign key)
- content: string
- createdAt: number (timestamp)
- updatedAt: number (timestamp)

### DailyReflection
Represents the daily short reflection input.

Fields:
- id: string (uuid)
- dateKey: string (YYYY-MM-DD)
- text: string (max ~5 sentences)
- createdAt: number (timestamp)

### Settings
User preferences for UI and behavior.

Fields:
- themeMode: "light" | "dark" | "system"
- hapticsEnabled: boolean

## Indexing Rules
- Journals sorted by updatedAt desc
- Entries sorted by createdAt desc
- Reflections sorted by dateKey desc

## Data Safety Rules
- Use atomic writes
- Implement autosave
- Validate non-empty content before commit
