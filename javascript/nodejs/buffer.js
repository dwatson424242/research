// Examples of Buffers (for hex/ascii data, etc)


const buf = new Buffer('hello world', 'ascii');
console.log(buf.toString('hex'));
  // prints: 68656c6c6f20776f726c64
console.log(buf.toString('base64'));
  // prints: aGVsbG8gd29ybGQ=


const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;

const buf1 = new Buffer(arr); // copies the buffer
const buf2 = new Buffer(arr.buffer); // shares the memory with arr;

console.log(buf1);
  // Prints: <Buffer 88 a0>, copied buffer has only two elements
console.log(buf2);
  // Prints: <Buffer 88 13 a0 0f>

arr[1] = 6000;
console.log(buf1);
  // Prints: <Buffer 88 a0>
console.log(buf2);
  // Prints: <Buffer 88 13 70 17>



const b = new Buffer(50).fill('h');
console.log(b.toString());
  // Prints: hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

buf = new Buffer('this is a buffer');

buf.indexOf('this');
  // returns 0
buf.indexOf('is');
  // returns 2
buf.indexOf(new Buffer('a buffer'));
  // returns 8
buf.indexOf(97); // ascii for 'a'
  // returns 8
buf.indexOf(new Buffer('a buffer example'));
  // returns -1
buf.indexOf(new Buffer('a buffer example').slice(0,8));
  // returns 8

const utf16Buffer = new Buffer('\u039a\u0391\u03a3\u03a3\u0395', 'ucs2');

utf16Buffer.indexOf('\u03a3',  0, 'ucs2');
  // returns 4
utf16Buffer.indexOf('\u03a3', -4, 'ucs2');
  // returns 6




