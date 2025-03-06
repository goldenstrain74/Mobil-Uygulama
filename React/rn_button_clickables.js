import { Button,Text, View, StyleSheet,TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';






export default function App() {
  return (
     <View style={styles.container}>
      <Button title="Tıkla" onPress={() => alert("Tıklandı")} />


      <TouchableHighlight activeOpacity={0.5} underlayColor="#3355FF" onPress={() => alert("TouchableHighlight tıklandı")}>
        <Text style={styles.buttonText}>TouchableHighlight </Text>
      </TouchableHighlight>

      <TouchableOpacity  activeOpacity={0.5} onPress={()=> alert('basıldı')}> 
        <Text>TouchableOpacity</Text>  
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={() => alert("TouchableWithoutFeedback tıklandı")}>
        <Text style={styles.buttonText}>TouchableWithoutFeedback </Text>
      </TouchableWithoutFeedback>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  button: {
    padding:10,
  },
});
