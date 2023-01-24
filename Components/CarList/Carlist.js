import React from 'react';
import {View, Dimensions, FlatList} from 'react-native';
import styles from './Styles';
import cars from './Cars';
import Card from '../CarItems/Card';
const Carlist = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <Card car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default Carlist;
