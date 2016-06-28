var List = mongoose.model('List')
var User = mongoose.model('User')

module.exports = (function(){
  return{
    index: function(req, res){
      List.find({}).populate('_user').exec(function(err, data){
        if(err){
          res.json(err)
        }else{
          res.json(data)
        }
      })
    },
    add: function(req, res){
      console.log('@server lists.add', req.body)
      var newList = new List(req.body);
      newList.save(function(err){
        if(err){
          res.json(err)
        }else{
          User.findOne({_id: req.body._user}, function(err, user){
            if(err){
              res.json(err)
            }else{
              user._list.push(newList._id)
              user.save(function(err){
                if(err) res.json(err)
                else res.json({'status': true})
              })
            }
          })
        }
      })
    },
    all: function(req, res){
      console.log(req.params)
      List.find({_user: req.params.id }, function(err, list){
        if(err){
          res.json(err)
        }else{
          console.log(list)
          res.json(list)
        }
      })
    },
    // one: function(req, res){
    //   console.log(req.params)
    //   List.findOne({creator: req.params.name }, function(err, list){
    //     if(err){
    //       res.json(err)
    //     }else{
    //       console.log(list)
    //       res.json(list)
    //     }
    //   })
    // }
  }
})()
