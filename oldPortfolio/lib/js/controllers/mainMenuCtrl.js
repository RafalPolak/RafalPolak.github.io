var mainMenuCtrl = angular.module('mainMenuCtrl', []);

mainMenuCtrl
    .controller('mainCtrl', ['$scope', '$translate', function ($scope, $translate) {

        $scope.switchLanguage = function (key) {
            $translate.use(key);
        }

    }]);