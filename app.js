
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , record = require('./routes/record')
  , http = require('http')
  , path = require('path');

// Global variable
Record = require('./models/record').Record
INSTAGRAM_CLIENT_ID = process.env.IG_CLIENT_ID
INSTAGRAM_CLIENT_SECRET = process.env.IG_CLIENT_SECRET
Instagram = require('instagram-node-lib');

Instagram.set('client_id', INSTAGRAM_CLIENT_ID);
Instagram.set('client_secret', INSTAGRAM_CLIENT_SECRET);

var app = express();



app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// # home
app.get('/', routes.index);


// # records

// ## records index
app.get('/records', record.index);

// ## record new
app.get('/records/new', record.new);

// ## record create
app.post('/records', record.create);

// ## record show
app.get('/records/:id', record.show);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
