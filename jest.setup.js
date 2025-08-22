// jest.setup.js
import 'react-native-gesture-handler/jestSetup';

// Mock react-native-webview
jest.mock('react-native-webview', () => {
  const WebView = () => 'WebView';
  return WebView;
});

// Mock other native modules if needed
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override this with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
