import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native'
import Header from './scr/Header'
import List from './scr/List'



export default function App(){
  const [feed, setFeed] = useState([
      {
          id: '1',
          nome: 'Renan Neves',
          descricao: 'Guilherme deveria ser o garoto propaganda do Méqui',
          imgperfil: 'https://scontent-gru1-1.xx.fbcdn.net/v/t1.18169-9/11209667_759799270807207_8824124322507256300_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bO-Zrb0lPOQAX-Z_lzw&_nc_ht=scontent-gru1-1.xx&oh=00_AT-dhL3rcXFgo-1UQXaV0yUIk1hPlg-RzJRDrhyftRuA9Q&oe=62032295',
          imgPublicacao: 'https://scontent-gru2-1.xx.fbcdn.net/v/t39.30808-6/220794554_2088668594607450_3926069654684469430_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=4WRL5FSif_oAX_pfWkK&tn=DlYCMGVwY2qS0tuU&_nc_ht=scontent-gru2-1.xx&oh=00_AT-tblguHZdUEbLT9frXmvMl4c96brXRKgymlR2Eqc_stg&oe=61E2435D',
          likeada: true,
          likers: 100
          
      },
      {
       id: '2',
       nome: 'Fiipi Lelli ',
       descricao: 'Minha familia é meu tesouro',
       imgperfil: 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/39809501_2118481081699642_7091631969435385856_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bX0uAPPWpFYAX_zs25L&_nc_ht=scontent-gru2-1.xx&oh=00_AT9R1RGWt5ILLCFmhZMxoAzhZttS6hP5B8tdmCPfmG0ZbQ&oe=62026511',
       imgPublicacao: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/44753613_2151436728404077_6311590033589534720_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=19026a&_nc_ohc=vilXFrbfosIAX9jPRkJ&_nc_ht=scontent-gru2-2.xx&oh=00_AT9WyRVXluKyzqDHlo1S8aEo3GPtIvHFbgTQYU-1ggqslQ&oe=6200EBC2',
       likeada: true,
       likers: 99
       
   },
   {
       id: '3',
       nome: 'Luana Serafina',
       descricao: 'Sou muito lindo cara',
       imgperfil: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/101167926_2743816345745004_9144699321302646784_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=SwiRsxAkc6wAX_AJ7lT&_nc_ht=scontent-gru2-2.xx&oh=00_AT-8tAv-U7qwpxpNuVisNcp9zDKZHNZHOcTAs6zMywiHEg&oe=62014DAA',
       imgPublicacao: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/171934103_3609176612542302_9055523234220451104_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_ohc=JM1UwK0Yzk8AX9nGiTP&_nc_ht=scontent-gru2-2.xx&oh=00_AT9TW7qaOaHOZqOuHS7VILgiz-F1Od-yrRFiSwMShLJcnQ&oe=62032F7F',
       likeada: true,
       likers: 50
       
   },
   {
       id: '4',
       nome: 'Henrique Estrela',
       descricao: 'Fevereiro com f de Ferias em santa Catarina',
       imgperfil: 'https://scontent-gru1-1.xx.fbcdn.net/v/t1.6435-9/186508590_3806892752772173_7595870427863808293_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=TzuQ3Ol-GekAX8aw0YI&tn=DlYCMGVwY2qS0tuU&_nc_ht=scontent-gru1-1.xx&oh=00_AT-pliqb2B_6oRAgA36DJ19fqN8hiXjoT-KSK7C6PgJy5g&oe=62035BCD',
       imgPublicacao: 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/66435994_2174196706041794_1259969823543132160_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=oYwq4oM3XjYAX8IIK9e&tn=DlYCMGVwY2qS0tuU&_nc_ht=scontent-gru2-1.xx&oh=00_AT8RD3ng_TDIJ0V8QRUHJP3SQ0l_B8XZNm8MQ-jPGcBXPw&oe=62006D87',
       likeada: true,
       likers: 1
       
   },
   {
       id: '5',
       nome: 'Neta dos Santos',
       descricao: 'Hoje estou fabulosa',
       imgperfil: 'https://scontent-gru1-1.xx.fbcdn.net/v/t1.6435-9/134058205_100370552022953_5394959379047496729_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=XhHaxBGdvE0AX-IGVwJ&_nc_ht=scontent-gru1-1.xx&oh=00_AT9WFfJgsBu6oq_jsWJtoU-LP5tY2NyJWY0lgcy4IPkauA&oe=620005BF',
       imgPublicacao: 'https://scontent-gru1-1.xx.fbcdn.net/v/t1.6435-9/135483157_100369135356428_2078941761079643548_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=N5_UX9hn3BsAX8M2X2J&_nc_ht=scontent-gru1-1.xx&oh=00_AT-eg30DDP6cr-tPEMnq8INFtNAeQf_tF0K5M9xoJdMfFg&oe=62002C79',
       likeada: false,
       likers: 0
       
   },
  ])

   return(
     <View style={styles.telatoda} >
         <Header/>

       <FlatList
       data={feed}
       renderItem={({item}) => <List data={item} /> }
       
       />

     </View>
   )
}

const styles = StyleSheet.create({
   telatoda:{
      flex: 1,
      
   }
})