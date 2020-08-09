

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Olá mundo!</Text>
//       {/* <StatusBar style="auto" /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Button } from 'react-native';

const CatDois = (props) => {
  const [isHungry, setIsHungry] = useState
  (true);
  return(
    <View>
      <Text>
        Eu sou {props.name}, E eu estou {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() =>{
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you"}
      />
    </View>
  );
}

const CatUm = (props) => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
}

const Cat = () => {
  return (
    <View>
      <Text>I am also a cat!</Text>
      <Text>Eu Tambem sou um gato!</Text>
    </View>
  );
}

const funcaoNome = (nome) => {//funcao
  return "O tal do "+nome;
}

const MeuApp = () =>{
  const nome = "React Native";// variavel  
  return (
    <ScrollView>
      <View style={{ 
        flex:1, 
        justufyConten: "center", 
        alignItems: "center"
      }}>
        <Text>          
          Aprendendooo {funcaoNome(nome)}{/* Chamando funcao que retorna string mais nome */}
        </Text>
        <TextInput
          style={{height:40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Digite aqui!"
        />
        <Cat />
        <CatUm name="Maycon"/>{/* Imprime funcao catUm com parametro name */}
        <CatUm name="Maria"/>
        <CatUm name="Camila"/>
        <Image
          source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
          style={{width:200, height:200}}
        />
        <Text>Hello, I am your cat!</Text>
      </View>
      <View style={{ 
        flex:1, 
        justufyConten: "center", 
        alignItems: "center"
      }}>
        <CatDois name="Spot" />
      </View>
    </ScrollView>
  );
}
//Parei no Docs - State - useState
export default MeuApp;