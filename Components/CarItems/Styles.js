import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  subContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
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

  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});

export default styles;
