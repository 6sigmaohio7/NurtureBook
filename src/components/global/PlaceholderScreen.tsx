import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ScreenContainer } from './ScreenContainer';
import { theme } from '../../theme/theme';

interface Props {
  name: string;
}

export const PlaceholderScreen: React.FC<Props> = ({ name }) => (
  <ScreenContainer style={styles.centered}>
    <Text style={theme.text.header}>{name}</Text>
    <Text style={theme.text.body}>Coming Soon</Text>
  </ScreenContainer>
);

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
