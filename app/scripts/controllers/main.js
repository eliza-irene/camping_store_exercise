'use strict';

/**
 * @ngdoc function
 * @name campingStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the campingStoreApp
 */
angular.module('campingStoreApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.inventory = [
    { id :  1, category : 'water bottle', description : 'Small Water Bottle',   price :   2.99, qty : 0 },
    { id :  2, category : 'water bottle', description : 'Large Water Bottle',   price :   2.99, qty : 0, onSale: true },
    { id :  3, category : 'flashlight',   description : 'Small Flashlight',     price :   6.99, qty : 0 },
    { id :  4, category : 'flashlight',   description : 'Big Flashlight',       price :  12.99, qty : 0 },
    { id :  5, category : 'stove',        description : 'Small Stove',          price :  29.99, qty : 0 },
    { id :  6, category : 'stove',        description : 'Big Stove',            price :  29.99, qty : 0, onSale: true },
    { id :  7, category : 'sleeping bag', description : 'Simple Sleeping Bag',  price :  49.99, qty : 0 },
    { id :  8, category : 'sleeping bag', description : 'Deluxe Sleeping Bag',  price :  79.99, qty : 0 },
    { id :  9, category : 'tent',         description : '1-Person Tent',        price : 119.99, qty : 0 },
    { id : 10, category : 'tent',         description : '2-Person Tent',        price : 169.99, qty : 0 },
    { id : 11, category : 'tent',         description : '3-Person Tent',        price : 249.99, qty : 0 },
    { id : 12, category : 'tent',         description : '4-Person Tent',        price : 319.99, qty : 0 }
  ];
  
  $scope.cart = [];
  
  var findItemById = function(items, id) {
    return _.find(items, function (item) {
      return item.id === id;
    });
  };
  
  $scope.addItem = function(item) {
    var foundItem = findItemById($scope.cart, item.id);
    if (foundItem) {
      foundItem.qty += item.qty;
    }
    else { 
      $scope.cart.push(angular.copy(item));
    }
  };
  
    $scope.removeItem = function (item) {
      var index = $scope.cart.indexOf(item);
      $scope.cart.splice(index, 1);
    };
    
    $scope.grandTotal = function() {
      var grandTotal = 0;
      angular.forEach($scope.cart, function(item) {
         grandTotal += item.qty * item.price;
      });
       return grandTotal;
    };
    
    $scope.clearCart = function () {
      $scope.cart = [ ]; //better to use $scope.cart.length = 0; but codepen isn't allowing it right now...
    };
  });

