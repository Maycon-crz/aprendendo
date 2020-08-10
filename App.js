

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
import { 
  StyleSheet, Text, View, ScrollView, 
  TextInput, Image, Button, Platform,
  TouchableHighlight, TouchableOpacity, 
  TouchableNativeFeedback, TouchableWithoutFeedback
} from 'react-native';

const Botoes = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight 
        onPress={() => {alertando()}}
        underlayColor="white"
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={() => {alertando()}} >
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>
      <TouchableNativeFeedback 
        onPress={()=>{alertando()}}
        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>          
        </View>
      </TouchableNativeFeedback>
      <TouchableWithoutFeedback
        onPress={()=>{alertando()}}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableHighlight onLongPress={()=>{alertando()}} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touchable with Long Press</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const PizzaTranslator = () => {
  const [text, setText] = useState('');
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Digite aqui para traduzir!"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <Text style={{padding:10, fontSize:42}}>
          {text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
}
const alertando = () => {
  alert("Bora la!")
}
const CatDois = (props) => {
  const [estaFaminto, setEstaFaminto] = useState(true);//([primeiro parametro = Variavel de estado, segundo parametro = funcao que define o valor dessa variavel])
  return(
    <View>
      <Text>
        Eu sou {props.name}, E eu estou {estaFaminto ? "FAMINTO" : "CHEIO"}!
      </Text>
      <Button
        onPress={() =>{
          setEstaFaminto(false);
        }}
        disabled={!estaFaminto}
        title={estaFaminto ? "Me de um pouco de Leite, por favor!" : "Obrigado!"}
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
        justifyContent: "center", 
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
        justifyContent: "center", 
        alignItems: "center"
      }}>
        <CatDois name="Miau" />
        <CatDois name="Tom" />
      </View>
      <><PizzaTranslator /></>
      <View style={styles.container}>
        <Button
          onPress={() => {
            alert('Você apertou no botão!');
          }}
          title="Me presione!"
        />
        <Button
          onPress={() => {
            alertando()
          }}
          title="funcao Alerta"
          color="#841584"
        />
      </View>
      <Botoes/>
    </ScrollView>
  );
}
const styles = StyleSheet.create({//Parecido com css
  container:{
    flex:1, 
    justifyContent: "center", 
    alignItems: "center"
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3"
  },
  buttonText:{
    textAlign: "center",
    padding: 20,
    color: "white"
  }
});
export default MeuApp;
