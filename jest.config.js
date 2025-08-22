// module.exports = {
//   preset: 'react-native',
//   verbose: true,

// };
// jest.config.js
module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFiles: ['./jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^react-redux$': '/testapp/src/app/__mocks__/react-redux.tsx',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@pembajak/react-native-image-slider-banner|react-native-swipe-modal-up-down|react-native-youtube-iframe|react-native-webview)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'identity-obj-proxy',
  },
};
