var crypto	=	require('crypto');
var Items_List = require('./data/Shop_Items_List');
var LIQPAY_PRIVATE_KEY = "sandbox_1vNZ3a4wxCwoWNYxiNoLZ5i2VR2V01272O8WPRzy";
var LIQPAY_PUBLIC_KEY = "sandbox_i90888504006";

exports.getItemsList = function(req, res) {
    res.send(Items_List);
};

exports.createOrder = function(req, res) {
    var order_info = req.body;
    console.log("Creating Order", order_info);

    function calculatePrice(items) {
        let price = 0;
        items.forEach(function (el) {
            price+=(el.quantity*el.item.price);
        })
        return price;
    }

    // function createDescription(order_info) {
    //     let description = '';
    //     description+="Замовлення піци: "+order_info.name+"\n";
    //     description+="Телефон: "+order_info.number+"\n";
    //     description+="Адреса доставки: "+order_info.address+"\n";
    //     description+="Замовлення:\n";
    //     order_info.pizzas.forEach(function (el) {
    //         description+="\t-"+el.quantity+" шт. "+(translate_size(el.size))+el.pizza.title+"\n";
    //     })
    //     description+="Загалом: "+calculatePrice(order_info.pizzas)+"\n";
    //     return description;
    //
    //     function translate_size(size) {
    //         switch (size) {
    //             case "big_size":return "[Велика] ";
    //             case "small_size":return "[Мала] ";
    //         };
    //     }
    // }

    var order  =  {
        version:  3,
        public_key:  LIQPAY_PUBLIC_KEY,
        action:  "pay",
        amount: calculatePrice(order_info.items),
        currency:  "UAH",
        description:  calculatePrice(order_info.items),
        order_id:  Math.random(),
        sandbox:  1
    };
    console.log(order);

    var data  =  base64(JSON.stringify(order));
    var signature  =  sha1(LIQPAY_PRIVATE_KEY  +  data  +  LIQPAY_PRIVATE_KEY);
    res.send({
        data: data,
        signature: signature,
        success: true
    });
};

function  base64(str)   {
    return  new  Buffer(str).toString('base64');
}

function  sha1(string)  {
    var sha1  =  crypto.createHash('sha1');
    sha1.update(string);
    return  sha1.digest('base64');
}