//Controller that consol log value of ID parametar in URL
export default ['$log','$routeParams',function ($log,$routeParams){
  $log.info("id:"+$routeParams.id);
}];
