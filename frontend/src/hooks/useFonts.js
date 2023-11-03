import * as Font from 'expo-font';

const useFonts = async () => {
    await Font.loadAsync({
      Dorsa_400Regular: require('/home/faelnbros/www/projets/perso/moviesQuotesGame/frontend/assets/fonts/Dorsa-Regular.ttf'),
    });
  };

  export default useFonts;
