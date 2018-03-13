import angular from 'angular';
import ngMessages from 'angular-messages';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngMaterialCss from 'angular-material/angular-material.css';
import appCss from './app.css';
import appConfiguration from './app.config';
import EmployeeRepository from './common/repository/EmployeeRepository.js';

const app=angular
  .module('practiceProjectApp', [ngMessages,ngRoute,ngAnimate,ngAria,ngMaterial])
  .config(appConfiguration)
  .service('EmployeeRepository',EmployeeRepository);

export {app};

