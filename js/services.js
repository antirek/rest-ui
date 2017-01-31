/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('movieApp.services',[]).factory('Movie',function($resource){
    return $resource('http://localhost:3000/trunk/:id',{id:'@_id'});
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});