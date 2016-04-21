var app = angular.module('myModule', []);


app.directive('funkyHeader', function(){
    return {
        restrict: "AE",
        template: "<img src='img/cat.png'><img src='img/cat.png'><img src='img/cat.png'><img src='img/cat.png'>",
        replace: false
    };
});

app.directive('links', function(){
    return {
        restrict: "AE",
        template: "<div><a href='https://www.facebook.com'>LINKS</a></div>",
        replace: false
    };
});

app.directive('containment', function(){
    return {
        restrict: "AE",
        template: "<p></p>",
        replace: false
    };
});

app.directive('sideBar', function(){
    return {
        restrict: "AE",
        template: "<div></div>",
        replace: false
    };
});
