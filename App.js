import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Modal from "./Modal";

const App = () => {
  const [modal, setModal] = useState(false)


  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.name}>Ash Lynx</Text>
        <View style={styles.box1}>
          <Image style={styles.pic} source={{uri:"https://i.pinimg.com/236x/25/72/e6/2572e646f0d081b0c91e19ddb57233e9.jpg"}}/>
       </View>
       <TouchableOpacity style={styles.button} onPress={() => setModal(true)}>
        <Text style={styles.btntxt}>Saiba Mais!</Text>
       </TouchableOpacity>
       <Modal
       show={modal}
       close={()=>setModal(false)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    width:300,
    height:500,
    backgroundColor:"#ffc600",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    borderWidth:3,

  },
  name:{
    fontFamily:"Segoe Ui",
    marginBottom:10,
    fontSize:30,
    color:"#000",
    textAlign:"center",
    fontWeight:"bold",
  },
  box1:{
    marginBottom:130,
    width:250,
    height:250,
    backgroundColor:"#000",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    borderColor:"#ffe68e",
  },
  pic:{
    width:200,
    height:200,
    borderRadius:10,
  },
  button:{
    width:200,
    height:50,
    backgroundColor:"#000",
    display:"flex",
    justifyContent:"center",
    marginBottom:5,
    borderRadius:10,
  },
  btntxt:{
    color:"#fff",
    fontFamily:"Segoe Ui",
    textAlign:"center",
    fontSize:18,

  }
});

export default App