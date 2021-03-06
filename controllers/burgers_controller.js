var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (request, response) {
    burger.all(function (data) {
        console.log(data);
        response.render("index", {burgers: data});
    });
});

router.put("/api/update/:id", function (request, response) {
    console.log("success to here", request.params.id)
    // var condition = " id = " + request.params.id;
    // console.log("condition", condition);

    // burger.update({
    //     devoured: request.body.devoured
    // }, condition, function (result) {
    //     if (result.changedRows == 0) {
    //         return result.status(404).end();
    //     } else {
    //         result.status(200).end();
    //     }
    // });
    burger.update(request.params.id, function (result) {
        console.log(result);
        response.render("index", {burgers: result});
    });
});

router.post("/api/create", function (request, response) {
    burger.create([
        "burger_name"
    ], [
            request.body.burger_name
        ], function (result) {
            console.log(result);
            response.json({ id: result.insertId });
        });
});



// router.delete("/api/burgers/:id", function (request, result) {
//     var condition = "id = " + request.params.id;

//     burger.delete(condition, function (result) {
//         if (result.affectedRows == 0) {
//             return response.status(404).end();
//         } else {
//             response.status(200).end();
//         }
//     });
// });

module.exports = router;