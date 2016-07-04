require('react-native-mock/mock');

require("babel-register")({
    only: [
        "/node_modules/react-native-router-flux/*.js",
        "/node_modules/react-native-router-flux/src/*.js",
        "/client-ios/**/*",
        "/test/**/*",
    ]
});

var mockery = require('mockery');
mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false
});
mockery.registerMock('react-native-router-flux', {Actions:{}});
