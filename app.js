config = require('./config');

//app.get('/', routes.index);
app.post('/upload', file.upload);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
