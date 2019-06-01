var app = angular.module("app");
app.directive("ninjaDropdownDirective", function() {
  return {
    templateUrl: "./templates/ninja.dropdown.directive.html",
    scope:{
      url1: "=url1",
      limit: "=limit",
      off: "=off",
      type123:"=type",
      check:"=hello"
  },
  controller:['$scope','$http', function ($scope, $http) {
    //  console.log($scope.check);
  $scope.user=false;var rlimit=$scope.limit;
  var rlimit1=$scope.limit;$scope.alive='';
  $scope.onSelected = function (item) {
      //$scope.check = { value: item[$scope.type123] };
      $scope.check.value = item[$scope.type123];
     // console.log($scope.check.value);
      //localStorage.setItem('chick',)
  }

          $http({
          method: 'get',
         // url:$scope.url1+'+@yu89/'+$scope.limit+'/-1'
         //url:$scope.url1+'?p1=@yu89&p2='+$scope.limit+'&p3=-1'
          url:$scope.url1+'?p2='+$scope.limit
          }).then(function successCallback(response) {
              $scope.total = response.data.length;
              //console.log("goh",$scope.total);
          });


          $scope.search =function(search1)
         {
              $scope.alive='';
              rlimit1 = 14;
             // console.log("rsgssbs",search1);
           if(search1!='')
           {
             $scope.user=false;
            // console.log(search1);

          $http({
          method: 'get',
          // url:$scope.url1+search1+'/'+$scope.limit+'/-4'
           url:$scope.url1+'?p1='+search1+'&p2='+$scope.limit+'&p3=-4000'
          }).then(function successCallback(response) {
            if(response.data!='')
            {
              $scope.total1 = response.data.length;
              // console.log("tom",$scope.total1);
            }
            else
            {

            }
          });

          $http({
          method: 'get',
          //url:$scope.url1+search1+'/'+$scope.limit+'/-1'
         // url:$scope.url1+'?p1='+search1+'&p2='+$scope.limit+'&p3=-1'
            url:$scope.url1+'?p1='+search1+'&p2='+$scope.limit
          }).then(function successCallback(response) {
            if(response.data!='')
            {
              $scope.alive = search1;
              $scope.itemArray = response.data;
              // console.log("chock",$scope.itemArray,$scope.alive);
            }
            else
            {
              $scope.itemArray = [{[$scope.type123]:"No such user"}];
              $scope.user=true;
              //console.log("no such user");
            }
          });               
           }
           else
           {
                rlimit1=$scope.limit;
                $scope.alive='';
               $scope.itemArray = $scope.itemArray1;
               $scope.user=false;
           }
         }

      $http({
          method: 'get',
          //url: $scope.url1+'$^@9177/'+$scope.limit+'/'+$scope.off
          //url: $scope.url1+'?p1=@9177&p2='+$scope.limit+'&p3='+$scope.off
          url: $scope.url1+'?p2='+$scope.limit+'&p3='+$scope.off
          }).then(function successCallback(response) {
              $scope.itemArray1 = response.data;
              $scope.itemArray = $scope.itemArray1;
              // $scope.selected = { value: $scope.itemArray[0] };
               //console.log("man",$scope.itemArray1);
          });

  //link:function ($scope, $element) {


            setTimeout(function () {
    angular.element(document.querySelector('.dropdown-menu')).bind('scroll', function(){

    if($scope.alive=='')
    {
        $scope.off = Math.ceil(this.scrollTop/26)+7;
        //console.log("duck",$scope.off,rlimit,$scope.alive);
  if($scope.off==rlimit && $scope.itemArray.length < $scope.total)
{

      $http({
          method: 'get',
         // url: $scope.url1+'$^@9177/'+$scope.limit+'/'+$scope.off
         //url: $scope.url1+'?p1=@9177&p2='+$scope.limit+'&p3='+$scope.off
         url: $scope.url1+'?p2='+$scope.limit+'&p3='+$scope.off
          }).then(function successCallback(response) {
            for(var i=0;i<response.data.length;i++)
            {
             if($scope.itemArray.length>=$scope.total)
             break;
              $scope.itemArray1.push(response.data[i]);
              $scope.itemArray = $scope.itemArray1;
            }
           // console.log("hero",$scope.itemArray1);
          });

    rlimit+=14;
    //console.log("double",rlimit); 
}     
    }
    else
    {
        $scope.itemArray2 = $scope.itemArray;
       // console.log("who am i");
        $scope.off = Math.ceil(this.scrollTop/26)+7;
       // console.log("fuck1",$scope.off,rlimit1,$scope.alive,$scope.itemArray.length,$scope.total1);
            if($scope.off==rlimit1 && $scope.itemArray.length < $scope.total1)
            {
          $http({
          method: 'get',
          //url:$scope.url1+$scope.alive+'/'+$scope.limit+'/'+$scope.off
          url: $scope.url1+'?p1='+$scope.alive+'&p2='+$scope.limit+'&p3='+$scope.off
        }).then(function successCallback(response) {
            //  console.log("wow",response.data);
              for(var i=0;i<response.data.length;i++)
            {
             if($scope.itemArray.length>=$scope.total1)
             break;
              $scope.itemArray2.push(response.data[i]);
              $scope.itemArray = $scope.itemArray2;
            }
              console.log("chock1",$scope.itemArray,$scope.alive);
                rlimit1+=14;
               // console.log("double1",rlimit1);
          }); 
          }
    }

  })
  });


  //}

          }],
}
});



