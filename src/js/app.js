import angular from 'angular';
import 'angular-ui-router';
import 'angular-local-storage';

import { config } from './config';
import { MainController } from './controllers/main.controller'
import { StudentController } from './controllers/student.controller';

angular
  .module('app', ['ui.router', 'LocalStorageModule'])
  .config(config)
  .controller('MainController', MainController)
  .controller('StudentController', StudentController)