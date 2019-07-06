const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render("employee/addOrEdit", {
        viewTitle: "Insert Comment"
    });
});

module.exports = router;