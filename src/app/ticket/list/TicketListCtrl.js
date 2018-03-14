//Controler that set variable employeeList with list of all employees
export default ['$log','employeeList',function ($log,employeeList){
  $log.info("controller loaded.");
  this.employeeList=employeeList;
}];