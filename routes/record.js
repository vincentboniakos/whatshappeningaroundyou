var request = require('request');

exports.index = function(req, res){
  Record.find(function(err, records) {
      res.render('records/index', { title: "Records listing", records: records });
  }); 
};

exports.new = function(req, res){
  res.render('records/new', { title: "New record" });
};

exports.show = function(req, res) {
  Record.findById(req.params.id, function (err,record){
    if (!err){
      res.render('records/show', { title: "Record "+ record.id, record : record });
    }
    else
      console.log("Couldn't find record with id "+req.params.id)
  })
};

exports.create = function (req, res) {
  Instagram.media.search({ 
    lat: req.body.lat, 
    lng: req.body.lng,
    distance: 500,
    complete: function(data) {
      record = new Record({
        lat: req.body.lat,
        lng: req.body.lng,
        captions: data 
      });
      record.save(function(err) {
        if (!err) {
          console.log("Record created")
        }
        res.redirect("/records/"+record.id);
      });
    },
    error: function(errorMessage, errorObject, caller){
      console.log(errorMessage);
    } 
  })
}