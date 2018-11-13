angular.module('portainer.docker').component('jobsOverview', {
  templateUrl: 'app/docker/components/jobs-overview/jobs-overview.html',
  bindings: {
    hostDetails: '<',
    engineDetails: '<',
    devices: '<',
    disks: '<',
    isAgent: '<',
    offlineMode: '<',
    agentApiVersion: '<',
    refreshUrl: '@',
    browseUrl: '@',
    jobUrl: '@',
    isJobEnabled: '<',
    jobs: '<'
  },
  transclude: true
});
