# NurtureBook — Copilot Development Instructions

## Overview
NurtureBook is a local-first, offline-capable, parent-focused journaling app built with Expo + React Native. The MVP must prioritize a smooth writing experience, warm emotional design, simplicity, privacy, and reliability.

## Development Philosophy
1. Build small → stabilize → refine → expand.
2. Highly intuitive UX is more important than number of features.
3. Warm, calming aesthetic with minimal cognitive friction.
4. Offline-first and privacy-centered (no required backend).
5. All features must feel emotionally supportive, not clinical or corporate.

## Tech Requirements
- Framework: React Native + Expo
- Language: TypeScript
- Navigation: React Navigation (Bottom Tabs + Nested Stacks)
- Local Storage: MMKV or SQLite (no cloud sync for MVP)
- Optional future feature: Firebase for Wisdom Tree only
- Must persist data offline and after app restart

## MVP Feature Scope
The MVP must include:
1. Guided Journals
2. Free Write Journals
3. Daily Reflection (limited to approximately five sentences) + history view
4. Ability to browse past entries
5. Custom journals with selectable type:
   - Free Write
   - Guided Prompts
   - Daily Question

## User Flow

### Onboarding
- Show a very simple intro explanation emphasizing privacy.
- Inform users that all of their data stays local on their device.

### App Navigation / Tabs
Tabs: Journal, Reflections, History, Settings

### Journals Section
- Display all journals.
- Allow users to create custom journals and choose journal type.
- Allow writing new entries.
- Allow browsing and editing past entries.

### Reflections Section
- Present daily mini-reflection prompt.
- Accept a short text response (about five sentences maximum).
- Allow browsing past reflections.

## Folder Structure
Recommended folder layout:
/src
/components
/screens
/navigation
/storage
/hooks
/utils
/theme

## Code Style Rules
- Use functional components and React Hooks.
- Use TypeScript for all files.
- Separate UI components from logic where possible.
- Controlled inputs for all text-writing experiences.
- Autosave functionality should avoid data loss.

## Commenting Standard (Mode B)
Comment only where logic matters or is not obvious. Explain:
- Data flow
- Business logic reasoning
- Storage decisions
- Architectural intent

Examples of valid comments:
```ts
// Store journal entry locally using MMKV because speed and offline reliability are priorities.
invalid comments:
// This is a button

UI & Theme Guidelines

Style direction: Claymorphism with soft shadows and rounded shapes.

Main colors: Pastel Green (#A7D7BE) and Pastel Pink (#F8C8DC) and the backgrounds should blend in nice with a warm cream color.

Typography must feel warm, modern, and comforting.It must also be basic and bold and simple.

Icons should be soft and friendly (Lucide or Feather recommended).

Error Handling & UX

The app must never lose typed data.

Implement autosave on interval or onChange.

Provide calm, friendly fallback messages.

Use subtle haptics where beneficial.

Copilot Behavioral Rules

Before generating code, Copilot must:

Understand the intended feature and UX.

Determine correct data flow and component structure.

Generate clean and maintainable code.

Recommend edge cases and improvements.

If instructions are unclear, Copilot must ask questions before writing code.

Default Component Pattern:
function ComponentName() {
  // state
  // effects
  // handlers
  return (
    <View>
      {/* UI */}
    </View>
  );
}