/**
 * Created by hxsd on 2016/10/11.
 */
angular.module("myapp")
    .controller("new_countCtrl", function ($scope, $stateParams,$http) {
        // 解析url中的参数(通过url传递的参数，解析出来都是字符串)
        var title = $stateParams.title;

        // 查询出来要显示在view中的商品数据
      //  var data = dataFactory.query();

        var url = "new.json";   // 请求的url
        $http.get(url)
            .success(function (response) {
                angular.forEach(response.news, function (item) {
                    if (item.name == title) {
                        $scope.product = item;
                        return false;   // 中断forEach循环 <=> break
                    }
                });

            })
    });