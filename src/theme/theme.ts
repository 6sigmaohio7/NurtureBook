export const theme = {
  colors: {
    primary: '#A7D7BE', // Pastel Green
    secondary: '#F8C8DC', // Pastel Pink
    background: '#FDFBF7', // Warm Cream
    text: '#2D2D2D', // Soft Black
    textLight: '#6D6D6D',
    white: '#FFFFFF',
    error: '#FF6B6B',
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  borderRadius: {
    s: 8,
    m: 16,
    l: 24,
  },
  text: {
    header: { fontSize: 24, fontWeight: 'bold' as const, color: '#2D2D2D' },
    subheader: { fontSize: 18, fontWeight: '600' as const, color: '#2D2D2D' },
    body: { fontSize: 16, color: '#2D2D2D' },
  },
  shadows: {
    soft: {
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
  },
};

export type Theme = typeof theme;
