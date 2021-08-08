const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

exphbs.registerHelper("fixImg",function(data){
  let imageData = data.data.results[0].images[0].path;
  let s = "s";
  var position = 4;
  imageData = [
  imageData.slice(0, position),
  s,
  imageData.slice(position),
  ].join("");
  imageData = imageData + "/clean.jpg";
  return imageData
})
exphbs.registerHelper("fixUrl",function(data){
  let urlData = data.data.results[0].urls[0].url;
  urlData = urlData.split("?")[0];
})



app.use(session(sess));

// const helpers = require('./utils/helpers');

const hbs = exphbs.create({ partialsDir: "partials" });
// const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
