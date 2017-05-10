var webApp = angular.module("webApp", [
//internal lib
    'mainMenuCtrl',
//external lib
    'ui.router',
    'ngAnimate',
    'ui.bootstrap',
    'pascalprecht.translate'
]);

webApp.config(function ($stateProvider, $urlRouterProvider, $translateProvider) {
    //if state not found redirect to aboutMe
    $urlRouterProvider.otherwise("/aboutMe");
    //
    // Now set up the states
    $stateProvider
        .state('aboutMe', {
            url: "/aboutMe",
            templateUrl: "partials/aboutMe.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "partials/contact.html"
        })
        .state('projects', {
            url: "/projects",
            templateUrl: "partials/projects.html"
        })
        .state('repo', {
            url: "/repo",
            templateUrl: "partials/repo.html"
        })
        .state('skills', {
            url: "/skills",
            templateUrl: "partials/skills.html"
        })
        .state('blog', {
            url: "/blog",
            templateUrl: "partials/blog.html"
        })

    $translateProvider.useStaticFilesLoader({
        prefix: 'lib/i18n/locale-',
        suffix: '.json'
    });

    $translateProvider.use('en_US');
    $translateProvider.useSanitizeValueStrategy('escape');

});
