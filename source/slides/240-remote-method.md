## Expose custom methods using remote methods

```js
// Event.js
Event.remoteMethod('postEvent', {
    description: 'Record an event from an app',
    accepts: [
      {
        arg: 'app',
        type: 'string',
        required: true,
        http: {source: 'path'}
      },
      {
        arg: 'data',
        type: 'object',
        required: true,
        http: {source: 'body'}
      }
    ],
    returns: {
      arg: 'event', type: 'object', root: true,
      description:
        'Contains object describing the saved event.'
    },
    http: {
      verb: 'post',
      path: '/:app'
    }
  })
```
