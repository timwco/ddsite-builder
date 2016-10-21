import _ from 'lodash';

function GenerateController (Storage) {

  let vm = this;

  vm.buildDownload = buildDownload;

  init();

  function init () {
    let projects = Storage.getProjects();
    let students = Storage.getStudents();
    vm.projects = addStudentData(projects, students);
  }

  function buildDownload () {
    downloadProjects(vm.projects);
  }


  function downloadProjects (projects) {
    let data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(projects));
    let projectElem = document.getElementById('downloadProjects');
    projectElem.setAttribute("href", data);
    projectElem.setAttribute("download", "projects.json");
    projectElem.click();
  }

  function addStudentData (projects, students) {
    return _.map(projects, (p) => {
      p.students = _.map(p.students, (s) => {
        return _.find(students, { github: s });
      });
      return p;
    });
  }

}

GenerateController.$inject = ['Storage'];
export { GenerateController };