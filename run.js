var Basic = require("./basic.js");
var Coze = require("./coze.js");

var basic = new Basic("Who was the first President of the United States?", "George Washington");
var coze = new Coze("George Washington was the the first President of the United States", "George Washington");
console.log(basic.front);
console.log(coze.partial());