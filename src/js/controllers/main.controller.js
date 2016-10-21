function MainController (localStorageService) {

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
    console.log('here');
    vm.students = [];
    return localStorageService.set('students', vm.students);
  }

}

MainController.$inject = ['localStorageService'];
export { MainController };