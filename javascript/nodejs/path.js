const path = require('path');

path.basename('/foo/bar/baz/asdf/quux.html')
// returns 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html')
// returns 'quux'

console.log(process.env.PATH)
// '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'

process.env.PATH.split(path.delimiter)
// returns ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']


path.dirname('/foo/bar/baz/asdf/quux')
// returns '/foo/bar/baz/asdf'


path.extname('index.html')
// returns '.html'

path.extname('index.coffee.md')
// returns '.md'

path.extname('index.')
// returns '.'

path.extname('index')
// returns ''

path.extname('.index')
// returns ''

// If `dir` and `base` are provided, `dir` + platform separator + `base`
// will be returned.
path.format({
    dir: '/home/user/dir',
    base: 'file.txt'
});
// returns '/home/user/dir/file.txt'

// `base` will be returned if `dir` or `root` are not provided.
path.format({
    base: 'file.txt'
});
// returns 'file.txt'


