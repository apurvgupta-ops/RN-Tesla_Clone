import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StatusBar} from 'react-native/Libraries/Components/StatusBar/StatusBar';
import Carlist from './Components/CarList/Carlist';
export default function App() {
  return <View style={styles.container}>{<Carlist />}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
