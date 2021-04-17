var fs = require('fs');
var ejs = require('ejs');


exports.ShopMenu_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/ShopMenu_OneItem.ejs', "utf8"));

exports.ShopCart_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/ShopCart_OneItem.ejs', "utf8"));

// added template of a composition
exports.Composition_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/Composition_OneItem.ejs', "utf8"))