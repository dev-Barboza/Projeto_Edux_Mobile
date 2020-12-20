import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Rodape from '../../components/rodape';
import Menu from '../../components/menu';

const ranking = ({navigation}) =>{
    
  

    return(
        
        <View> 
            <Menu/>
             <View  style={styles.rankings} > 
            <Text style={styles.ranking}> RANKING GERAL</Text>
            </View>
            <View style={styles.bloco}>
            <Image
                style={styles.logo}
                source={{
                uri:
                'https://www.flaticon.com/svg/static/icons/svg/149/149452.svg'
                }}
            /> 
            <Text style={styles.identidade}> Matheus Barboza <br/>  
             Desenvolvimento de sistemas </Text>   
            </View>
            

           
            <View style={styles.verde}>
            <Text style={styles.textinho}>
                1º
                <br/>
                40
                <br/>
                Objetivos <br/>
                concluídos
            </Text>
            </View>
            

            
            <View style={styles.horizontal}>
            <View style={styles.azul}>
            <Text style={styles.textinho}>
                4º
                <br/>
                234
                <br/>
                Curtidas
            </Text>
            </View>

            <View style={styles.amarelo}>
            <Text style={styles.textinho}>
                16º
                <br/>
                4
                <br/>
                Segredos<br/>
                encontrados
            </Text>
            </View>
           
            </View>
            <View style={styles.vermelho}>
            <Text style={styles.textinho}>
                8º
                <br/>
                34
                <br/>
                Notas <br/>
                máximas
            </Text>
            </View>
           
                
           

            
        
            <Rodape/>
            </View>

    )

    
    
}

const styles = StyleSheet.create({
    
    logo : {
        width: 50,
        height: 50,
        marginBottom: 10 ,
        marginTop : 10,
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 20,
    },
    ranking :{
        color : '#9200d6',
        marginTop: 120,
        marginBottom: 40,
        fontFamily: 'Titillium Web',
        fontWeight: '900',
        fontstyle: 'normal',
        fontSize: 24,
        Lineheight :'36,5px'

       
    },
    rankings :{
        
        justifyContent : 'center',
        alignItems: 'center',
    },
    bloco : {
        backgroundColor: '#9200d6',
        flexDirection: 'row',
        borderRadius: 90,
        width: 300,
        marginLeft: 36,
    }, 
    identidade :{
        color: 'white',
        fontWeight : 500,
        marginTop:13,
    },
    verde : {
        backgroundColor: '#00d65f',
        borderRadius: 90,
        marginTop:50,
        width:100,
        height:100,
        marginLeft: 140,

    },
    vermelho : {
        backgroundColor: '#ff271c',
        borderRadius: 90,
        
        justifyContent: 'center',
        flexDirection: 'row',
        width:100,
        height:100, 
        marginLeft: 140,
      
    },
    azul : {
        backgroundColor: '#00c2ee',
        borderRadius:90,
        width:100,
        height:100
    },
    amarelo : {
        backgroundColor: '#f9e800',
        borderRadius: 90,
        width:100,
        height:100
    },
    vertical: {
        flexDirection: 'column',
        width:100,
        marginTop:50,
        justifyContent: 'center'


    },
    horizontal : {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft:25
    },
    textinho: {
        marginLeft: 30
    }
    
  });

export default ranking;