function StudentsController (Storage) {

  let vm = this;

  vm.addStudent = addStudent;
  vm.clearStudents = clearStudents;
  vm.student = {};

  init();

  function init () {
    vm.students = Storage.getStudents();
  }

  function addStudent () {
    vm.student.id = Storage.genId();
    vm.students.push(vm.student);
    vm.student = {};
    return Storage.setStudents(vm.students);
  }

  function clearStudents () {
    vm.students = Storage.clearStudents();
  }

}

StudentsController.$inject = ['Storage'];
export { StudentsController };