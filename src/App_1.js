import { StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyText from './components/MyText';


export default function App(){
  return(
    <View style = {style.container}>
      <Text>Hello</Text>
    <MyText bold={'bold'}/>
    <StatusBar style= "auto"/>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
});