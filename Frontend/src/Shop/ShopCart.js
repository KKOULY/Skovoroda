var Templates = require('./Templates');
var basil = require("basil.js");
var Cart = [];
var $cart = $("#cart");
// var $totalPrice = $("#total");

// $(".clear").click(function(){
//     clearCart();
//     //Оновлюємо відображення
//     updateCart();
// });
//
// function findCartElementIndex(pizza, size) {
//     let i = undefined;
//     Cart.forEach( (p,index) => {
//         if(pizza.id === p.pizza.id && size === p.size){
//             i = index;
//         }
//     })
//     return i;
// }

function addToCart(item, size) {
    //Приклад реалізації, можна робити будь-яким іншим способом
    // let cartIndex = findCartElementIndex(pizza,size);
    // if(Cart[cartIndex]) Cart[cartIndex].quantity += 1;
    // else {
    //     Cart.push({
    //         pizza: pizza,
    //         size: size,
    //         quantity: 1
    //     });
    // }
    Cart.push({
        item: item,
        size: size,
        quantity: 1
    })
    //Оновити вміст кошика на сторінці
    updateCart();
    console.log(pizza);
    console.log(size);
}

// function removeFromCart(cart_item) {
//     //Видалити піцу з кошика
//     let cartIndex = findCartElementIndex(cart_item.pizza,cart_item.size);
//     console.log(cartIndex);
//     if(cart_item !== 'undefined') Cart.splice(cartIndex,1);
//     //Після видалення оновити відображення
//     updateCart();
// }
//
// function clearCart() {
//     Cart = [];
//     updateCart();
// }
//
// function initialiseCart() {
//     //Фукнція віпрацьвуватиме при завантаженні сторінки
//     var saved_carts = basil.localStorage.get("cart");
//     if(saved_carts) Cart = JSON.parse(saved_carts);
//     console.log(Cart);
//     updateCart();
// }
//
// function getPizzaInCart() {
//     //Повертає піци які зберігаються в кошику
//     return Cart;
// }
//
function updateCart() {
    // basil.localStorage.set("cart",JSON.stringify(Cart));

    $cart.html("");

    let totalSum = 0;
    //Онволення однієї піци
    function showOneItemInCart(cart_item) {
        var html_code = Templates.ShopCart_OneItem(cart_item);
        // totalSum += cart_item.pizza[cart_item.size].price*cart_item.quantity;
        var $node = $(html_code);

        // $node.find(".plus").click(function(){
        //     //Збільшуємо кількість замовлених піц
        //     cart_item.quantity += 1;
        //
        //     //Оновлюємо відображення
        //     updateCart();
        // });
        // $node.find(".minus").click(function(){
        //     //Зменшуємо кількість замовлених піц
        //     if(cart_item.quantity>1) {
        //         cart_item.quantity -= 1;
        //         //Оновлюємо відображення
        //         updateCart();
        //     }
        // });
        // $node.find(".close").click(function(){
        //     console.log("close button clicked")
        //     removeFromCart(cart_item);
        // });

        $cart.append($node);
    }
    Cart.forEach(showOneItemInCart);
    // $totalPrice.text(totalSum.toString()+"₴");
    // $(".order-count").text(Cart.length.toString());

}

// exports.removeFromCart = removeFromCart;
exports.addToCart = addToCart;

// exports.getPizzaInCart = getPizzaInCart;
// exports.initialiseCart = initialiseCart;
//
// exports.PizzaSize = PizzaSize;