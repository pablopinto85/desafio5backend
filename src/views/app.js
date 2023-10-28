const express = require('express');
const session = require("express-session")
const handlebars = require("express-handlebars")
const sessionRouter = require("../routes/sessions.js")
const viewsRouter = require("../routes/views.js")
const MongoStore = require("connect-mongo")
const path = require ("path")

const port = 8080;
const app = express();

app.use(express.urlencoded({ extended: true }))

app.use(session({
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://pablopinto1985:pablo1985@ecommerce.kyhfmlv.mongodb.net/?retryWrites=true&w=majority",
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 1000
    }),
    secret: "coderhouse",
    resave: true,
    saveUninitialized: true
}))

app.engine("handlebars", handlebars.engine({ defaultLayout: "main", extname: ".handlebars" }))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");


app.use("/api/sessions", sessionRouter)
app.use("/", viewsRouter)
app.use ("/login", sessionRouter)
app.use ("/register", sessionRouter)
app.use ("/products", viewsRouter)


app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));