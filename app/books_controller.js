var bookly = angular.module("booklyApp", []);

bookly.controller('BooksController', function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  $scope.total = 0;
  $scope.items = [];

  // function to add to that cart
  $scope.addCart = function (book) {
    $scope.items.push(book);
    console.log($scope.items);
    $scope.total += book.price;
  };

  // delete individual items
  $scope.deleteItem = function(item) {
    console.log(item);
    var select = $scope.items.indexOf(item);
    $scope.items.splice(select, 1);
    $scope.total -= item.price;
  };
  //delete whole cart
  $scope.deleteAll = function() {
    console.log("clicked!")
    $scope.items = [];
    $scope.total = 0;

  };
});
