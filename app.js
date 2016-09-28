(function() {
  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.warnMessage = "";
    $scope.status = "";
    $scope.checkLunchMenu = function() {

      var items = $scope.lunchMenu;
      if (items === undefined) {
        $scope.warnMessage = "Please enter data first";
        $scope.status = "warn";
      } else if (items === '') {
        $scope.warnMessage = "Please enter data first";
        $scope.status = "warn";
      } else {
        var splitItems = items.split(',');
        if (splitItems.length <= 3) {
          $scope.warnMessage = "Enjoy!";
          $scope.status = "success";
        } else {
          $scope.warnMessage = "Too much!";
          $scope.status = "success";
        }
      }
    }
  };
})();
