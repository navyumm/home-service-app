import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function Login() {
  return (
    <View style={{alignItems : 'center'}}>
      <Image source={require('./../../../assets/images/login.png')}
        style={styles.loginImage}
      />

      <View style={styles.subContainer}>
        <Text style={{fontSize:25, color: Colors.WHITE, textAlign: 'center'}}>
          Let's Find  
          <Text style={{fontWeight: 'bold'}}> Professional Cleaning and repair</Text> Service
        </Text>

        <Text style={{fontSize: 15, color: Colors.WHITE, textAlign: 'center', marginTop: 20}}>
          Best App to find services near you which deliver you a Professional service
        </Text>

        <TouchableOpacity 
        style={styles.button}
        onPress={()=> console.log("Button Clicked")}
        >
          <Text 
          style={{
            textAlign: 'center', 
            fontSize: 15, 
            color: Colors.PRIMARY
            }}>
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginImage: {
    width : 220,
    height : 425,
    marginTop : 50,
    borderWidth : 4,
    borderColor : Colors.BLACK,
    borderRadius : 15,
  },
  subContainer : {
    width : '100%',
    height : '40%',
    backgroundColor: Colors.PRIMARY,
    marginTop : -15,
    borderTopLeftRadius : 20,
    borderTopRightRadius : 20,
    padding : 20,
    // alignItems : 'center'

  },
  button: {
    backgroundColor: Colors.WHITE,
    padding : 15,
    borderRadius : 999,
    marginTop : 30
  }
})