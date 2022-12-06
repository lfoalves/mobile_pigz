import { useAuth } from '../hooks/useAuth';
import { NavigationContainer } from '@react-navigation/native'

import { SignIn } from '../screens/SignIn';

import { AppRoutes } from './app.routes'

export function Routes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>      
      { user ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  )
}