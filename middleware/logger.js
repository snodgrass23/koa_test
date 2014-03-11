module.exports = function *(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  if (CONFIG.log_requests) console.log('%s %s - %s', this.method, this.url, ms);
};