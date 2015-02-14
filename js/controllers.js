app.controller('homeCtrl', function ($scope) {

});

app.controller('loginCtrl', function ($scope, $location, dataService) {
    $scope.data = {};
    $scope.auth = function (login, pass) {
        console.log('auth');
        dataService.auth($scope.data.login, $scope.data.pass).then(
            function (data) {
                console.log('authorized successfully');
            }, function () {
                console.log('authorization fail');
            });
        $location.path('/dashboard');
    };
});
app.controller('dashboardCtrl', function ($scope) {
    $scope.tasks = [
        {'title': 'Super task', 'date': 1423913049}
    ];
    $scope.addTask = function () {
        $scope.tasks.push({'title': $scope.inputText, 'date': Date.now() / 1000 | 0})
        $scope.inputText = '';
    };
});