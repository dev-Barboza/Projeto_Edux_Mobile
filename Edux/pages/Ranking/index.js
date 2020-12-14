import React, {useState, Component} from 'react';
import { View, Image, StyleSheet, Text, TextInput, AppRegistry, Alert, Button} from 'react-native';




const Ranking = ({navigation}) =>{
    
    const Curtida = () => {
        
        const corpo = {
            curtida: curtida
        }

        fetch('http://192.168.1.108:5000/api/curtida' , {
            method : 'GET',
            headers: {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(corpo)
        })
          
     return(
        <View style={styles.container}>

            <Text style ={styles.nome}>

                RANKING GERAL</Text>

            <View style={styles.balao}> 

            <Image
                style={styles.foto}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />

            <Text style={styles.iden}>
                MATHEUS BARBOZA
            </Text>

            <Text style={styles.curso}>
                REDES DE COMPUTADORES
            </Text>

            

            </View>

            <Text style={styles.nameCurtidas}>CURTIDAS</Text>

            <Button
                onPress={Curtida}
                 title="Curtidas"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            
            
                

          

      
        </View>
        
    )

    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      backgroundColor:'#9200D6',
      
      
    },
    input : {
        width: '80%',
        height: 40, 
        borderColor: 'white', 
        borderWidth: 1,
        borderRadius: 6,
        padding: 5,
        backgroundColor: '#FFF',
        marginTop:10,
        color: '#9200D6',
        fontSize: 16
    },
    nome : {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFFF',
        marginTop: 200,
        textTransform: "uppercase"
    },
    foro : {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 6,
        width: '80%',
        marginTop:30
    },
   curso : {
        color: '#FFFF',
        textTransform: "uppercase",
        fontSize: 'Titillium Web',
        fontSize: 14,
        marginTop: 10,
        marginLeft : 100,
        fontWeight: 600,
        
    },
    iden : {
      fontWeight: 600,
      fontSize: 20,
      marginLeft : 100,
      marginTop : 20,
      color: "#FFFF"
    },
    balao: {
        marginTop: 80,
        backgroundColor : '#00c2ee',
        width: 300,
        height: 100,
        borderRadius : 10,
        
    },
    textinho: {
        marginTop : 40,
    },
    nameCurtidas : {
        marginTop: 25,
        color: '#fff',
        fontSize: 20
    }
   
  });
}

export default Ranking;