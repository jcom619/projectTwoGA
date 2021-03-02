const express = require("express");
const app = express();
const rowdy = require("rowdy-logger");

const rowdyResults = rowdy.begin(app);
const PORT = process.env.PORT || 3000;

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// ============================================= //
//                    STATIC FILES
// ============================================= //
app.use(express.static("/public"));
// CSS
app.use("/css", express.static(__dirname + "public/css"));

// ============================================= //
//                      ROUTES
// ============================================= //
// index page
app.get("/", (req, res) => {
  res.render("pages/index");
});

// about page
app.get("/about", (req, res) => {
  res.render("pages/about");
});

// ============================================= //

app.listen(PORT, () => {
  console.log(`port: ${PORT} you got served!!!`);
  rowdyResults;
});
