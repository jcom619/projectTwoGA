const router = require("express").Router();
const AES = require("crypto-js/aes");
const bcrypt = require("bcrypt");
const db = require("../models");

router.get("/signup", (req, res) => {
  res.render("pages/signup");
});
router.post("/", async (req, res) => {
  // ##########
  //    BCRYPT
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  const user = await db.user.create({
    username: req.body.username,
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    // ##########
    //   age: ,
    email: req.body.email,
    password: hashedPassword,
  });

  const encryptedId = AES.encrypt(user.id.toString(), "asdfasdf").toString();
  res.cookie("userId", encryptedId);
  res.redirect("/");
});

router.get("/login", (req, res) => {
  res.render("pages/login", { errors: null });
});

router.post("/login", async (req, res) => {
  const user = await db.user.findOne({
    where: {
      username: req.body.username,
    },
  });

  if (bcrypt.compareSync(req.body.password, user.password)) {
    const encryptedId = AES.encrypt(user.id.toString(), "asdfasdf").toString();
    res.cookie("userId", encryptedId);
    res.redirect("/");
  } else {
    res.render("pages/login", { errors: "Invalid email/password" });
  }
});

router.get("/logout", (req, res) => {
  const encryptedZero = AES.encrypt(0, "asdfasdf").toString();
  res.clearCookie("userId");
  res.redirect("/");
});

//  router.get('/profile', async (req, res) => {
//    if (!res.locals.user) {
//      res.redirect('/users/login')
//      return
//    }

//    res.render('users/profile')
//  })

module.exports = router;
