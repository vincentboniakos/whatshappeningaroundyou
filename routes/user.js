
/*
 * GET users listing.
 */


exports.list = function(req, res){
  res.render('users/index', { users: ["Toto","Titu","Tata"], title:"Users" });
};