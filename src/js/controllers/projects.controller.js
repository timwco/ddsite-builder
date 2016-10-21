function ProjectsController (Storage) {

  let vm = this;

  vm.project = {};
  vm.addProject = addProject;
  vm.clearProjects = clearProjects;

  init();

  function init () {
    vm.students = Storage.getStudents();
    vm.projects = Storage.getProjects();
    console.log(vm.projects);
  }
  
  function addProject () {
    vm.project.id = Storage.genId();
    vm.projects.push(vm.project);
    vm.project = {};
    return Storage.setProjects(vm.projects);
  }

  function clearProjects () {
    return Storage.clearProjects();
  }


}

ProjectsController.$inject = ['Storage'];
export { ProjectsController };