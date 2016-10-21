function StudentsController (localStorageService) {

  let vm = this;

  vm.addStudent = addStudent;
  vm.clearStudents = clearStudents;
  vm.student = {};

  init();

  function init () {
    let studentData = localStorageService.get('students');
    vm.students = studentData ? studentData : [];
    console.log(vm.students);
  }

  function addStudent () {
    vm.students.push(vm.student);
    vm.student = {};
    return localStorageService.set('students', vm.students);
  }

  function clearStudents () {
    vm.students = [];
    return localStorageService.set('students', vm.students);
  }

}

StudentsController.$inject = ['localStorageService'];
export { StudentsController };