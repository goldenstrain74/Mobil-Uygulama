import {Button , Image, View, Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style= {styles.txt1}> Bilişim </Text>
     <View style= {styles.col}> 
     
        <View style={[styles.kutu1 , styles.bilisim]}>
          <Text style= {styles.txt2}> Yazılım </Text> 
          <Image source={require("./2.laptop1.png")} style={styles.img}> </Image>

            <View style={styles.btn}> 
              <Button color={'#39f'} title={'Button'} style={styles.btn}>  </Button>  
            </View>
          
        </View>
       <View style={[styles.kutu2 , styles.bilisim]}>
        <Text style= {styles.txt2}> Donanım </Text> 
        <Image source={require("./2.laptop1.png")} style={styles.img}> </Image>
        <View style={styles.btn}> 
              <Button color={'#39f'} title={'Button'} style={styles.btn}>  </Button>  
            </View>
        </View>

     </View>
     
    <Text style= {styles.txt1}> Elektrik </Text>
    <View style={styles.col}>
     
      <View style={[styles.kutu3 , styles.elektrik]}> <Text style= {styles.txt2}> Elektrik </Text> <Image source={require("./2.laptop1.png")} style={styles.img}> </Image> <View style={styles.btn}> 
              <Button color={'#39f'} title={'Button'} style={styles.btn}>  </Button>  
            </View> </View>
      <View style={[styles.kutu4 , styles.elektrik]}> <Text style= {styles.txt2}> Elektronik </Text> <Image source={require("./2.laptop1.png")} style={styles.img}> </Image> <View style={styles.btn}> 
              <Button color={'#39f'} title={'Button'} style={styles.btn}>  </Button>  
            </View> </View>
    
    </View>
      
      <Text style= {styles.txt1}> Motor </Text>
      <View style={styles.col}>
     
        <View style={[styles.kutu5 , styles.elektrik]}> <Text style= {styles.txt2}> Uçak </Text> <Image source={require("./2.laptop1.png")} style={styles.img}> </Image> <View style={styles.btn}> 
              <Button color={'#39f'} title={'Button'} style={styles.btn}>  </Button>  
            </View> </View>
        <View style={[styles.kutu6 , styles.elektrik]}> <Text style= {styles.txt2}> Motorlu araçlar </Text> <Image source={require("./2.laptop1.png")} style={styles.img}> </Image> <View style={styles.btn}> 
              <Button color={'#39f'} title={'Button'} style={styles.btn}>  </Button>  
            </View> </View>
        <View style={[styles.kutu7 , styles.elektrik]}> <Text style= {styles.txt2}> Elektrikli araba </Text> <Image source={require("./2.laptop1.png")} style={styles.img}> </Image> <View style={styles.btn}> 
              <Button color={'#39f'} title={'Button'} style={styles.btn}>  </Button>  
            </View> </View>
    
      </View>


    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },

  txt1 :{

    textAlign: 'center',
    fontSize: 30,
    fontWeight: 600,

  },

  txt2 :{

    textAlign: 'center',
    fontSize: 15,
    fontWeight: 400,

  },

  img: {
    marginTop: 10,
    marginLeft:'15%',
    width: '70%',
    height: 70,

  },

  btn: {
    marginLeft:'15%',
    width: '70%',
    height: 40,
    marginTop: 50,
  },

  col :{
borderWidth: 2,
borderColor: 'black',
flexDirection: 'row',
  marginTop: 5,
  },
 
  bilisim: {
    height:200,
    padding: 5,
  },

  elektrik:{

  height: 200,
  },

  kutu1: {
    flex:1,
    backgroundColor: 'gray'

  },

  kutu2: {
    flex:1,
    backgroundColor: '#ccc'

  },

    kutu3: {
    flex:1,
    backgroundColor: 'cyan'

  },

  kutu4: {
    flex:1,
    backgroundColor: 'royalblue'

  },
  
    kutu5: {
    flex:1,
    backgroundColor: 'orange'

  },

  kutu6: {
    flex:1,
    backgroundColor: 'pink'

  },
  
    kutu7: {
    flex:1,
    backgroundColor: 'purple'

  },

  
 
});
