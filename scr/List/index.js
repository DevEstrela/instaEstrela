import React  from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'



export default function List(props){
 

    function Verificacao(likers){      //Verificação de likers
        if(likers === 0){
           return
        }
       return(
           <Text style={styles.curtidas} >{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>  
       )
    }

  
    function CarregaIcone(likeada){      //Verificação do icone de like
        return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }


    return(  

       //Views que fazem a criação do feed do instagram.
       //As imagem das publicações são chamadas via props.data
       //headerFeed foi criado para ficar a foto de perfil e o nome do usuario
       //headerDescricao foi criado para ficar os icones de liker, comentario e direct.
       //Foi feita Verificações de icone se tem like ou não tem like.
      

      <View style={styles.telaFeed} > 
        
         <View style={styles.headerFeed} >
          <Image
          source={{uri: props.data.imgperfil}}
          style={styles.imgPerfil}
          />

          <Text style={styles.nomePerfil} >{props.data.nome}</Text>
       </View>

         
            <Image
          source={{uri: props.data.imgPublicacao}}
          style={styles.imgPublicacao}
          />  
          
         

        
         <View style={styles.headerDescricao} > 
             <TouchableOpacity>
             <Image
               resizeMode='cover'
               source={CarregaIcone(props.data.likeada)}
               style={styles.like}
             />
             </TouchableOpacity>
            
         
             <TouchableOpacity>
             <Image
                resizeMode='cover'
                source={require('../img/comment.png')}
                style={styles.comment}
             />  
             </TouchableOpacity>
           
             <TouchableOpacity>
             <Image
                   resizeMode='cover'
                   source={require('../img/send.png')}
                   style={styles.send}
             />
             </TouchableOpacity>

         </View>
          
            
           {Verificacao(props.data.likers)}  

            <Text style={styles.likers}>{props.data.nome}</Text>
     

        <View style={styles.coment} >
            <Text style={styles.comentario}>{props.data.descricao}</Text>
        </View>
        

      </View>
    )
}

const styles = StyleSheet.create({
    headerFeed:{
        flex: 1,
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center',
        
    },
    imgPerfil:{
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nomePerfil:{
      fontSize: 19,
      color: 'black',
      marginLeft: 9
    },
    imgPublicacao:{
        height: 400,
        alignItems: 'center'
    },
    headerDescricao:{
      flexDirection: 'row',
      paddingLeft: 5,
      margin: 5
    },    
    comment:{
        width: 23,
        height: 23,
       marginLeft: 10,
    },
    like:{
        width: 23,
        height: 23,
    },
    send:{
        width: 23,
        height: 23,
        marginLeft: 10,
    },
    likers:{
        fontWeight: 'bold',
        color: 'black'

    },
    comentario:{
        color: 'black'
    },
    coment:{
        marginBottom: 10
    },
    curtidas:{
        color: 'black',
        fontWeight: 'bold'
    }
})