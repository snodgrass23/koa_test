var path = require('path');

module.exports = function(app){

  app.use(require('koa-static')(path.join(__dirname, 'public')));
  app.use(require('koa-views')(__dirname, 'jade', {}));
  app.use(require('koa-router')(app));

  app.get('/', function *(next) {
    yield this.render('./index', {
      projects: []
    });
  });

};