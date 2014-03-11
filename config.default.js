var port = 3000;

module.exports = {
  port: port,
  request_timeout: 100000,
  session_secret: "billsecret",
  log_requests: true,
  redis: {
    host: "localhost",
    port: 6379,
    auth: "",
    debug: false
  },
  mongoose_url: "mongodb://localhost/bills_koa"
};