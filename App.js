import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';


let Image_Http_URL ={ uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'};

export default function App() {
  return (
    <View style={styles.container}>
      <Card
        title="Hola"
        caption="Me aburro"
        subtitle="No tengo sueño"
        image={{ uri: 'https://images.clarin.com/2019/04/03/vista-del-fitz-roy___TfhNv3KNZ_0x750__1.jpg' }}
        logo={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
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
});
