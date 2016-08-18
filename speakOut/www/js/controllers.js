angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Wishes', id: 1 },
    { title: 'Happy', id: 2 },
    { title: 'Sorrow', id: 3 },
    { title: 'Sad', id: 4 },
    { title: 'Love', id: 5 },
    { title: 'Feelings', id: 6 }
  ];
})
.controller('RecentCtrl', function($scope,$ionicPopup) {
  //var a[] = localStorage.value;
  $scope.recentList= [];
  for (var i = 0; i < localStorage.length; i++){
    $scope.recentList.push(localStorage.getItem(localStorage.key(i)));

  }

  $scope.SpeakOut = function(parm){

    var test = new SpeechSynthesisUtterance();
    test.text = parm;
    test.lang = 'en-US';
    test.rate = 0.5;
    speechSynthesis.speak(test);
    alert(parm);
  }
})

.controller('speakCtrl', function($scope,$ionicPopup) {
  $scope.data = {
   speechText: ''
 };
 $scope.recognizedText = '';


$scope.speakText = function() {

  var test = new SpeechSynthesisUtterance();
  txt = $scope.data.speechText;
  test.text = txt;
  test.lang = 'en-US';
  test.rate = 0.5;
  speechSynthesis.speak(test);
  localStorage.setItem(localStorage.length+1,txt,txt);

};



})
.controller('RemainderCtrl', function($scope, $stateParams) {
  var remArray = [];
    $scope.saveRemainder = function(){
      // remArray.push($scope.remainder.text);
      // localStorage.setItem("array",remArray);

    }
   
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
