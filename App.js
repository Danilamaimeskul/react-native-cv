import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';


const skills =[
  {key: 'C++'},
  {key: 'Zabbix'},
  {key: 'HTML'},
  {key: 'CSS'},
  {key: 'JavaScript'},
  {key: 'React'},
  {key: 'React Native'},
  {key: 'English (B1)',},
];

export default function App() {
  return (
    <ScrollView >
      <Image 
        source={{
          uri: 'https://sun9-45.userapi.com/impg/rb5Cvnxkbi1Kx2Uv2hkMQq4RXIHzvGRgvRHpxA/3pWyL4M6fLw.jpg?size=960x1280&quality=95&sign=8a144c4ca5764b0289fb6eaf45046206&type=album  ',
        }}
        style={styles.avatar}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Maimeskul Danila {'\n'}
          Junior React Native Developer
        </Text>
        <View>
          <Text style={styles.usuallyText}>Contact me:</Text>
          <Text style={styles.usuallyText}>maimeskul.danila@yandex.ru{'\n'}
          +375 29 707 55 58{'\n'}
          Minsk
          </Text>
        </View>
        <AppText 
          title='About me:' 
        subtitle='My name is Danila Maimeskul. I’m 
        styding in Belarusian State University of Informatics and Radioelectronics. 
        At the moment I’m finishing 2nd course on the speciality programmable mobile systems.'
        />
        <Aducation />
        <Text style={styles.title}>Experience:</Text>
        <Experience 
          title='Rolling Scopes'
        date='Feb 2021 - Present'
        description='I started learning JavaScript at Rolling Scopes. This gave me a lot of 
        knowledge about HTML, CSS, JavaScript.'
        />
        <AppText 
          title='About React Native:' 
          subtitle='I started learning React Native at the end of May after reading about Student Lab. 
            In June, there was a short break during the summer session at the university.'
        />
        <View>
          <Text style={styles.title} >Skills:</Text>
          <Skills />
        </View>
        <View>
          <Text style={styles.title} >Hobbies:</Text>
          <Hobbies />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 360,
    height: 360
  },
  title:{
    fontSize:27,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  container: {
  },
  usuallyText: {
    paddingHorizontal: 10,
    lineHeight: 20,
    fontSize: 19,
    paddingVertical: 5
  }
});

function Skills() {
  return(
    <View>
      <FlatList data = {skills}     
      renderItem={({item}) => <Text style={styles.usuallyText}>{item.key}</Text>}
      />
    </View>
  );
}  

function Aducation(props) {
  return (
    <View>
      <Text style={styles.title}>University:</Text>
      <Text style={styles.usuallyText}>Belarusian State University of Informatics and Radioelectronics</Text>
      <Text style={styles.title}>Faculty:</Text>
      <Text style={styles.usuallyText}>Computer-Aided Design</Text>
      <Text style={styles.title}>Specialty:</Text>
      <Text style={styles.usuallyText}>Programmable mobile systems</Text>

    </View>    
  )
}  

function AppText (props) {
  return(
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.usuallyText}>{props.subtitle}</Text>
    </View>    
  );
}  

function Experience(props) {
  return(
    <View>
      <Text style={styles.usuallyText}>{props.title}</Text>
      <Text style={styles.usuallyText}>{props.date}</Text>
      <Text style={styles.usuallyText}>{props.description}</Text>
    </View>    
  )
}  


function Hobbies() {
  return(
    <View>
      <FlatList data = {[
        {key: 'Cooking'},
        {key: 'Make music in Ableton'},
        {key: 'View content about cars'},
        {key: 'Listen a lot of music :)'},
        ]}     
        renderItem={({item}) => <Text style={styles.usuallyText}>{item.key}</Text>}
      />
    </View>
  );
}  