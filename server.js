const ejs = require("ejs");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const rowdy = require("rowdy-logger");
const rowdyResults = rowdy.begin(app);
const axios = require("axios");
const cryptoJS = require("crypto-js");
const db = require("./models");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;

// ============================================ //
//                 MIDDLE...WHERE?
// ============================================ //
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(require("cookie-parser")());
app.use(require("morgan")("tiny"));

//
app.use(async (req, res, next) => {
  if (req.cookies.userId) {
    const decryptedId = cryptoJS.AES.decrypt(
      req.cookies.userId,
      "asdfasdf"
    ).toString(cryptoJS.enc.Utf8);
    console.log(decryptedId);
    const user = await db.user.findOne({
      where: {
        id: decryptedId,
      },
    });
    res.locals.user = user;
  } else {
    res.locals.user = null;
  }
  next();
});

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

// home page
app.get("/", async (req, res) => {
  try {
    const results = await axios.get(
      "https://geek-jokes.sameerkumar.website/api?format=json"
    );
    // console.log(results.data);
    res.render("pages/index", {
      display: results.data,
    });
  } catch (err) {
    console.log(err);
  }
});
// favorites
app.get("/favorites", async (req, res) => {
  const user = await db.user.findOne({
    where: { id: res.locals.user.id },
    include: [db.saved_joke],
  });
  console.log(user);
  res.render("pages/favorites", { user: user });
  console.log("see this log?", res.locals.user);
});

app.post("/favorites", (req, res) => {
  res.locals.user.createSaved_joke({ joke_content: req.body.joke });
  res.redirect("/favorites");
  console.log(req.body);
  // console.log(res.locals.user);
});

// about page
app.get("/about", (req, res) => {
  res.render("pages/about");
});

// favorites page
app.get("/favorites", (req, res) => {
  res.render("pages/about");
});

// ============================================= //

app.listen(PORT, () => {
  console.log(`port: ${PORT} you got served!!!`);
  rowdyResults.print();
});
