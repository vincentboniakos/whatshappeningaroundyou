var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/around_dev');

exports.Record = mongoose.model('Record', new mongoose.Schema({
	lat : Number,
	lng : Number,
	captions: []
}));
