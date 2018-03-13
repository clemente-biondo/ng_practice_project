import TicketListCtrl from './ticket/list/TicketListCtrl';
import TicketDetailCtrl from './ticket/detail/TicketDetailCtrl';

export default ['$mdThemingProvider','$routeProvider', '$locationProvider',function ($mdThemingProvider,$routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
  
  .when('/app/tickets', {
    template: require('./ticket/list/ticket_list.html'),
    controller: TicketListCtrl,
    controllerAs: 'ctrl',
    resolve:{
      employeeList:['EmployeeRepository', function(EmployeeRepository){
        return EmployeeRepository.findAllEmployees();  
      }]
    }
  })

  .when('/app/ticket/:id', {
    template: require('./ticket/detail/ticket_detail.html'),
    controller: TicketDetailCtrl,
  })
  
  .otherwise({
    redirectTo: '/app/tickets'
  });

  
}];
