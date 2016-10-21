function Storage (localStorageService) {

  this.getStudents = getStudents;
  this.setStudents = setStudents;
  this.clearStudents = clearStudents;

  this.getProjects = getProjects;
  this.setProjects = setProjects;
  this.clearProjects = clearProjects;

  this.genId = genId;

  function getStudents () {
    let students = localStorageService.get('students');
    console.log('Getting Students', students);
    return (students) ? students : [];
  }

  function setStudents (list) {
    console.log('Setting Students', list);
    return localStorageService.set('students', list);
  }

  function clearStudents () {
    localStorageService.set('students', []);
    return [];
  }

  function getProjects () {
    let projects = localStorageService.get('projects');
    console.log('Getting Projects', projects);
    return (projects) ? projects : [];
  }

  function setProjects (list) {
    console.log('Setting Projects', list)
    return localStorageService.set('projects', list);
  }

  function clearProjects () {
    localStorageService.set('projects', []);
    return [];
  }

  function genId () {
    return new Date().valueOf(); 
  }

}

Storage.$inject = ['localStorageService'];
export { Storage };