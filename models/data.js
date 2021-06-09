const customer = require("../models/customer");

const c1 = new customer({
  name: "Varun",
  email: "varun_45@gmail.com",
  amount: 50000,
});

const c2 = new customer({
  name: "Tanmay",
  email: "tanmay33@gmail.com",
  amount: 100000,
});

const c3 = new customer({
  name: "Yashit",
  email: "yashitkr@yahoo.com",
  amount: 12000,
});

const c4 = new customer({
  name: "Rishabh",
  email: "rishabhco19@hotmail.com",
  amount: 40000,
});

const c5 = new customer({
  name: "Amrita",
  email: "amk2002@gmail.com",
  amount: 7000,
});

const c6 = new customer({
  name: "Disha",
  email: "disha_9034@yahoo.com",
  amount: 90000,
});

const c7 = new customer({
  name: "Rohit",
  email: "rohit@gmail.com",
  amount: 50000,
});

const c8 = new customer({
  name: "Ritesh",
  email: "ritesh_55@gmail.com",
  amount: 15000,
});

const c9 = new customer({
  name: "Anjali",
  email: "anjali_24@gmail.com",
  amount: 500000,
});

const c10 = new customer({
  name: "Naveen",
  email: "naveenydv75@gmail.com",
  amount: 10000,
});

module.exports = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10];
