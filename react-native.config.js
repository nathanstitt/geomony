const path = require('path');

module.exports = {
  dependency: {
    platforms: {
      ios: {
        podspecPath: path.join(__dirname, 'Geomony.podspec'),
      },
      android: {
        sourceDir: path.join(__dirname, 'android'),
        cmakeListsPath: path.join(__dirname, 'cpp', 'CMakeLists.txt'),
      },
    },
  },
};
