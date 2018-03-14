//This method get the list of all employees from db.json file
export default ['$http',function ($http){
  this.findAllEmployees=()=>$http.get('/api/employees').then(resp =>resp.data);
}];
