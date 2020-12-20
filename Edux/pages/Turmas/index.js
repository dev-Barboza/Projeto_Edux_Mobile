import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    TextInput,
    FlatList
} from 'react-native';


export default class Turmas extends Component {

    

  constructor(props) {
    super(props);
    this.state = {
        data: [
            {id:1, color:"#00C2EE", icon:"https://cdn.icon-icons.com/icons2/2735/PNG/128/knowledge_icon_175709.png", name: "MULTIMÍDIA", tags:['Alunos']},
            {id:2, color:"#9200D6", icon:"https://cdn.icon-icons.com/icons2/2735/PNG/128/graduation_cap_icon_175700.png", name: "DESENVOLVIMENTO DE SISTEMAS", tags:['Alunos']}, 
            {id:3, color:"#F9E800", icon:"https://cdn.icon-icons.com/icons2/2735/PNG/128/stationery_compass_icon_175719.png", name: "REDES", tags:['Alunos']}, 
        ]
    };
}

  cardClickEventListener = (item) => {
    Alert.alert(item.name);
  }

  tagClickEventListener = (tagName) => {
    Alert.alert(tagName);
  }

  renderTags = (item) =>{
    return item.tags.map((tag, key) => {
      return (
        <TouchableOpacity key={key} style={styles.btnColor} onPress={() => {this.tagClickEventListener(tag)}}>
          <Text>{tag}</Text>
        </TouchableOpacity> 
      );
    })
  }

  render() {
      return (
          <View style={styles.container}>
            <Menu/>
       
      
       <View  style={styles.rankings} > 
        <Text style={styles.ranking}> TURMAS</Text>
        </View>
      

        <FlatList 
          style={styles.notificationList}
          data={this.state.data}
          keyExtractor= {(item) => {
              return item.id;
            }}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity style={[styles.card, {borderColor:item.color}]} onPress={() => {this.cardClickEventListener(item)}}>
                <View style={styles.cardContent}>
                  <Image style={[styles.image, styles.imageContent]} source={{uri: item.icon}}/>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={[styles.cardContent, styles.tagsContent]}>
                  {this.renderTags(item)}
                </View>
              </TouchableOpacity>
            )
        }}/>
        <Rodape/>
      </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB',
    },
  formContent:{
    flexDirection: 'row',
    marginTop:70,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:45,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    margin:10,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  card: {
    height:null,
    paddingTop:10,
    paddingBottom:10,
    marginTop:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth:40,
    marginBottom:20,
  },
  cardContent:{
    flexDirection:'row',
    marginLeft:10, 
  },
  imageContent:{
    marginTop:-40,
  },
  tagsContent:{
    marginTop:10,
    flexWrap:'wrap'
  },
  image:{
    width:60,
    height:60,
    borderRadius:30,
  },
  name:{
    fontSize:20,
    fontWeight: 'bold',
    marginLeft:10,
    alignSelf: 'center'
  },
  btnColor: {
    padding:10,
    borderRadius:40,
    marginHorizontal:3,
    backgroundColor: "#eee",
    marginTop:5,
  },
  ranking :{
    color : '#9200d6',
    marginTop: 100,
    marginBottom: 5,
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
});