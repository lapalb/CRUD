const app = angular.module('crud', []);
app.controller("crudController", ["$scope", function($scope){
    $scope.welcomebanner="Welcome to Crud Operation";
    $scope.emp=[];
    $scope.addEmp = function(){
        b={};
        b["id"]=$scope.empid;
        b["name"]=$scope.empname;
        b["salary"]=$scope.empsalary;
        b["designation"]=$scope.empdes;
        $scope.emp.push(b);

    }

    $scope.del =function(x){
        delete $scope.emp.splice(x,1);
        console.log("The val is " + x);
    }

    $scope.upd =function(x){
        $scope.upda=true;
        $scope.empidu=$scope.emp[x].id
        $scope.empnameu=$scope.emp[x].name
        $scope.empsalaryu=$scope.emp[x].salary
        $scope.empdesu=$scope.emp[x].designation
        $scope.rid=x;

    }
    $scope.upEmp =function(x){

        $scope.emp[$scope.rid].name=$scope.empnameu;
        $scope.emp[$scope.rid].salary=$scope.empsalaryu;
        $scope.emp[$scope.rid].designation=$scope.empdesu;
        $scope.upda=false;
    }
}])