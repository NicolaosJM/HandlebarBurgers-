var orm = require("../config/orm.js");

var burger = {
    all: function (callback) {
        orm.all("burgers", function (response) {
            callback(response);
        });
    },
    update: function (id, callback) {
        console.log("hello")
        orm.update("burgers", id, callback);
    },
    create: function (columns, values, callback) {
        orm.create("burgers", columns, values, function (response) {
            callback(response);
        });
    }
    
    // delete: function (condition, callback) {
    //     orm.delete("burgers", condition, function (response) { 
    //         callback(response);
    //     });
    // }
};

module.exports = burger;