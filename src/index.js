import angular from 'angular';

const PRACTICE_MODULE_NAME = 'practiceProjectModule';
// creates a the project module
angular.module(PRACTICE_MODULE_NAME, []);


if (module.hot) {
  module.hot.accept();
}

export default PRACTICE_MODULE_NAME;

