var co = require('co');
var fs = require('./');

co(function *() {
  yield fs.mkdir('./hello');
  yield fs.writeFile(__dirname + '/hello/hello.js', 'hello');
  console.log("done");
})();
