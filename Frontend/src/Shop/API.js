var API_URL = "http://localhost:5050";

function backendGet(url, callback) {
    $.ajax({
        url: API_URL + url,
        type: 'GET',
        success: function(data){
            callback(null, data);
        },
        error: function() {
            callback(new Error("Ajax Failed"));
        }
    })
}

function backendPost(url, data, callback) {
    $.ajax({
        url: API_URL + url,
        type: 'POST',
        contentType : 'application/json',
        data: JSON.stringify(data),
        success: function(data){
            callback(null, data);
        },
        error: function() {
            callback(new Error("Ajax Failed"));
        }
    })
}

function getURL() {
    return API_URL;
}

// get composition list
exports.getCompositionsList = function (callback) {
    backendGet("/api/get-compositions-list/", callback);
};

exports.getItemsList = function(callback) {
    backendGet("/api/get-items-list/", callback);
};

exports.createOrder = function(order_info, callback) {
    backendPost("/api/create-order/", order_info, callback);
};

exports.getURL = getURL;