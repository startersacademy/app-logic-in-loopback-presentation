## Put model methods in <model>.js

```js
// Event.js
module.exports = function(Event) {
  const utils = require('loopback/lib/utils')

  Event.postEvent = function(app, data, cb) {
    cb = cb || utils.createPromiseCallback()
    data.app = app
    Event.create(data, cb)
    return cb.promise
  }
}
```
