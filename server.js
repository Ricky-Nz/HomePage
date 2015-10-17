var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname, 'client')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({error: 'Page not found'});
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({error: 'Page not found'});
});

if (require.main === module) {
    app.listen(80, function(){
        console.info('Express server listening on port ' + 80);
    });
} else {
    module.exports = app;
}
