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


export default class Users extends Component {

    

  constructor(props) {
    super(props);
    this.state = {
        data: [
            {id:1, color:"#00C2EE", icon:"https://www.flaticon.com/svg/static/icons/svg/3923/3923664.svg", name: "User 1", tags:['Turma', 'Notas', 'Melhores pontuações']},
            {id:2, color:"#9200D6", icon:"https://www.flaticon.com/svg/static/icons/svg/3922/3922849.svg", name: "User 2", tags:['Turma', 'Notas', 'Melhores pontuações']}, 
            {id:3, color:"#F9E800", icon:"https://www.flaticon.com/svg/static/icons/svg/3923/3923664.svg", name: "User 3", tags:['Turma', 'Notas', 'Melhores pontuações']}, 
            {id:4, color:"#FF271C", icon:"https://www.flaticon.com/svg/static/icons/svg/3922/3922849.svg", name: "User 4", tags:['Turma', 'Notas', 'Melhores pontuações']}, 
            {id:5, color:"#00C2EE", icon:"https://www.flaticon.com/svg/static/icons/svg/3922/3922849.svg", name: "User 5", tags:['Turma', 'Notas', 'Melhores pontuações']}, 
            {id:6, color:"#9200D6", icon:"https://www.flaticon.com/svg/static/icons/svg/3923/3923664.svg", name: "User 6", tags:['Turma', 'Notas', 'Melhores pontuações']}, 
            {id:7, color:"#F9E800", icon:"https://www.flaticon.com/svg/static/icons/svg/3922/3922849.svg", name: "User 7", tags:['Turma', 'Notas', 'Melhores pontuações']}, 
            {id:8, color:"#FF271C", icon:"https://www.flaticon.com/svg/static/icons/svg/3923/3923664.svg", name: "User 8", tags:['Turma', 'Notas', 'Melhores pontuações']},
            {id:9, color:"#00C2EE", icon:"https://www.flaticon.com/svg/static/icons/svg/3922/3922849.svg", name: "User 9", tags:['Turma', 'Notas', 'Melhores pontuações']},
        ],
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
        <Text style={styles.ranking}> ALUNOS</Text>
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
    marginBottom: 10,
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