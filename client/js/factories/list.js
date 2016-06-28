myApp.factory('listFactory', function($http){
  var factory = {}

  factory.index = function(callback){
    console.log('@ listfactory.index')
    $http.get('/list').success(function(data){
      callback(data)
    })
  }
  factory.addToList = function(data, callback){
    console.log('@ listfactory.addToList')
    $http.post('/newlist', data).success(function(output){
      callback()
    })
  }
  factory.showAll = function(id, callback){
    console.log('@ listfactory.showAll', id)
    $http.get('/all/' + id).success(function(output){
      callback(output)
    })
  }
  // factory.showOne = function(name, callback){
  //   console.log('@ listfactory.showOne', name)
  //   $http.get('/created', name).success(function(output){
  //     callback(output)
  //   })
  // }

  return factory;
})
