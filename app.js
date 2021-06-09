const express = require("express");
const app = express();
const port = process.env.PORT || 80;
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
const bodyParser = require("body-parser");
const customerRouter = require("./routes/customer");

dotenv.config({ path: "./config.env" });

//connecting to mongodb database
const db = process.env.DATABASE;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

//session
app.use(
  session({
    secret: "Banking System",
    resave: true,
    saveUninitialized: true,
  })
);

//flash
app.use(flash());

//setting messages variables globally
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.failure_msg = req.flash("failure_msg");
  next();
});

app.use(customerRouter);

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
