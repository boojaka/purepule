app.directive('taskInput', function () {
    return {
        restrict:'E',
        replace:true,
        template: '<div><input   ng-model="inputText" type="text" placeholder="What you up to?"/>' +
                        '<input type="submit" value="add task"/>' +
                    '</div>'
    };
});
/*app.directive('task', function () {

    return {
        restrict:'E',
        replace:true,
        template: '<div>{{task.title}}</div>'
    };
});*/
