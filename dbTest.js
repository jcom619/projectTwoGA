const db = require("./models");

async function user() {
  try {
    const user = await db.user.create({
      username: "steve",
      first_name: "mundo",
      last_name: "huh",
      age: 39,
      email: "dude2@email.com",
      password: "12345",
    });
    await user.createSaved_joke({
      joke_content: "a random string!",
    });
  } catch (err) {
    console.log(err);
  }
}
user();

// crud db
// add auth

// send cookie to user
// middle ware for cookie check
