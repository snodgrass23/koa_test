module.exports = function(app){

  app.use(require('koa-views')(__dirname, 'jade', {}));
  app.use(require('koa-router')(app));

  app.get('/', function *(next) {
    yield this.render('./index', {
      projects: []
    });
  });

};