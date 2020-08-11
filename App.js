//Parei DOCS e fui para (componentes)
//-------------------VirtualizedList-------------------
import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const DATA = [];

const getItem = (data, index) => {
  return {
    id: Math.random().toString(12).substring(0),
    title: `Item ${index+1}`
  }
}

const getItemCount = (data) => {
  return 50;
}

const Item = ({ title })=> {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const VirtualizedListExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});

export default VirtualizedListExample;
//-------------------View-------------------
// import React from "react";
// import {View, Text} from "react-native";

// const ViewCaixas = () => {
//   return (
//     <View style={{
//       flexDirection: "row",
//       height:100,
//       padding: 20
//     }}
//     >
//       <View style={{backgroundColor:"blue", flex:0.3}}/>
//       <View style={{backgroundColor:"red", flex:0.5}}/>
//       <Text>Olá Mundo!!!</Text>
//     </View>
//   )
// }
// export default ViewCaixas;

//Parei no Responding to the current animation value (DOCS)
//-------------------Animated--------------------
//  


//-------------------

// import React, { useRef } from "react";
// import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

// const App = () => {
//   const pan = useRef(new Animated.ValueXY()).current;
//   const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true, 
//       onPanResponderMove: Animated.event([
//         null,
//         { dx: pan.x, dy: pan.y }
//       ]),
//       onPanResponderRelease: () => {
//         Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
//       }
//     })
//   ).current;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titleText}>Drag & Release this box!</Text>
//       <Animated.View
//         style={{
//           transform: [{ translateX: pan.x }, { translateY: pan.y }]
//         }}
//         {...panResponder.panHandlers}
//       >
//         <View style={styles.box} />
//       </Animated.View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   titleText: {
//     fontSize: 14,
//     lineHeight: 24,
//     fontWeight: "bold"
//   },
//   box: {
//     height: 150,
//     width: 150,
//     backgroundColor: "blue",
//     borderRadius: 5
//   }
// });

// export default App;

//-------------------

// import React, { useRef, useEffect } from 'react';
// import { Animated, Text, View } from 'react-native';

// const FadeInView = (props) => {
//   const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

//   React.useEffect(() => {
//     Animated.timing(
//       fadeAnim,
//       {
//         toValue: 1,
//         duration: 3000,
//       }
//     ).start();
//   }, [fadeAnim])

//   return (
//     <Animated.View // Special animatable View
//       style={{
//         ...props.style,
//         opacity: fadeAnim, // Bind opacity to animated value
//       }}
//     >
//       {props.children}
//     </Animated.View>
//   );
// }

// // You can then use your `FadeInView` in place of a `View` in your components:
// export default () => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
//         <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
//       </FadeInView>
//     </View>
//   )
// }

//-------------------------------------------------------
//-------------------React-Navigation--------------------
// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import { StatusBar } from 'expo-status-bar';
// // import {useState} from 'react';
// import { 
//   StyleSheet, Text, View, ScrollView, 
//   TextInput, Image, Button, Platform,
//   TouchableHighlight, TouchableOpacity, 
//   TouchableNativeFeedback, TouchableWithoutFeedback
// } from 'react-native';

// const HomeScreen = ({navigation}) =>{
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() =>
//         navigation.navigate('Profile', {name:'Jane'})
//       }
//     />
//   );
// }
// const ProfileScreen = () => {
//   return <Text>This is Jane's profile</Text>
// };

// const Stack = createStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }}/>
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default MyStack;
//----------------------------------------

