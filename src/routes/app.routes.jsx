import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { Profile } from '../screens/Profile';
import { Report } from '../screens/Report';
import { Delivery } from '../screens/Delivery';

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      animation: 'fade_from_bottom'
    }}>
      
      <Screen
        name={'home'}
        component={Home}
      />

      <Screen
        name={'report'}
        component={Report}
      />

      <Screen
        name={'profile'}
        component={Profile}
      />

      <Screen
        name={'delivery'}
        component={Delivery}
      />

    </Navigator>
  )
}