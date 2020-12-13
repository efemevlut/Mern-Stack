const express = require("express")
const auth = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @route GET /api/profile
 * @desc Profile enpoint
 * @access Private
*/
router.get("/", auth, (req,res) => {
    res.send(req.decodedUser)
})

module.exports = router;