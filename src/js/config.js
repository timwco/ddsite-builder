function config ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

  localStorageServiceProvider.setPrefix('demoDaySiteGen');
  localStorageServiceProvider.setStorageType('localStorage');

  $stateProvider
    .state('main', {
      url: '/',
      controller: 'MainController as vm',
      templateUrl: 'templates/main.html'
    })
    .state('students', {
      url: '/students/:student',
      controller: 'StudentController as vm',
      templateUrl: 'templates/students.html'
    })
  

  $urlRouterProvider.otherwise('/')

}

config.$inject = ['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider'];
export { config };  