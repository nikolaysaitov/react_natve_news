import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {AppNavigator} from './navigation/AppNavigator';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../shared/ui/theme';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
const App: React.FC = () => {
  useEffect(() => {
    // здесь может быть любой асинхронный код
    // перед открытием приложения
    // прячем наш Splash Screen
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
