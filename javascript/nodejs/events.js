const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
  EventEmitter.call(this);
}
util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

const myEmitter2 = new MyEmitter();
myEmitter2.on('event', (a, b) => {
  console.log(a, b, this);
    // Prints: a b {}
});
myEmitter2.emit('event', 'a', 'b');


