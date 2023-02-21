const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
// require("dotenv").config();
require("./passport");

const PORT = process.env.PORT || 3002;
app.use(
  cookieSession({
    name: "session",
    keys: ["tron"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);
dotenv.config();
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log("Server is running on port 3001");
});
