function config ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

  localStorageServiceProvider.setPrefix('demoDaySiteGen');
  localStorageServiceProvider.setStorageType('localStorage');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
    .state('students', {
      url: '/students',
      controller: 'StudentsController as vm',
      templateUrl: 'templates/students.html'
    })
    .state('student', {
      url: '/students/:student',
      controller: 'StudentController as vm',
      templateUrl: 'templates/student.html'
    })
    .state('projects', {
      url: '/projects',
      controller: 'ProjectsController as vm',
      templateUrl: 'templates/projects.html'
    })
    .state('project', {
      url: '/projects/:project',
      controller: 'ProjectController as vm',
      templateUrl: 'templates/project.html'
    })
    .state('generate', {
      url: '/generate',
      controller: 'GenerateController as vm',
      templateUrl: 'templates/generate.html'
    })
  

  $urlRouterProvider.otherwise('/')

}

config.$inject = ['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider'];
export { config };  