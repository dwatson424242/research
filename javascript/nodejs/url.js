const url = require('url');

var a = url.resolve('/one/two/three', 'four')         // '/one/two/four'
var b = url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
var c = url.resolve('http://example.com/one', '/two') // 'http://example.com/two'

console.log(a);
console.log(b);
console.log(c);

var d = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash')
console.log(d);


