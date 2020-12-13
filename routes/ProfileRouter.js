const express = require("express")

const router = express.Router();

/**
 * @route GET /api/profile
 * @desc Profile enpoint
 * @access Private
*/
router.get("/", (req,res) => {
    res.send("Private profile page")
})

module.exports = router;