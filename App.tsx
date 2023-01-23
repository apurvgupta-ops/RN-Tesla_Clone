import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <ImageBackground
          source={require('./Assets/images/ModelX.jpeg')}
          style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.price}>Starting at $70,000</Text>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '20%',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 30,
    color: 'black',
  },
  price: {
    fontSize: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
});
