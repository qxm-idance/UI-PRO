angular.module('ui.cut',[])
    .filter('cut',[function(){
        return function(txt,num){
            return String(txt).cut(num);
        }
    }]);