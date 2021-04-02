var Templates = require('./Templates');
var basil = require("basil.js");
var Cart = [];
var $cart = $("#cart");
var $totalPrice = $(".total");

// $(".clear").click(function(){
//     clearCart();
//     //Оновлюємо відображення
//     updateCart();
// });
//
function findCartElementIndex(item, size) {
    let idx = undefined;
    Cart.forEach( (i,index) => {
        if(item.id === i.item.id && size === i.size){
            idx = index;
        }
    })
    return idx;
}

function addToCart(item, size) {
    //Приклад реалізації, можна робити будь-яким іншим способом
    $(".basket").animate({  textIndent: 0 /* или любое другое не очень-то нужное здесь свойство */ }, {
        start: function() {
            $(this).css('transform','scale(1.2) ');
        },
        done: function() {
            $(this).css('transform','scale(1)');
        },
    });
    let cartIndex = findCartElementIndex(item,size);
    if(Cart[cartIndex]) Cart[cartIndex].quantity += 1;
    else {
        Cart.push({
            item: item,
            size: size,
            quantity: 1
        })
    }
    //Оновити вміст кошика на сторінці
    updateCart();
}

function removeFromCart(cart_item) {
    //Видалити піцу з кошика
    let cartIndex = findCartElementIndex(cart_item.item,cart_item.size);
    if(cart_item !== 'undefined') Cart.splice(cartIndex,1);
    //Після видалення оновити відображення
    updateCart();
}
//
// function clearCart() {
//     Cart = [];
//     updateCart();
// }
//
function initialiseCart() {
    //Фукнція віпрацьвуватиме при завантаженні сторінки
    var saved_carts = basil.localStorage.get("cart");
    if(saved_carts) Cart = JSON.parse(saved_carts);
    updateCart();
}

function getItemsInCart() {
    //Повертає піци які зберігаються в кошику
    return Cart;
}

function updateCart() {
    basil.localStorage.set("cart",JSON.stringify(Cart));

    $cart.html("");

    let totalSum = 0;
    //Онволення однієї піци
    function showOneItemInCart(cart_item) {
        var html_code = Templates.ShopCart_OneItem(cart_item);
        totalSum += cart_item.item.price*cart_item.quantity;
        var $node = $(html_code);

        $node.find(".plus").click(function(){
            //Збільшуємо кількість замовлених піц
            cart_item.quantity += 1;

            //Оновлюємо відображення
            updateCart();
        });
        $node.find(".minus").click(function(){
            //Зменшуємо кількість замовлених піц
            if(cart_item.quantity>1) {
                cart_item.quantity -= 1;
                //Оновлюємо відображення
                updateCart();
            }
        });
        $node.find(".close-item").click(function(){
            removeFromCart(cart_item);
        });

        $cart.append($node);
    }
    Cart.forEach(showOneItemInCart);
    $totalPrice.text(" "+totalSum.toString()+"$");
    $(".order-count").text(Cart.length.toString());

}

exports.removeFromCart = removeFromCart;
exports.addToCart = addToCart;

exports.getItemsInCart = getItemsInCart;
exports.initialiseCart = initialiseCart;