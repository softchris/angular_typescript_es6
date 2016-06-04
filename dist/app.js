"use strict";
var ctrl_1 = require('./ctrl');
var angular = require('angular');
ctrl_1.Ctrl.$inject = ['$scope'];
angular
    .module('app', [])
    .controller('ctrl', ctrl_1.Ctrl);
//# sourceMappingURL=app.js.map