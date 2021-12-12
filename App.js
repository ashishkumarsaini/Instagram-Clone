import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import AppShell from './src/AppShell';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#000"/>
      <AppShell />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