// app.controller("ninjaController", function ($scope,$location,$http) {
//     var kala=14,limit=14,user=false;
//             $scope.search =function(search1)
//            {
//              if(search1!='')
//              {
//                user=false;
//                console.log(search1);
//             $http({
//             method: 'get',
//             url: 'http://localhost:8080/ninjadet/'+search1
//             }).then(function successCallback(response) {
//               if(response.data!='')
//               {
//                 $scope.itemArray = response.data;
//                  console.log("chock",$scope.itemArray);
//               }
//               else
//               {
//                 $scope.itemArray = [{name:"No such user"}];
//                 user=true;
//                 console.log("no such user");
//               }
//             });               
//              }
//              else
//              {
//                  $scope.itemArray = $scope.itemArray1;
//                  user=false;
//              }
//            }
//     //         $scope.itemArray = [
//     //     {id: 1, name: 'first'},
//     //     {id: 2, name: 'second'},
//     //     {id: 3, name: 'third'},
//     //     {id: 4, name: 'fourth'},
//     //     {id: 5, name: 'fifth'},
//     //     {id: 6, name: 'sixth'},
//     //     {id: 7, name: 'seventh'},
//     //     {id: 8, name: 'eigth'},
//     //     {id: 9, name: 'Ninth'},
//     //     {id: 10, name: 'Tenth'},
//     // ];

//     // $scope.selected = { value: $scope.itemArray[0] };
//             $http({
//             method: 'get',
//             url: 'http://localhost:8080/ninjatot'
//             }).then(function successCallback(response) {
//                 $scope.totninja = response.data;
//                  console.log("chicken",$scope.totninja);
//             });
//         $http({
//             method: 'get',
//             url: 'http://localhost:8080/ninjas/'+limit
//             }).then(function successCallback(response) {
//                 $scope.itemArray1 = response.data;
//                 $scope.itemArray = $scope.itemArray1;
//                  $scope.selected = { value: $scope.itemArray[0] };
//                  console.log("fuckman",$scope.itemArray1);
//             });
//   //     setTimeout(function () {
//   //     angular.element(document.querySelector('.dropdown-menu')).bind('scroll', function(){
//   //     console.log("scrollTop " + this.scrollTop);
//   //     console.log("scrollHeight " + this.scrollHeight);
//   //    //$scope.itemArray.push("asshole");
//   //    //console.log("hero",$scope.itemArray.length);
//   //     var off = Math.ceil(this.scrollTop/26)+7;
//   //     console.log("fuck",off,kala);
//   //   if(off==kala && $scope.itemArray1.length < $scope.totninja)
//   // {

//   //       $http({
//   //           method: 'get',
//   //           url: 'http://localhost:8080/ninjas123/'+limit+'/'+off
//   //           }).then(function successCallback(response) {
//   //             for(var i=0;i<response.data.length;i++)
//   //             {
//   //             if($scope.itemArray1.length>=$scope.totninja)
//   //             break;
//   //               $scope.itemArray1.push(response.data[i]);
//   //               $scope.itemArray = $scope.itemArray1;
//   //             }
//   //             console.log("hero",$scope.itemArray1);
//   //           });

//   //     kala+=14;
//   //     console.log("double",kala); 
//   // }

//   //   })
//   //   });
//         });
