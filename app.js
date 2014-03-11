var app = require('koa')();

// couple of app globals
_ = require('lodash');
CONFIG = require('./middleware/config')();

// startup mongoose connection
require('./middleware/mongoose')();

// session keys
app.keys = [CONFIG.session_secret];

// middleware
app.use(require('koa-session')());
app.use(require('./middleware/logger'));
app.use(require('./middleware/stylus')());
app.use(require('koa-static')('./public'));

// components
require('./components/user')(app);
require('./components/dashboard')(app);

app.listen(3000);
console.log("app listening on localhost:3000");