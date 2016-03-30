var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var hauntActionSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: new Date()
  }
  // person: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Person'
  // }
});

module.exports = mongoose.model('Action', hauntActionSchema);
