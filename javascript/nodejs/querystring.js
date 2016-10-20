const querystring = require("querystring");

var c = querystring.parse('foo=bar&baz=qux&baz=quux&corge')
// returns { foo: 'bar', baz: ['qux', 'quux'], corge: '' }
console.log(c);

// Suppose gbkDecodeURIComponent function already exists,
// it can decode `gbk` encoding string
// querystring.parse('w=%D6%D0%CE%C4&foo=bar', null, null,
//  { decodeURIComponent: gbkDecodeURIComponent })
// returns { w: '中文', foo: 'bar' }

var a = querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })
// returns 'foo=bar&baz=qux&baz=quux&corge='
console.log(a);

var b = querystring.stringify({foo: 'bar', baz: 'qux'}, ';', ':')
// returns 'foo:bar;baz:qux'
console.log(b);

// Suppose gbkEncodeURIComponent function already exists,
// it can encode string with `gbk` encoding
// querystring.stringify({ w: '中文', foo: 'bar' }, null, null,
//   { encodeURIComponent: gbkEncodeURIComponent })
// returns 'w=%D6%D0%CE%C4&foo=bar'


