import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const CodeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={() => navigation.navigate('Onboard')}>
      <Image style={{width: '100%', height: '100%'}} source={require('../assets/shop5.png')} />
    </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

export default CodeScreen;
