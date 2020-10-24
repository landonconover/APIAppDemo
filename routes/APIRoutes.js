const express = require('express');
const router = express.Router();

let initalTodos = [
    {id: 1, todo: "Buy milk.", complete: false, category: "Grocery"},
    {id: 2, todo: "Clean the cat box.", complete: false, category: "House"},
    {id: 3, todo: "Chips and salsa.", complete: true, category: "Grocery"},
    {id: 4, todo: "Finish Homework for DGM 3760", complete: false, category: "School"}
]

router.get('/', (req, res) => {

    res.json(initalTodos)
})



module.exports = router;