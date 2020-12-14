import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) =>{


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const salvarToken = async (value) => {
        try {
          await AsyncStorage.setItem('@jwt', value)
        } catch (e) {
          // saving error
        }
      }

    const Entrar = () => {
        
        const corpo = {
            email : email,
            senha: senha,
        }

        fetch('http://192.168.1.108:5000/api/login' , {
            method : 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(corpo)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.status != 404){
                alert('Seja bem vindo')
                salvarToken(data.token)

                navigation.push('Autenticado')
            }else{
                alert('Email ou senha inválidos! :( ')
            }
        })
    }

    return(
        <View style={styles.container}>

        <Text style={styles.logoText}>EduX</Text>
            <Text style ={styles.nome}>

                Login</Text>

            <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder= 'Digite seu email '
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setSenha(text)}
                value={senha}
                secureTextEntry={true}
                placeholder= 'Digite sua Senha '
            />

            <TouchableOpacity
                style={styles.button}
                onPress={Entrar}
            >
                <Text style={styles.textbuttom}>Entrar</Text>
            </TouchableOpacity>

        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9200D6',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    input : {
        width: '80%',
        height: 40, 
        borderColor: 'white', 
        borderWidth: 1,
        borderRadius: 6,
        padding: 5,
        backgroundColor: '#FFF',
        marginTop:30,
        color: '#9200D6',
        fontSize: 16
    },
    nome : {
        fontSize: 25,
        color: '#FFF',
        marginBottom: 30,
        textTransform: "uppercase"
    },
    button : {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 6,
        width: '80%',
        marginTop:30
    },
    textbuttom : {
        color: '#9200D6',
        textTransform: "uppercase",
        fontSize: 'Titillium Web',
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
    },
    logo : {
        width: 299,
        height: 175,
    },
    logoText: {
        fontSize: 96,
        color: '#FFF',
        marginBottom: 30,
        fontWeight: "bold",
        fontStyle: "normal",
        
        
    }
   
  });

export default Login;