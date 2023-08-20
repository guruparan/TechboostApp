/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppContext from './src/state/AppContext';
import SessionDetail from './src/state/SessionDetail';
import HomeScreen from './src/pages/home/Home';
import CreateItemScreen from './src/pages/create/CreateItemScreen';
import ItemDetailsScreen from './src/pages/itemDetails/ItemDetailsScreen';
import RootStackParamList from './src/state/RootParam';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const [data, setData] = useState<SessionDetail[]>([
    {
      Name: 'Test value',
      Duration: 60,
      Instructor: 'John Doe',
      SessionDate: new Date(),
    },
  ]);

  return (
    <AppContext.Provider value={{data, setData}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddItem" component={CreateItemScreen} />
          <Stack.Screen name="ViewItem" component={ItemDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;
