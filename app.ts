/// <reference path="./typings/angularjs/angular.d.ts" />

import { Ctrl } from './ctrl';
import { Service } from './service';

import * as angular from 'angular';

Ctrl.$inject = ['$scope','srv'];

angular
    .module('app',[])
    .controller( 'ctrl', Ctrl )
    .service( 'srv', Service );