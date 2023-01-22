import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button, Alert, Image } from 'react-native';
import { useState } from 'react';

export default function App() {

  const[text, setText] = useState('');

  const pressed =()=>{
  Alert.alert('You wrote ' + text)
};


  return (
    <View style={styles.container}>
      <Image
      style={{ width:200, height:100}}
      source={{url: 'https://th.bing.com/th/id/R.c0605d85e63969417cceebb829839025?rik=MZh5NmMVf%2bOrEg&pid=ImgRaw&r=0'}}
      />
      <TextInput
      style={styles.teksti}
      onChangeText={text=> setText(text)}
      value={text}
      />
      <Button title ="Press me" onPress={pressed}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teksti:{
    width:200, 
    borderColor:'grey', 
    borderWidth:2
  }
});
