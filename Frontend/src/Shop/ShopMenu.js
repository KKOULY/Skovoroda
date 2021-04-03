var Templates = require('./Templates');
var ShopCart = require('./ShopCart');
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

        $node.find(".btn-buy").click(function(){
            if(item.type === "cup"){
                ShopCart.addToCart(item, "none");
            }else {
                let $size = $node.find(".active");
                if($size.text().length>0) {
                    $node.find(".btn-group").removeClass("is-invalid");
                    ShopCart.addToCart(item, $size.text());
                }
                else $node.find(".btn-group").addClass("is-invalid");
            }
        });

        $shop_list.append($node);
    }

    list.forEach(showOneItem);
    //$(".pizza-count").text(list.length.toString());
}

function filterItems(item_filter) {
    //Масив куди потраплять піци які треба показати
    console.log(item_filter);
    var item_shown = [];
    function filter(it, flt){
        return it.type === flt || flt === "all";
    }
    ShopList.forEach(function(item){
        if(filter(item,item_filter)) item_shown.push(item);
    });

    //Показати відфільтровані піци
    showPizzaList(item_shown);
}


function initialiseMenu() {
    $(".shop-filter").click(function () {
        console.log("clicked");
        filterItems($(this).attr("data-toggle"));
    });
    showPizzaList(ShopList);
}


// exports.filterPizza = filterPizza;
exports.initialiseMenu = initialiseMenu;