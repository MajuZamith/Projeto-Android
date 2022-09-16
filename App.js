import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import turismo from './assets/turismo.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={turismo} defaultSource={turismo} style={styles.foto}></Image>
      <Text style={styles.FirstText}> Zamith turismo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto:{
    width:320,
    height:300,
  },
  FirstText:{
    fontSize:40,
    lineHeight:47,
    fontWeight:'bold',
    color:'black',
    padding:'10',
    textAlign:'center'
  },
});
