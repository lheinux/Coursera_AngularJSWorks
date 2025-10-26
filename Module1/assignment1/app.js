(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menuItems = ""; 
  $scope.message = ""; 
  $scope.isTooMuch = false; 
  $scope.checkIfTooMuch = function () {
    if ($scope.menuItems === "") {
      $scope.message = "No data entered.";
      $scope.isTooMuch = true; 
      return;
    }
    let itemsArray = $scope.menuItems.split(',');
    let countedItems = itemsArray.filter(function (item) {
      return item.trim() !== "";
    });

    const itemCount = countedItems.length;

    if (itemCount <= 3) {
      $scope.message = "Enjoy!";
      $scope.isTooMuch = false;
    } else {
      $scope.message = "Too much!";
      $scope.isTooMuch = true;
    }
  };
}
})();
