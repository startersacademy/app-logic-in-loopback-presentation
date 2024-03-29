## Typical middleware.json

```js
{
  "initial:before": {
    "serve-favicon": {
      "params": "$!../client/favicon.ico"
    }
  },
  "initial": {
    "morgan": {
      "params": [
        "combined",
        {}
      ]
    },
    "compression": {
      "params": {
        "threshold": 512
      },
      "enabled": true
    },
    "cors": {
      "params": {
        "origin": true,
        "credentials": true,
        "maxAge": 86400
      }
    },
    "helmet": {},
    "helmet-csp": {
      "params": {
        "default-src": [
          "'self'"
        ]
      },
      "enabled": false
    }
  },
  "session": {
    "express-session": {
      "params": {
        "secret": "4959alkd0qkafjwqe8rasad",
        "key": "sessionId",
        "cookie": {
          "httpOnly": true,
          "secure": true
        }
      },
      "enabled": false
    },
    "method-override": {
      "params": "X-HTTP-Method-Override"
    },
    "csurf": {
      "params": {},
      "enabled": false
    }
  },
  "auth": {
    "loopback#token": {}
  },
  "parse": {
    "cookie-parser": {},
    "body-parser#urlencoded": {
      "params": {
        "extended": true
      }
    },
    "body-parser#json": {},
    "hpp": {}
  },
  "routes": {
    "loopback#status": {
      "paths": "/status"
    },
    "loopback#rest": {
      "paths": [
        "${restApiRoot}"
      ]
    }
  },
  "files": {
    "loopback#static": {
      "params": "$!../client"
    }
  },
  "final": {
    "response-time": {},
    "loopback#urlNotFound": {}
  },
  "final:after": {
    "loopback#errorHandler": {}
  }
}
```



