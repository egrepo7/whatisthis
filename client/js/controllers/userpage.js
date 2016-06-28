myApp.controller('profileController', function(userFactory, listFactory, $location, $routeParams){
  var self = this

  var checkSession = function(){
    if(userFactory.user.loggedIn){
      self.user = userFactory.user
      console.log(self.user)
    }else{
      $location.url('/')
    }
  }
  checkSession()


  // listFactory.showOne(name, function(data){
  //   self.created = data
  // })
  listFactory.showAll($routeParams.id, function(data){
    self.list = data
  })
  userFactory.showOne($routeParams.id, function(data){
    self.info = data
  })

  self.logout = function(){
    console.log('logging out')
    userFactory.logout
    $location.url('/')
  }
})
