import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './Styles';

const index = ({content, type}) => {
  const backgroundColor = type === 'primary' ? 'black' : 'white';
  const Color = type === 'primary' ? 'white' : 'black';
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => console.log('hello')}>
        <Text style={[styles.text, {color: Color}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default index;
