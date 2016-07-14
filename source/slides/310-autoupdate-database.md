## Example: Automatically keep the database up-to-date

```js
module.exports = function(app) {
  const ds = app.datasources.db
  function update(){
    ds.autoupdate(function(err){
      if (err) throw err
      app.emit('ready', 'database')
    })
  }
  if (ds.connected) {
    update()
  } else {
    ds.once('connected', update)
  }
  return app
}
```
