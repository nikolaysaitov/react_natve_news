/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/app/App';
import {name as appName} from './app.json';

// Импортируем полифиллы (если нужны)
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
