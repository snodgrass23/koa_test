module.exports = function(app){

  app.use(require('koa-views')(__dirname, 'jade', {}));
  app.use(require('koa-router')(app));

  app.get('/signin', function *(next) {
    yield this.render('./views/signin', {
      email: 'signin@example.com'
    });
  });

  app.get('/register', function *(next) {
    yield this.render('./views/signin', {
      email: 'register@example.com'
    });
  });

};