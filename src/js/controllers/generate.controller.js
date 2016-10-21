function GenerateController (Storage) {

  let vm = this;

  vm.downloadStudents = downloadStudents;
  vm.downloadProjects = downloadProjects;

  init();

  function init () {
    vm.students = Storage.getStudents();
    vm.projects = Storage.getProjects();
  }

  function downloadStudents () {
    let data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(vm.students));
    let studentElem = document.getElementById('downloadStudents');
    studentElem.setAttribute("href", data);
    studentElem.setAttribute("download", "students.json");
    studentElem.click();
  }

  function downloadProjects () {
    let data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(vm.projects));
    let projectElem = document.getElementById('downloadProjects');
    projectElem.setAttribute("href", data);
    projectElem.setAttribute("download", "projects.json");
    projectElem.click();
  }

}

GenerateController.$inject = ['Storage'];
export { GenerateController };