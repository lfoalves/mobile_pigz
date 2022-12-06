import { StatusBar } from 'react-native';
import { AuthContextProvider } from './src/context/AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useFonts } from 'expo-font';
import { 
  Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold,
  Roboto_400Regular ,Roboto_500Medium ,Roboto_700Bold
} from '@expo-google-fonts/dev'

import { Loading } from './src/components/Loading'

import { Routes } from './src/routes';
import { Background } from './src/components/Background';
import { THEME } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ 
    Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold,
    Roboto_400Regular, Roboto_500Medium ,Roboto_700Bold
  })

  return (
    <Background>
      <SafeAreaProvider>
        <AuthContextProvider>
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={THEME.COLORS.WHITE}
            translucent
          />
          { fontsLoaded ? <Routes /> : <Loading /> }
        </AuthContextProvider>
      </SafeAreaProvider>
    </Background>
  );
}