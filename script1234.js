 var app = angular.module('app', ['ngRoute','ui.select']);

        app.config(function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'email.html',
                controller: 'emailController'
            }).when('/ninja', {
               templateUrl: 'ninja.html',
                controller: 'ninjaController'
            }).when('/otp', {
                templateUrl: 'otp.html',
                controller: 'otpController'
            }).when('/logup', {
                templateUrl: 'logup.html',
                controller: 'logController'
            }).when('/dashboard', {
               templateUrl: 'modal1.php',
                controller: 'AppCtrl1'
            }).otherwise({
                redirectTo: "/"
            });
        });
        app.controller("emailController", function ($scope,$location,$http) {
           $scope.john = function()
           {
                 $scope.records = [
        "Alfreds Futterkiste",
        "Berglunds snabbköp",
        "Centro comercial Moctezuma",
        "Ernst Handel",
    ]
                // $http.post("otp123.php",{
                //   'maniemail':$scope.acemail
                // }).then(function successCallback(response){
                //     $scope.users = response.data.records;
                //    console.log(response.data.records);
                //     });
                $location.path('/ninja');
               //console.log("sdfaff",$scope.users);
           }
        });

app.controller("ninjaController", function ($scope) {

$scope.offset = 0;
$scope.limit123 = 14;
$scope.url = 'http://localhost:8080/ninjas123';
$scope.title ='name';
//$scope.obj = {a:{}};
$scope.obj = { value:""};
//console.log("dog",$scope.obj);

});

  //   app.controller("ninjaController", function ($scope,$location,$http) {
  //   var kala=14,limit=14,user=false;
  //           $scope.search =function(search1)
  //          {
  //            if(search1!='')
  //            {
  //              user=false;
  //              console.log(search1);
  //           $http({
  //           method: 'get',
  //           url: 'http://localhost:8080/ninjadet/'+search1
  //           }).then(function successCallback(response) {
  //             if(response.data!='')
  //             {
  //               $scope.itemArray = response.data;
  //                console.log("chock",$scope.itemArray);
  //             }
  //             else
  //             {
  //               $scope.itemArray = [{name:"No such user"}];
  //               user=true;
  //               console.log("no such user");
  //             }
  //           });               
  //            }
  //            else
  //            {
  //                $scope.itemArray = $scope.itemArray1;
  //                user=false;
  //            }
  //          }
  //   //         $scope.itemArray = [
  //   //     {id: 1, name: 'first'},
  //   //     {id: 2, name: 'second'},
  //   //     {id: 3, name: 'third'},
  //   //     {id: 4, name: 'fourth'},
  //   //     {id: 5, name: 'fifth'},
  //   //     {id: 6, name: 'sixth'},
  //   //     {id: 7, name: 'seventh'},
  //   //     {id: 8, name: 'eigth'},
  //   //     {id: 9, name: 'Ninth'},
  //   //     {id: 10, name: 'Tenth'},
  //   // ];

  //   // $scope.selected = { value: $scope.itemArray[0] };
  //           $http({
  //           method: 'get',
  //           url: 'http://localhost:8080/ninjatot'
  //           }).then(function successCallback(response) {
  //               $scope.totninja = response.data;
  //                console.log("chicken",$scope.totninja);
  //           });
  //       $http({
  //           method: 'get',
  //           url: 'http://localhost:8080/ninjas/'+limit
  //           }).then(function successCallback(response) {
  //               $scope.itemArray1 = response.data;
  //               $scope.itemArray = $scope.itemArray1;
  //                $scope.selected = { value: $scope.itemArray[0] };
  //                console.log("fuckman",$scope.itemArray1);
  //           });
  //     setTimeout(function () {
  //     angular.element(document.querySelector('.dropdown-menu')).bind('scroll', function(){
  //     console.log("scrollTop " + this.scrollTop);
  //     console.log("scrollHeight " + this.scrollHeight);
  //    //$scope.itemArray.push("asshole");
  //    //console.log("hero",$scope.itemArray.length);
  //     var off = Math.ceil(this.scrollTop/26)+7;
  //     console.log("fuck",off,kala);
  //   if(off==kala && $scope.itemArray1.length < $scope.totninja)
  // {

  //       $http({
  //           method: 'get',
  //           url: 'http://localhost:8080/ninjas123/'+limit+'/'+off
  //           }).then(function successCallback(response) {
  //             for(var i=0;i<response.data.length;i++)
  //             {
  //             if($scope.itemArray1.length>=$scope.totninja)
  //             break;
  //               $scope.itemArray1.push(response.data[i]);
  //               $scope.itemArray = $scope.itemArray1;
  //             }
  //             console.log("hero",$scope.itemArray1);
  //           });

  //     kala+=14;
  //     console.log("double",kala); 
  // }

  //   })
  //   });
  //       });


       

         app.controller("otpController", function ($scope,$location,$http) {
           $scope.otp123 =function()
           {
                $http({
            method: 'get',
            url: 'otpcheck.php'
            }).then(function successCallback(response) {
                $scope.checkotp = response.data;
                 var sam = $scope.checkotp;
              //console.log($scope.checkotp);
              if(sam == $scope.otp)
              {
                $location.path('/logup');
              }
              else
              {
                alert('Enter The Correct OTP');
              }
            });

           }
        });

        app.controller("logController", function ($scope, $location,$http) {
           
           $scope.submit = function () {
                
                // $scope.password;
                if($scope.password == $scope.confirmpassword)
                {
                  $http.post("insert.php",{
                  'username123':$scope.username,
                  'password123':$scope.password
                }).then(function(response){
                    $scope.users123 = response.data;
                    });
                $location.path('/dashboard');
                }
             else
             {
              alert('Password and ConfirmPassword are different');
               }

            }
            });
            /*app.controller("dashboardController", function ($scope,$location,$routeParams) {
           // $scope.username = $routeParams.username;  // using $routeParams to get the parameters of the url
           var url = $location.path().split('/');       // using $location to get the parameters of the url by spliting both will work.
           $scope.username=url[2];
        });*/
        

         app.controller('AppCtrl1', function ($scope, $location,$http,$window) {
            
              $('#myModal2').modal('show');
            
            
              
            
                
                 $scope.Amazon1 = function (Item) {
          
                  $http.post("amazon123.php",{
                  'a1mazon':Item
                }).then(function successCallback(response){
                    $scope.users55 = response.data;
                    var samil = $scope.users55;
                    console.log("jih",response.data);
                    var pin = 100;
                    if(samil == pin)
                    {
                      console.log(samil);
                        alert('Youve reached maximum quantity of that product');
                    }
                    else
                    {
                      //console.log(samil);
                      $window.location.reload();
                    }
                    //$location.path('/dashboard2');
                    });
                  
                  //$route.reload();
            }
            

            $scope.Discard = function (Item1) {

                $http.post("amazondelete.php",{
                  'a2mazon':Item1
                }).then(function successCallback(response){
                    //$scope.users333 = response.data;
                     $scope.users333 = 109;
                    $window.location.reload();

                    });
console.log("vgvjn0");

              }
                //console.log($scope.users333);


            });
         
        /*app.controller("modalController", function ($scope, $location) {
           
            $scope.open = function () {
                $location.path('/save')
            };

        });*/
        