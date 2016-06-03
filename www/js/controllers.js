angular.module('app.controllers', [])
     
.controller('SampleController', function($scope, $ionicPopover) {
	console.log('sample controller');

	var date = new Date();
	$scope.foo = 'bar';
	$scope.chats = [
		{
			id: 10,
			sender: 'Allan',
			date: date
		},
		{
			id: 1,
			sender: 'Carlos',
			date: date
		},
		{
			id: 1,
			sender: 'Carlos',
			date: date
		}
	];

	$scope.addChat = function() 
	{
		$scope.chats.push({
			id: 2,
			sender: $scope.myVar,
			date: date
		});
		$scope.myVar = '';
	}
});

