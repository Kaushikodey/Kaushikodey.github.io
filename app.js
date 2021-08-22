(function(){

    'use strict';
    angular.module('LunchCheck',[]).controller('LunchCheckController',DIController);
    DIController.$injector=['$scope'];
    function DIController($scope)
    {
        $scope.LunchItems="";
        $scope.Message="";
        $scope.GetLunchStatement = function()
        {
            if($scope.LunchItems=="")
            $scope.Message= "Please enter data first";
            else
            {
                var ItemArr = $scope.LunchItems.split(',');
                var ItemArrWithoutEmpty= ItemArr.filter(function (e) { return e.replace(/(\r\n|\n|\r)/gm,"")});
                var LunchItemCount= ItemArrWithoutEmpty.length;
                if(LunchItemCount==0)
                   $scope.Message= "Please enter data first";
                else if(LunchItemCount<=3)
                  $scope.Message= "Enjoy!";
                else
                  $scope.Message= "Too much!";
            }
        };
    };

})();