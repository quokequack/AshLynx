import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions} from 'react-native'


const {height} = Dimensions.get('window')

const Modal = ({show, close}) =>{
    const [state, setState] = useState({
        opacity: new Animated.Value(0),
        container: new Animated.Value(height),
        modal: new Animated.Value(height)
    })
const showModal = () =>{
        Animated.sequence([
            Animated.timing(state.container, {toValue: 0, duration:100}),
            Animated.timing(state.opacity, {toValue: 1, duration: 300}),
            Animated.spring(state.modal, {toValue: 0, bounciness: 5, useNativeDriver:true})
        ]).start()
    }
const backModal = () =>{
        Animated.sequence([
           Animated.timing(state.modal, {toValue:height, duration:250, useNativeDriver:true}),
           Animated.timing(state.opacity, {toValue:0, duration:300}),
           Animated.timing(state.container, {toValue:height, duration:100})
        ]).start()
    }
useEffect(() =>{
    if(show){
        showModal()
    }else{
        backModal()
    }
}, [show])

return(
            <Animated.View style={[styles.container,{
                opacity: state.opacity,
                transform: [
                    { translateY: state.container }
                ]
            }]}>
                <Animated.View style={[styles.modal,{
                    transform: [
                        { translateY: state.modal }
                    ]
                }]}>
                    <View style={styles.indicator}/>
                    <Text style={styles.about}>
                    Aslan Jade Callenreese, better known as Ash Lynx, is the protagonist of Banana Fish. Ash is given a sample of an unknown drug by a dying man and is targeted by Dino Golzine for what he is suspected to have.
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={close}>
                        <Text style={styles.back}>Voltar</Text>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        )
    }

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:"rgba(0, 0, 0, 0.5)",
        position:'absolute',
    },
    modal:{
        bottom:0,
        position:'absolute',
        height:'50%',
        width:"100%",
        backgroundColor:"#fff",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingLeft:25,
        paddingRight:25,
    },
    indicator:{
        width:50,
        height:5,
        backgroundColor:"#ccc",
        borderRadius:50,
        alignSelf:'center',
        marginTop:5,
    },
    about:{
        textAlign:'center',
        marginTop:20,
    },
    button:{
        width:"100%",
        height:50,
        borderRadius:10,
        backgroundColor:"#ffc600",
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    }
});

export default Modal