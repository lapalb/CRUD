const app = angular.module('crud', ['ngAnimate','ngSanitize','ui.bootstrap']);
app.controller("crudController", ["$scope", function($scope){
    $scope.welcomebanner="Welcome to Crud Operation";
    $scope.filteredemp = [];
    $scope.pagination = {
    currentPage :1,
    numPerPage :10,
    maxSize:5};

    $scope.emp=[];
    $scope.addEmp = function(){
        b={};
        b["id"]=$scope.empid;
        b["name"]=$scope.empname;
        b["salary"]=$scope.empsalary;
        b["designation"]=$scope.empdes;
        $scope.emp.push(b);
        $scope.numPages = function () {
            return Math.ceil($scope.emp.length / $scope.pagination.numPerPage);
        };
        $scope.pagination.currentPage = $scope.numPages();
        var begin = (($scope.pagination.currentPage - 1) * $scope.pagination.numPerPage);
        var end = begin + $scope.pagination.numPerPage;
        $scope.filteredemp = $scope.emp.slice(begin, end);
    }

    $scope.pageChanged = function() {
        let  begin = (($scope.pagination.currentPage - 1) * 10);
        let end = begin + 10;
        $scope.filteredemp = $scope.emp.slice(begin, end);
    };

    $scope.del =function(x){
        x=x + 10*($scope.pagination.currentPage - 1)
        delete $scope.emp.splice(x,1);
        var begin = (($scope.pagination.currentPage - 1) * $scope.pagination.numPerPage);
        var end = begin + $scope.pagination.numPerPage;
        $scope.filteredemp = $scope.emp.slice(begin, end);
        console.log("The val is " + x);
    }

    $scope.upd =function(x){
        $scope.upda=true;
        console.log((($scope.pagination.currentPage-1)*10))
        $scope.empidu=$scope.emp[(($scope.pagination.currentPage-1)*10) + x].id+ (($scope.paginationcurrentPage-1)*10)
        $scope.empnameu=$scope.emp[(($scope.pagination.currentPage-1)*10) + x].name
        $scope.empsalaryu=$scope.emp[(($scope.pagination.currentPage-1)*10) + x].salary
        $scope.empdesu=$scope.emp[(($scope.pagination.currentPage-1)*10) + x].designation
        $scope.rid=x;

    }
    $scope.upEmp =function(x){

        $scope.emp[$scope.rid].name=$scope.empnameu;
        $scope.emp[$scope.rid].salary=$scope.empsalaryu;
        $scope.emp[$scope.rid].designation=$scope.empdesu;
        $scope.upda=false;
    }

}])