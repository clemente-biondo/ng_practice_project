export default ['$log','employeeList',function ($log,employeeList){
  $log.info("controller loaded.");
  this.employeeList=employeeList;
}];