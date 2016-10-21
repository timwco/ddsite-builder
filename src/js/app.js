import angular from 'angular';
import 'angular-ui-router';
import 'angular-local-storage';

import { config } from './config';
import { StudentsController } from './controllers/students.controller'
import { StudentController } from './controllers/student.controller';
import { ProjectsController } from './controllers/projects.controller';
import { ProjectController } from './controllers/project.controller';
import { GenerateController } from './controllers/generate.controller';

import { Storage } from './services/storage.service';

angular
  .module('app', ['ui.router', 'LocalStorageModule'])
  .config(config)
  .controller('StudentsController', StudentsController)
  .controller('StudentController', StudentController)
  .controller('ProjectsController', ProjectsController)
  .controller('ProjectController', ProjectController)
  .controller('GenerateController', GenerateController)
  .service('Storage', Storage)