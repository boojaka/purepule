app.factory('dataService', function ($http) {
    return {
        'auth':function(login,pass){

            return $http({
                url: '/api',
                method: "POST",
                data: {
                    login:login,
                    pass:pass
                },
                headers: { 'Content-Type': 'application/json' }
            });
        }
    };
});