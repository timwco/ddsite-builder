import _ from 'lodash';

function ProjectController (Storage, $stateParams, $state) {

  let vm = this;

  vm.updateProject = updateProject;
  vm.deleteProject = deleteProject;

  init();

  function init () {
    let projectId = $stateParams.project;
    vm.projects = Storage.getProjects();
    vm.students = Storage.getStudents();
    vm.project = _.find(vm.projects, { id: Number(projectId) });
  }

  function updateProject () {
    vm.projects = _.filter(vm.projects, (p) => {
      return p.id !== Number($stateParams.project);
    });
    vm.projects.push(vm.project);
    Storage.setProjects(vm.projects);
    $state.go('projects'); 
  }

  function deleteProject () {
    vm.projects = _.filter(vm.projects, (p) => {
      return p.id !== Number($stateParams.project);
    });
    Storage.setProjects(vm.projects);
    $state.go('projects');  
  }

}

ProjectController.$inject = ['Storage', '$stateParams', '$state'];
export { ProjectController };