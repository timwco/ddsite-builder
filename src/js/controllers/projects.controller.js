function ProjectsController (localStorageService) {

  let vm = this;

  vm.project = {};
  vm.addProject = addProject;
  vm.clearProjects = clearProjects;

  init();

  function init () {
    let projects = localStorageService.get('projects');
    vm.students = localStorageService.get('students');
    vm.projects = projects ? projects : [];
    console.log(vm.projects);
  }
  
  function addProject () {
    vm.project.id = new Date().valueOf();
    vm.projects.push(vm.project);
    vm.project = {};
    return localStorageService.set('projects', vm.projects);
  }

  function clearProjects () {
    vm.projects = [];
    return localStorageService.set('projects', vm.projects);
  }


}

ProjectsController.$inject = ['localStorageService'];
export { ProjectsController };