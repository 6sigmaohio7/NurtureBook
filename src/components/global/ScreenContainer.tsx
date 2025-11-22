import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../../theme/theme';

interface ScreenContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.m,
  },
});
