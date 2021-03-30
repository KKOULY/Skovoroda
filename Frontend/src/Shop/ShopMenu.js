var Templates = require('./Templates');
// var ShopCart = require('./ShopCart');
var ShopList = require('./Shop_Items_List');

//HTML едемент куди будуть додаватися піци
var $shop_list = $("#shop-list");

function showPizzaList(list) {
    //Очищаємо старі піци в кошику
    $shop_list.html("");

    //Онволення однієї піци
    function showOneItem(item) {
        var html_code = Templates.ShopMenu_OneItem({item: item});

        var $node = $(html_code);

        // $node.find(".buy-big").click(function(){
        //     PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Big);
        // });
        // $node.find(".buy-small").click(function(){
        //     PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Small);
        // });

        $shop_list.append($node);
    }

    list.forEach(showOneItem);
    // $(".pizza-count").text(list.length.toString());
}

// function filterPizza(filter) {
//     //Масив куди потраплять піци які треба показати
//     var pizza_shown = [];
//
//     Pizza_List.forEach(function(pizza){
//         if(filter(pizza)) pizza_shown.push(pizza);
//     });
//
//     //Показати відфільтровані піци
//     showPizzaList(pizza_shown);
// }

function initialiseMenu() {
    console.log("in menu");
    showPizzaList(ShopList);
}

// exports.filterPizza = filterPizza;
exports.initialiseMenu = initialiseMenu;