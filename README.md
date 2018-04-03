# bitbucket-repo-exists

A *tiny* promise based library to check if a Bitbucket repository exists.

## Usage
```javascript
const repoExists = require('bitbucket-repo-exists');
repoExists('molnarmark/webtown-go').then(result => console.log(result));
//=> true

repoExists('molnarmark/does-not-exist').then(result => console.log(result));
//=> false
```

## License
- MIT