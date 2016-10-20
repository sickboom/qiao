/**
 * Created by hxsd on 2016/10/5.
 */
angular.module("myapp")
    .controller("home_picCtrl", function ($scope, $stateParams, dataFactory) {
        // 解析url中的参数(通过url传递的参数，解析出来都是字符串)
        var title = $stateParams.title;


        var data = dataFactory.query();
        angular.forEach(data.productList, function (item) {
            if (item.title == title) {
                $scope.product = item;
                $scope.product.imgsrc = $scope.product.imgsrc.replace("50x50", "400x400");
                return false;   // 中断forEach循环 <=> break
            }
        });
    });