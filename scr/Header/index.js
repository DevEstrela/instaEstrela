import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'



export default function Header(){
    return(
      <View style={styles.telatoda} >
      <TouchableOpacity>
          <Image
            source={require('../img/logo.png')}
            
            />   
       </TouchableOpacity>
            
       <TouchableOpacity>
       <Image
           source={require('../img/send.png')}
           style={styles.send}
            />
        </TouchableOpacity>
            
      
      </View>
    )
}

const styles = StyleSheet.create({
    telatoda:{
       height: 55,
       backgroundColor: '#FFF',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       paddingLeft: 10,
       paddingRight: 10,
       borderBottomWidth: 0.2,
       shadowColor: '#000',
       elevation: 25,
    
    },
    send:{
        width: 23,
        height: 23
    }
})