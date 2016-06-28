var userSchema = mongoose.Schema({
  name: { type: String, required: true },
  _list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List'}]
}, { timestamps: true });

var listSchema = mongoose.Schema({
  creator: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  _user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
}, { timestamps: true })

mongoose.model('User', userSchema)
mongoose.model('List', listSchema)
