function initialise() {
    var Menu = require('./ShopMenu');
    // var Cart = require('./ShopCart');
    console.log("in shop");
    // Cart.initialiseCart();
    Menu.initialiseMenu();
};
exports.initialise = initialise;