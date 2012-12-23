// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  baseUrl: 'js',
  deps:["main"],
  paths: {
    // Major libraries
    jquery: 'libs/jquery',
    campatibility:'motion/compatibility', 
    detect: 'libs/objectdetect',
    'jquery-detect': 'libs/jquery.objectdetect',
    smoother: 'libs/smoother',
    swobject: 'libs/swfobject'
  },
  shim: {
    'detect':['jquery'],
    'jquery-detect':['jquery','detect'],
    buffer: ['jquery'] 
  }

});

// Let's kick off the application

