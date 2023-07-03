import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';

import { Categories } from './screens';
import { styles } from './styles';

const App = () => {
  const [loaded] = useFonts({
    'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Thin': require('../assets/fonts/Lato-Thin.ttf'),
  });

  if (!loaded) {
    return (
      <View>
        <ActivityIndicator size="large" color="#000ff" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Categories />
    </View>
  );
};

export default App;
