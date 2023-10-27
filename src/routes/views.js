const express = require("express")
const router = express.Router()

const authMiddleware = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }

    next();
};

router.get("/profile", authMiddleware, (req, res) => {
    const { first_name, last_name, email, age } = req.session.user
    res.render("profile", { first_name, last_name, email, age })
})

module.exports = router

