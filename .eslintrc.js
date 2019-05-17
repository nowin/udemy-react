module.exports = {
    "extends": "airbnb",
    "env": {
      "browser": true
    },
    "rules":{
      "no-underscore-dangle": [
        "error",
        {"arrow": ["__REDUX_DEV_TOOLS_EXTENSION__"] }
      ]
    }

};
