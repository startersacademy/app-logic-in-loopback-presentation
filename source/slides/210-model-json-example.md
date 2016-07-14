## model.json example

```js
{
  "name": "Event",
  "base": "PersistedModel",
  "idInjection": true,
  "options": {
    "validateUpsert": false
  },
  "mixins": {
    "TimeStamp": true
  },
  "properties": {
    "event": {
      "type": "string",
      "required": true
    },
    "data": {
      "type": "object"
    },
    "app": {
      "type": "string",
      "required": true
    }
  },
  "validations": [],
  "relations": {},
  "acls": [],
  "methods": {}
}
```

