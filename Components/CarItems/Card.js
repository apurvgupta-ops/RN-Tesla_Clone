import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './Styles';
import Button from '../Buttons';

const Card = () => {
  return (
    <View style={styles.subContainer}>
      <ImageBackground
        source={require('../../Assets/images/ModelX.jpeg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.price}>Starting at $70,000</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button content="Custom Order" type="primary" />
        <Button content="Existing Order" type="secondary" />
      </View>
    </View>
  );
};

export default Card;
