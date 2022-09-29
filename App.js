import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import turismo from './assets/turismo.jpg';
import AppName from './src/componentes/AppName';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.FirstText}> Zamith turismo</Text>
      <Image source={turismo} defaultSource={turismo} style={styles.foto}></Image>
      <table> 
        <tr>
          <td> Faça o seu Cadastro </td>
          <td><input type="text" name="Faça o seu Cadastro" size="40"></input><br/></td>
        </tr>

        <tr>
          <td> Nome Completo </td>
          <td><input type="text" name="Nome Completo" size="40"></input><br/></td>
        </tr>

        <tr>
          <td> E-mail </td>
          <td><input type="text" name="E-mail" size="20"></input><br/></td>
        </tr>
      </table>
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
    width:700,
    height:700,
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
