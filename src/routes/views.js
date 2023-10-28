// En views.js
const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

// Ruta GET para mostrar el formulario de registro
router.get("/register", (req, res) => {
    res.render("register");
});

// Ruta POST para manejar el registro del usuario
router.post("/register", async (req, res) => {
    try {
        const { first_name, last_name, email, age, password } = req.body;
        const user = new User({ first_name, last_name, email, age, password });
        await user.save();
        res.redirect("/login");
    } catch (error) {
        res.status(500).send("Error de registro");
    }
});


router.get("/login", (req, res) => {
    res.render("login");
});


router.post("/login", async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).send("Error de inicio de sesión");
    }
});

// Ruta para mostrar el perfil del usuario (GET)
router.get("/profile", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login");
    }
    const { first_name, last_name, email, age } = req.session.user;
    res.render("profile", { first_name, last_name, email, age });
});

module.exports = router;

