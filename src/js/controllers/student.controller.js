import _ from 'lodash';

function StudentController ($stateParams, Storage, $state) {

  let vm = this;

  vm.updateStudent = updateStudent;
  vm.deleteStudent = deleteStudent;
  vm.students = [];

  init();

  function init () {
    let studentId = $stateParams.student;
    vm.students = Storage.getStudents();
    vm.student = _.find(vm.students, { id: Number(studentId) });
  }

  function updateStudent () {
    vm.students = _.filter(vm.students, (s) => {
      return s.id !== Number($stateParams.student);
    });
    vm.students.push(vm.student);
    Storage.setStudents(vm.students);
    $state.go('students');
  }

  function deleteStudent () {
    let updatedStudents = _.filter(vm.students, (s) => {
      return s.id !== Number($stateParams.student);
    });
    Storage.setStudents(updatedStudents);
    $state.go('students');
  }

}

StudentController.$inject = ['$stateParams', 'Storage', '$state'];
export { StudentController };