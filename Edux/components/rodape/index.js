import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Rodape = ({navigation}) =>{

    return(
    
        
        <View style={{  backgroundColor: '#f9e800', alignItems: 'center', justifyContent: 'center', height: 70, bottom: 0, position: 'fixed', width: 360,textAlign: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', height: 70, color: 'white' }}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00D65F', height: 70, width: 120, color: 'white' }}>
              <View>
              <Image
                style={styles.logo}
                source={{
                uri:
                'https://www.iconsdb.com/icons/preview/white/home-5-xxl.png'
                }}
            />      
                <Text  style={styles.logoText}>
                  Início
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#00D65F', height: 70, width: 120, color: 'white'  }}>
              <View>
              <Image
                style={styles.logo}
                source={{
                uri:
                'https://www.iconsdb.com/icons/preview/white/website-design-3-xxl.png'
                }}
            />
                <Text style={styles.logoText}>
                  Turmas
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00D65F', height: 70, width: 120, color: 'white' }}>
              <View>
              <Image
                style={styles.logo}
                source={{
                uri:
                'https://www.iconsdb.com/icons/preview/white/edit-5-xxl.png'
                }}
            />
                <Text style={styles.logoText}>
                  Objetivos
              </Text>
              </View>
            </TouchableOpacity>
          </View>
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
        width: 32,
        height: 32,
        marginBottom: 4,
        justifyContent: 'center',
        color: 'white',
        marginLeft: 10
    },
    logoText: {
        
        fontWeight: "bold",
        fontStyle: "normal",
        color: 'white'
        
        
    }
   
  });

export default Rodape;