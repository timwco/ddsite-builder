function ProjectsController (Storage) {

  let vm = this;

  vm.project = {};
  vm.addProject = addProject;
  vm.clearProjects = clearProjects;

  init();

  function init () {
    vm.students = Storage.getStudents();
    vm.projects = Storage.getProjects();
  }
  
  function addProject () {
    vm.project.id = Storage.genId();
    vm.projects.push(vm.project);
    vm.project = {};
    return Storage.setProjects(vm.projects);
  }

  function clearProjects () {
    vm.projects = Storage.clearProjects();
  }


}

ProjectsController.$inject = ['Storage'];
export { ProjectsController };