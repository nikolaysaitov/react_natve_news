import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {AppNavigator} from './navigation/AppNavigator';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../shared/ui/theme';

import SplashScreen from 'react-native-splash-screen';
const App: React.FC = () => {
  useEffect(() => {
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
