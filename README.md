<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html ng-app="istoomuch">
    <head>
        <title>TODO supply a title</title>
        <script src="js/js.js"></script>
        <script src="js/app.js"></script>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        
        <div ng-controller="howmuchcontoller">
            
            <h1>Check your Diet </h1> 
       <input type:"text" ng-model="food" >
              <button ng-click="check();" >check it out</button>
             
              {{state}}

            
            
            
        </div>
        
        
        
        
    </body>
</html>
