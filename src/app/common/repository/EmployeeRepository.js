export default ['$http',function ($http){
  this.findAllEmployees=()=>$http.get('/api/employees').then(resp =>resp.data);
}];
