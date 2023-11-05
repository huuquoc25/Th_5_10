import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const OnboardScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={() => navigation.navigate('Welcome')}>
        <Image source={require('../assets/shop1.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    width: "100%",
    height: '100%',
    // ...StyleSheet.absoluteFillObject,
    // resizeMode: 'contain',
  },
});

export default OnboardScreen;
