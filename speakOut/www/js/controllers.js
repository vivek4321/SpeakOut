angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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

    // if($scope.recentList.indexOf(localStorage.getItem(localStorage.key(i))) == -1){
    //   $scope.recentList.push(localStorage.getItem(localStorage.key(i)));
    // }
  }

  $scope.SpeakOut = function(parm){

    var test = new SpeechSynthesisUtterance();
    test.text = parm;
    test.lang = 'en-US';
    test.rate = 0.5;
    speechSynthesis.speak(test);
    alert(parm);
//     function he(){
// $ionicPopup.alert({
//      title: localStorage.getItem(localStorage.key(0)),
//      template: localStorage.length
//    });
//  };
//  he();
  }
})

.controller('speakCtrl', function($scope,$ionicPopup) {
  $scope.data = {
   speechText: ''
 };
 $scope.recognizedText = '';

//  $scope.speakText = function() {
//    localStorage.setItem(localStorage.length+1,$scope.data.speechText,$scope.data.speechText);
//    window.speechSynthesis.speak(
//    new SpeechSynthesisUtterance($scope.data.speechText)
// );
// };

$scope.speakText = function() {

  var test = new SpeechSynthesisUtterance();
  txt = $scope.data.speechText;
  test.text = txt;
  test.lang = 'en-US';
  test.rate = 0.5;
  speechSynthesis.speak(test);
  localStorage.setItem(localStorage.length+1,txt,txt);

  //
  // window.plugins.TTS.speak('hello, world!', function () {
  //         //alert('success');
  //     }, function (reason) {
  //         //alert(reason);
  //     });
  //
  //     $scope.speak = function() {
  //
  //            var test = new SpeechSynthesisUtterance();
  //            txt = $scope.data.speechText;
  //            test.text = txt;
  //            test.lang = 'en-US';
  //            speechSynthesis.speak(test);
  //            navigator.notification.vibrate(2000);
  //
  //         };



//   var audio = new Audio();
// audio.src ='http://translate.google.com/translate_tts?ie=utf-8&tl=en&q='+$scope.data.speechText;
// audio.play();
  // $ionicPopup.alert({
  //    title: window.cordova,
  //    template: document.addEventListener('deviceready', function () {
  //    TTS.speak('hello, world');
  //    }, false)
  //  });
  //  TTS.speak({
  //          text: '***this place is for the code***',
  //          locale: 'en-GB',
  //          rate: 0.75
  //      }, function () {
  //          // handle the succes case
  //      }, function (reason) {
  //          // Handle the error case
  //      });
 // window.TTS.speak({
 //        text: $scope.data.speechText,
 //        locale: 'en-GB',
 //        rate: 1.5
 //    }, function () {
 //        // Do Something after success
 //    }, function (reason) {
 //        // Handle the error case
 //    });
};

  //  window.TTS.speak({
  //         text: $scope.data.speechText,
  //         locale: 'en-GB',
  //         rate: 1.5
  //     }, function () {
  //         // Do Something after success
  //         alert('ok');
  //     }, function (reason) {
  //         // Handle the error case
  //     });



})
.controller('RemainderCtrl', function($scope, $stateParams) {
  var remArray = [];
    $scope.saveRemainder = function(){
      // remArray.push($scope.remainder.text);
      // localStorage.setItem("array",remArray);

    }
    // console.log(remArray+"sdddd "+localStorage.getItem("array").a);

})
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
