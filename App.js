import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screen/HomeScreen';
import {AddNoteScreen} from './Screen/AddNoteScreen';
import {ModifyNoteScreen} from './Screen/ModifyNoteScren';
import {NoteProvider} from './Contaxts/NoteContext';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    AddNoteScreen: {
      Screen: AddNoteScreen,
    },
    ModNote: {
      screen: ModifyNoteScreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(RootStack);

const App = () => (
  <NoteProvider>
    <AppContainer />
  </NoteProvider>
);

export default App;