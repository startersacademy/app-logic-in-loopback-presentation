## Use the .js version for more flexibility

### datasources.json >>> datasources.local.js

```js
module.exports = {
  'db': {
    'name': 'db',
    'connector': 'mongodb',
    'host': process.env.DB_HOST,
    'port': process.env.DB_PORT,
    'database': process.env.DB_NAME,
    'username': process.env.DB_USER,
    'password': process.env.DB_PASSWORD
  }
}
```


