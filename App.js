import React from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const urlToMyGithub = 'https://github.com/alanaafsc';
const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/48449273?v=4';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const App = () => {
  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      await Linking.openURL(urlToMyGithub);
    }
  }
    return (
      <SafeAreaView style={style.container}> 
        <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
        <View style={style.content}>
            <Image accessibilityLabel='Alana sorrindo' style={style.avatar} source={{uri: imageProfileGithub}} />
            <Text accessibilityLabel= 'Nome: Alana Fernandes ' style={[style.defaultText, style.name]}>Alana Fernandes</Text>
            <Text accessibilityLabel= 'nickname: alanaafsc' style={[style.defaultText,style.nickname]}>alanaafsc</Text>
            <Text accessibilityLabel= 'Descrição: Mechanical Engineering student at UFPE' style={[style.defaultText, style.description]}>Mechanical Engineering student at UFPE</Text>
        <Pressable onPress={handlePressGoToGithub}> 
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
          </View>
        </Pressable>     
        </View>
        
      </SafeAreaView>
    );
}

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1, // Expandir para a tela inteira
    justifyContent: 'center',
  },
  content:{
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText:{
    color: colorFontGithub,
    
  },
  name:{
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  nickname:{
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description:{
    fontSize: 14,
    fontWeight: 'bold',
  },
  button:{
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton:{
    fontSize: 16,
    fontWeight: 'bold',
  },
});

/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test mudança</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
