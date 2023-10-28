const express = require("express")
const router = express.Router()
const User = require("../models/user.js")

router.post("/register", async (req, res) => {
    try {
        const { first_name, last_name, email, age, password } = req.body

        const user = new User({ first_name, last_name, email, age, password })
        await user.save
      
        

    } catch (error) {
        res.status(500).send("Error de registro")
    }
   

})

module.exports = router
