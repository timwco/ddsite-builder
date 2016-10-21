function Storage (localStorageService) {

  this.getStudents = getStudents;
  this.setStudents = setStudents;
  this.clearStudents = clearStudents;

  this.getProjects = getProjects;
  this.setProjects = setProjects;
  this.clearProjects = clearProjects;

  this.genId = genId;

  let debug = false;

  init();

  function init() {
    let d = localStorageService.get('debug');
    debug = (d) ? d : false;
    localStorageService.set('debug', debug);
    console.log('Debug On', debug);
  }

  function getStudents () {
    let students = localStorageService.get('students');
    if (debug) console.log('Getting Students', students);
    return (students) ? students : [];
  }

  function setStudents (list) {
    if (debug) console.log('Setting Students', list);
    return localStorageService.set('students', list);
  }

  function clearStudents () {
    localStorageService.set('students', []);
    return [];
  }

  function getProjects () {
    let projects = localStorageService.get('projects');
    if (debug) console.log('Getting Projects', projects);
    return (projects) ? projects : [];
  }

  function setProjects (list) {
    if (debug) console.log('Setting Projects', list)
    return localStorageService.set('projects', list);
  }

  function clearProjects () {
    localStorageService.set('projects', []);
    return [];
  }

  function genId () {
    return new Date().valueOf(); 
  }

  function toggleDebug () {
    debug = (debug === false) ? true : false;
    localStorageService.set('debug', debug);
  }

}

Storage.$inject = ['localStorageService'];
export { Storage };