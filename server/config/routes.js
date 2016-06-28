var User = require('../controllers/users.js')
var List = require('../controllers/lists.js')

module.exports = function() {
  app.post('/login', User.login)
  app.get('/users', User.index)
  app.get('/list', List.index)
  app.post('/newlist', List.add)
  app.get('/all/:id', List.all)
  app.get('/getoneuser/:id', User.one)
  // app.get('/created/', List.one)
}
