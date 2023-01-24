import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {StatusBar} from 'react-native/Libraries/Components/StatusBar/StatusBar';
import Card from './Components/CarItems/Card';
export default function App() {
  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
