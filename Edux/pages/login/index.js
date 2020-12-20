import React, {useState , useEffect} from 'react';
import { useFirebaseApp } from 'reactfire';
import { useHistory } from  'react-router-dom';
import { StyleSheet, Text, View , TextInput , TouchableOpacity, Image, AppRegistry } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../../utils/firebaseConfig';






const Login = ({navigation}) => {
    const history = useHistory();
    

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) => {
        event.preventDefault();

        console.log(`${email} - ${senha}`);

        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(result => {
            localStorage.setItem('Edux', result.user.refreshToken);
            alert('Seja bem vindo ')
            //navega para a página 

            navigation.navigate('BottomTabNavigator');
        })
        .catch(error => {
            alert('Email ou Senha incorreto ')

            
            console.error(error);
        })
}

  

    
  
    

    return(
        <View style={styles.container}>

        <Text style={styles.logoText}>EduX</Text>
            <Text style ={styles.nome}>

                Login</Text>

            <TextInput
                style={styles.input}
                onChangeText={event => setEmail(event)}
                value={email}
                placeholder= 'Digite seu email '
            />
            <TextInput
                style={styles.input}
                onChangeText={event => setSenha(event)}
                value={senha}
                secureTextEntry={true}
                placeholder= 'Digite sua Senha '
            />

            <TouchableOpacity
                style={styles.button}
                onPress={ event => logar(event) }
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