import { View, Text, Image, StyleSheet } from "react-native";

const logo = require("/home/faelnbros/www/projets/perso/moviesQuotesGame/frontend/assets/logos/logoMain.png")

export default function HomeView({onLayout, navigation}) {
    return (
        <View style={styles.container} onLayout={onLayout} >
          <View>
            <Text style={styles.textStyleWelcome}>
              Welcome to the
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={logo} style={styles.image} />
              <Text style={styles.textStylePlay} onPress={() => navigation.navigate('Menu') }>
                Play
              </Text>
          </View>
        </View>
      );
}

const textStyle = {
  color: '#FFF',
  textShadowColor: '#F90',
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: 50,
  fontWeight: 400,
  fontFamily: "Dorsa_400Regular",
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1E1E1E',
  },
  imageContainer: {
    flex: 1,
    alignItems:"center",
  },
  textStyleWelcome: {
    ...textStyle,
    fontSize: 100,
    marginLeft: 40,
    marginTop: 60,
  },
  image: {
    width: 280,
    height: 280,
    marginTop: 60    
  },
  textStylePlay: {
    ...textStyle,
    fontSize: 80,
    marginTop: 60
  },
})