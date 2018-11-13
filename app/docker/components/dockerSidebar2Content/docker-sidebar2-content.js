angular.module('portainer.docker').component('dockerSidebar2Content', {
  templateUrl: 'app/docker/components/dockerSidebar2Content/dockerSidebar2Content.html',
  bindings: {
    endpointApiVersion: '<',
    swarmManagement: '<',
    standaloneManagement: '<',
    adminAccess: '<',
    offlineMode: '<'
  }
});
