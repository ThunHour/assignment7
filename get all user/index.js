const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const eurekaHelper = require('./eureka-helper');

app.listen(PORT, () => {
  console.log("user-service on 4000");
})

app.get('/', (req, res) => {
 res.json("I am user-service")
})
eurekaHelper.registerWithEureka('user-service', PORT);