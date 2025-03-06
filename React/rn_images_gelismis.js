import { Image, Text, View, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
     
     <Image style={styles.messi} resizeMode="contain" source={{uri:"https://www.si.com/.image/t_share/MTY4MTAyNTc0Nzg3NDA1MDcz/messi-jersey-real-madridjpg.jpg"}} />

    <Image source={require("./assets/messi2009.jpg")} />  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  foto: {
    width:'100%',
    height: 'auto',
  },

  messi:{
      width: '100%',
      height: 500,
      borderColor:'navy',
      borderWidth:3,
  },
});
