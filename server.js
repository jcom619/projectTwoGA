const ejs = require("ejs");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const rowdy = require("rowdy-logger");
const rowdyResults = rowdy.begin(app);
const axios = require("axios");
const cryptoJS = require("crypto-js");
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(require("cookie-parser")());
app.use(require("morgan")("tiny"));

// ============================================= //
//                   STATIC FILES
// ============================================= //

// CSS
app.use("/css", express.static(__dirname + "public/css/"));
app.use("/js", express.static(__dirname + "public/js/"));

// TEMPLATE ENGINE
app.set("view engine", "ejs");
app.use(expressLayouts);

// ============================================= //
//                      ROUTES
// ============================================= //

app.use("/users", require("./controllers/usersController.js"));

// index/home page
app.get("/", (req, res) => {
  res.render("pages/index");
});
// login
// app.get("/login", (req, res) => {
//   res.render("pages/login");
// });

// app.get("/signup", (req, res) => {
//   res.render("pages/signup");
// });

// app.post("/users", (req, res) => {
//   console.log(req.body);
//   res.send("?");
// });

// archive page
app.get("/archived", (req, res) => {
  res.render("pages/archived");
});

// about page
app.get("/about", (req, res) => {
  res.render("pages/about");
});

// favorites page
app.get("/favorites", (req, res) => {
  res.render("pages/about");
});

// API
async function jokeApiRequest() {
  const config = {
    method: "get",
    url: "https://geek-jokes.sameerkumar.website/api?format=json",
  };
  let res = await axios(config);

  console.log(res.status);
}

jokeApiRequest();

async function makeAFunny() {
  const results = await axios.get();
}

// ============================================= //

app.listen(PORT, () => {
  console.log(`port: ${PORT} you got served!!!`);
  rowdyResults.print();
});
