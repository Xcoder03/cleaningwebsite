let app = angular.module("myApps", ["ngRoute"])
app.config(function ($routeProvider) {
    $routeProvider
    .when(
        "/index",{
            templateUrl :"home.html"
        }
    )

    .when(
        "/about.html",{
            templateUrl :"about.html"
        }
    )
    .when(
        "/gallery.html",{
            templateUrl :"gallery.html"
        }
    )
    .when(
        "/blog.html",{
            templateUrl :"blog.html"
        }
    )

    .otherwise({
        redirectTo: "/index"
    }
        
    )
});