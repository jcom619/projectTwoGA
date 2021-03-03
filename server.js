const ejs = require("ejs");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const rowdy = require("rowdy-logger");
const rowdyResults = rowdy.begin(app);
const axios = require("axios");
const PORT = process.env.PORT || 3000;

// ============================================= //
//                   STATIC FILES
// ============================================= //

app.use(express.static("public"));
// CSS
app.use("/css", express.static(__dirname + "public/css/"));
app.use("/js", express.static(__dirname + "public/js/"));

// TEMPLATE ENGINE
app.set("view engine", "ejs");
app.use(expressLayouts);

// ============================================= //
//                      ROUTES
// ============================================= //

// index/home page
app.get("/", (req, res) => {
  res.render("pages/index");
});

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
async function makeAFunny() {
  const results = await axios.get();
}

// ============================================= //

app.listen(PORT, () => {
  console.log(`port: ${PORT} you got served!!!`);
  rowdyResults;
});
