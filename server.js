const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/auth");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.DB_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.get("/public/js/signup.js", function (req, res) {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(__dirname + "/public/js/signup.js");
});

app.use(session(sess));

const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

const forceValue = process.env.NODE_ENV === "production" ? false : false;
console.log(forceValue);
sequelize.sync({ force: forceValue }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
