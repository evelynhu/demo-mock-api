/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

var jsf = require('json-schema-faker');
var mockDataSchema = require('../schemas/mockDataSchema');
var fs = require('fs');

var json = `${JSON.stringify(jsf(mockDataSchema), null, 2)} \r\n`;

fs.writeFile("./mock/api/db.json", json, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock data generated.");
  }
});
