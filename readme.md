### Using Babel
To assure compatibility with older browsers we have to use Babel.
Only work on Javascript files in the *dev* folder

To compile be sure to have babel installed

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

Compile the javascript
```
.\node_modules\.bin\babel ./dev --out-dir ./public/js/
```