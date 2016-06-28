myApp.controller('dashboardsController', function(userFactory, listFactory, $location, $routeParams){
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

  listFactory.index(function(data){
    console.log('loading bucket list', data)
    self.lists = data
  })

  userFactory.index(function(data){
    console.log('loading all users', data)
    self.users = data
  })

  self.addToList = function(){
    self.newList.creator = self.user.name
    console.log(self.newList)
    listFactory.addToList(self.newList, function(){
      console.log('@dashboards.addToList')
      listFactory.index(function(data){
        console.log('loading bucket list', data)
        self.lists = data
      })
    })
  }
  self.logout = function(){
    console.log('logging out')
    userFactory.logout
    $location.url('/')
  }


})
