import _ from 'lodash';

function StudentController ($stateParams, localStorageService, $state) {

  let vm = this;

  vm.updateStudent = updateStudent;
  vm.students = [];

  init();

  function init () {
    let studentId = $stateParams.student;
    let studentsLS = localStorageService.get('students');
    vm.students = (studentsLS) ? studentsLS : [];
    vm.student = _.find(vm.students, { github: studentId });
  }

  function updateStudent () {
    let studentArr = _.remove(vm.students, (s) => {
      return s.github === $stateParams.student;
    });
    vm.students.push(vm.student);
    localStorageService.set('students', vm.students);
    $state.go('students');
  }

}

StudentController.$inject = ['$stateParams', 'localStorageService', '$state'];
export { StudentController };