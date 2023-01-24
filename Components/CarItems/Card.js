import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './Styles';
import Button from '../Buttons';

const Card = props => {
  const {name, tagline, image} = props.car;
  return (
    <View style={styles.subContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>{tagline}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button content="Custom Order" type="primary" />
        <Button content="Existing Order" type="secondary" />
      </View>
    </View>
  );
};

export default Card;
