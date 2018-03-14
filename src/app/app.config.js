//import of controllers
import TicketListCtrl from './ticket/list/TicketListCtrl';
import TicketDetailCtrl from './ticket/detail/TicketDetailCtrl';

//exporting object so it can be used in another part of application with import statement
export default ['$mdThemingProvider','$routeProvider', '$locationProvider',function ($mdThemingProvider,$routeProvider, $locationProvider) {

  //To make URL readable for user
  $locationProvider.html5Mode(true);

  //Configuring routs
  $routeProvider

  .when('/app/tickets', {
    template: require('./ticket/list/ticket_list.html'),
    controller: TicketListCtrl,
    controllerAs: 'ctrl',
    resolve:{
      //Here we create object that can list all employees.
      //From repository we call method findAllEmployees() to get all values
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
