(function () {
         'use strict'
         angular.module('istoomuch',[])
                 .controller('howmuchcontoller',howmuchcontoller)
         
         /**
          * Comment
          */
    function howmuchcontoller($scope) {
        $scope.food='';
        $scope.state='no entery!';
        $scope.totalvalue=0;
        
            $scope.check=  function () {
                 var totalnamecvalue=calc($scope.food)
                  $scope.totalvalue=totalnamecvalue;
                  if($scope.food=="")
                      $scope.state="no entery!"
                  else{
                  if(totalnamecvalue>3)
                      $scope.state="Too much"
                  else if(totalnamecvalue==0)
                      $scope.state=""
                  else
                      $scope.state="enjoy!"
                         
                }             
                                };
                             
                        function calc(string) {
                            var totalStringvalue=1;
                            for (var i=0;i<string.length;i++){
                               if(string.charAt(i)==',')
                                   totalStringvalue++;
                                
                            }
                            return totalStringvalue;
                            
                        }
        
        
    }
        




})();
        