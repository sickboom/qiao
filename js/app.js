/**
 * Created by hxsd on 2016/9/30.
 */
var myapp=angular.module("myapp",["ionic"]);


//配置路由
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("tour", {
        url: "/tour",
        templateUrl: "views/tour/tour.html",
        controller: "tourCtrl"


    }).state("tabs",{
            url:"/tabs",
            abstract:true,
            templateUrl:"views/tabs/tabs.html"
    }).state("tabs.home",{
        url:"/home",
        views:{"tab-home":{templateUrl:"views/home/home.html"}}
    }).state("tabs.about",{
        url:"/about",
        views:{"tab-about":{templateUrl:"views/about/about.html"}}
    }).state("tabs.new",{
        url:"/new",
        views:{"tab-new":{templateUrl:"views/new/new.html",controller:"newCtrl"}}

    }).state("tabs.ask",{
        url:"/ask",
        views:{"tab-ask":{templateUrl:"views/ask/ask.html", controller:"askCtrl"}}

    }).state("tabs.search", {
        url: "/search",
        views: {"tab-new":{templateUrl: "views/search/search.html"}}

    }).state("tabs.home_pic", {
        url: "/home_pic",
        views: {"tab-home":{templateUrl: "views/home_pic/home_pic.html",controller:"home_picCtrl"}}

    }).state("tabs.new_count", {
        url: "/new_count?:title",
        views: {"tab-new":{templateUrl: "views/new_count/new_count.html",controller:"new_countCtrl"}}

    })

        //默认路由
    $urlRouterProvider.otherwise("/tour")
})

myapp.factory("dataFactory", function ($http) {
    var data = {productList: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中
    $http.get("data.json").success(function (_data, status, headers, config) {
        data.productList = _data;
    });
    return {
        query: function () {
            return data;   // 返回数据
        } // end query
    };
});

