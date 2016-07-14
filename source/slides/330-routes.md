## Example: Add routes

```js
module.exports = function(app) {
  const pkg = require('../../package')
  const started = new Date()
  app.get('/', function(req, res) {
    res.json({
      app: pkg.name,
      version: pkg.version,
      env: process.env.NODE_ENV,
      apiUrl: app.get('restApiRoot'),
      started: started,
      uptime: (Date.now() - Number(started)) / 1000
    })
  })
}
```


