let lodash = require("lodash");

let name = "brittany";
console.log("Name: " + name);

name = lodash.startCase(name);
console.log("Revised name: " + name);