// const Botoes = () => {
//   return (    
//     <View style={styles.container}>
//       <TouchableHighlight 
//         onPress={() => {alertando()}}
//         underlayColor="white"
//       >
//         <View style={styles.button}>
//           <Text style={styles.buttonText}>TouchableHighlight</Text>
//         </View>
//       </TouchableHighlight>
//       <TouchableOpacity onPress={() => {alertando()}} >
//         <View style={styles.button}>
//           <Text style={styles.buttonText}>TouchableOpacity</Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableNativeFeedback 
//         onPress={()=>{alertando()}}
//         background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
//       >
//         <View style={styles.button}>
//           <Text style={styles.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>          
//         </View>
//       </TouchableNativeFeedback>
//       <TouchableWithoutFeedback
//         onPress={()=>{alertando()}}
//       >
//         <View style={styles.button}>
//           <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//         </View>
//       </TouchableWithoutFeedback>
//       <TouchableHighlight onLongPress={()=>{alertando()}} underlayColor="white">
//         <View style={styles.button}>
//           <Text style={styles.buttonText}>Touchable with Long Press</Text>
//         </View>
//       </TouchableHighlight>
//     </View>
//   );
// }

// const PizzaTranslator = () => {
//   const [text, setText] = useState('');
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="Digite aqui para traduzir!"
//           onChangeText={text => setText(text)}
//           defaultValue={text}
//         />
//         <Text style={{padding:10, fontSize:42}}>
//           {text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     );
// }
// const alertando = () => {
//   alert("Bora la!")
// }
// const CatDois = (props) => {
//   const [estaFaminto, setEstaFaminto] = useState(true);//([primeiro parametro = Variavel de estado, segundo parametro = funcao que define o valor dessa variavel])
//   return(
//     <View>
//       <Text>
//         Eu sou {props.name}, E eu estou {estaFaminto ? "FAMINTO" : "CHEIO"}!
//       </Text>
//       <Button
//         onPress={() =>{
//           setEstaFaminto(false);
//         }}
//         disabled={!estaFaminto}
//         title={estaFaminto ? "Me de um pouco de Leite, por favor!" : "Obrigado!"}
//       />
//     </View>
//   );
// }

// const CatUm = (props) => {
//   return (
//     <View>
//       <Text>{props.name}</Text>
//     </View>
//   );
// }

// const Cat = () => {
//   return (
//     <View>
//       <Text>I am also a cat!</Text>
//       <Text>Eu Tambem sou um gato!</Text>
//     </View>
//   );
// }

// const funcaoNome = (nome) => {//funcao
//   return "O tal do "+nome;
// }

// const MeuApp = () =>{
//   const nome = "React Native";// variavel  
//   return (
//     <ScrollView>
//       <View style={{ 
//         flex:1, 
//         justifyContent: "center", 
//         alignItems: "center"
//       }}>
//         <Text>          
//           Aprendendooo {funcaoNome(nome)}{/* Chamando funcao que retorna string mais nome */}
//         </Text>
//         <TextInput
//           style={{height:40,
//           borderColor: 'gray',
//           borderWidth: 1
//         }}
//         defaultValue="Digite aqui!"
//         />
//         <Cat />
//         <CatUm name="Maycon"/>{/* Imprime funcao catUm com parametro name */}
//         <CatUm name="Maria"/>
//         <CatUm name="Camila"/>
//         <Image
//           source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
//           style={{width:200, height:200}}
//         />
//         <Text>Hello, I am your cat!</Text>
//       </View>
//       <View style={{ 
//         flex:1, 
//         justifyContent: "center", 
//         alignItems: "center"
//       }}>
//         <CatDois name="Miau" />
//         <CatDois name="Tom" />
//       </View>
//       <><PizzaTranslator /></>
//       <View style={styles.container}>
//         <Button
//           onPress={() => {
//             alert('Você apertou no botão!');
//           }}
//           title="Me presione!"
//         />
//         <Button
//           onPress={() => {
//             alertando()
//           }}
//           title="funcao Alerta"
//           color="#841584"
//         />
//       </View>
//       <Botoes/>
//     </ScrollView>  
//   );
// }
// const styles = StyleSheet.create({//Parecido com css
//   container:{
//     flex:1, 
//     justifyContent: "center", 
//     alignItems: "center"
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: "center",
//     backgroundColor: "#2196F3"
//   },
//   buttonText:{
//     textAlign: "center",
//     padding: 20,
//     color: "white"
//   }
// });
// export default MeuApp;

//Parei no - docs - Interação - React Navigation