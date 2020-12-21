import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity, Image,  Button , onChangeText, Alert  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Rodape from '../../components/rodape';
import Menu from '../../components/menu';
import {firebase } from '../../utils/firebaseConfig';
import { useEffect } from 'react';





    
    const Timeline =  ({navigation}) =>{

        const [state, setstate] = useState({
            descricao:''
        })

        const limparCampos = () => {
            
            setstate('');
            
        } 

        const handleChangeText = (descricao, value)=>{
            setstate({ ...state, [descricao]: value})
        }

        const createNewDica = async () =>{
            if (state.descricao === ''){
                alert('Digite uma dic')
            }else{

                await  firebase.db.collection('dicas').add({
                    descricao: state.descricao
                })
                alert("Salvo")
            }
        }
      
                    return(
                        <View>
                            <Menu style={{position: 'fixed', position: 'absolute'}}/>
                        <View  style={styles.rankings} > 
                       <Text style={styles.ranking}> POSTAGENS</Text>
                       </View>
                       
                       
                       <TextInput
                        style={{ height: 70, borderColor: '#9200d6', borderWidth: 1, width:300, marginLeft: 30 }}
                        //value={}
                        onChangeText={(value) => handleChangeText('descricao', value)}
                        placeholder="     Qual sua dica de hoje?"
                        />
                       <View style={styles.fixToText}>
                            <Button
                            style={styles.botao}
                            title="Escolher imagem"
                            onPress={() => Alert.alert('Left button pressed')}
                            />
                            <Button
                             style={styles.botao}
                            title="Postar"
                            onPress={()=>alert("Dica adicionada")}
                            />
                        </View>


                        <View style={styles.Postagem}>
                        <Image
                        style={styles.logo}
                        source={{
                        uri:
                        'https://www.youtz.com.br/wp-content/uploads/2019/10/YOUTZ-MATEMATICA-ENEM-870x420.jpg'
                        }}
                    />
                    
                        <Text  style={styles.textinho}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </Text>
                        <TouchableOpacity>
                        <Image
                        style={styles.like}
                        source={{
                        uri:
                        'https://www.flaticon.com/svg/static/icons/svg/446/446072.svg'
                        }}

                    />

                    
                    
                        </TouchableOpacity>
                        
                        
                        </View>

                        

                       <br/>
                       <br/>
                       <br/>
                       <br/>
                       <br/>
                       <br/>
                       <br/>
                       <br/>

                       
                        
                </View>

    )

    
    
}

const styles = StyleSheet.create({
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
       
      },
    
    logo : {
        width:250,
        height: 150,
        marginBottom: 10 ,
        marginTop : 20,
        marginLeft: 15
        
        
    },
    ranking :{
        color : '#9200d6',
        marginTop: 90,
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
    Postagem :{
        
        borderStyle: 'solid',
        borderColor: '#00c2ee',
        borderRadius: 30,
        backgroundColor: '#9200d6',
        width: 300,
        height:530,
        marginLeft: 30,
        paddingLeft:10,
        paddingRight:10,
        marginTop:20,

    },
    like:{
        height:30,
        width:30,
        marginTop: 20,
        marginLeft: 20,
        
    },
    textinho: {
        marginLeft:10
    }
    
    
    
  });

export default Timeline;