process.on('exit', (code) => {
  // do *NOT* do this
  setTimeout(() => {
    console.log('This will not run');
  }, 0);
  console.log('About to exit with code:', code);
});

process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`);
});

setTimeout(() => {
  console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();
console.log('This will not run.');


