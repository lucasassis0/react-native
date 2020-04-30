import 'react-native-gesture-handler'
import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableHighlight, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TextInput } from 'react-native-gesture-handler';

const Stack = createStackNavigator()

const user = {
  nome: 'Lucas',
  email: 'matador4ever@oi.com',
  usuario: 'm4ever',
  senha: '1234#abc'
}

class Login extends React.Component {
  constructor(navigation) {
    super(navigation)
    this.state = {
      login: '',
      senha: ''
    }

  }

  onClick = () => {
    if(this.state.login === user.usuario && this.state.senha === user.senha){
      this.props.navigation.navigate('Detalhes',{
        nome: user.nome,
        email: user.email
      })
    }else{
      Alert.alert("Usuário ou senha inválidos!")
    }
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text> Entre com a sua conta </Text>
        </View>
        <View>
          <Text> Login: </Text>
          <TextInput
            placeholder="Entre com o login"
            value={this.state.nome}
            onChangeText={input => { this.setState({ login: input }) }}
          />
          <Text> Senha: </Text>
          <TextInput
            placeholder="Entre com a senha"
            value={this.state.senha}
            onChangeText={input => { this.setState({ senha: input }) }}
          />
          <TouchableHighlight onPress={this.onClick}>
            <Text> Entrar </Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    )
  }
}

class Details extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Detalhes</Text>
        </View>
      </SafeAreaView>
    )
  }
}

class App extends React.Component {


  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Detalhes' component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
