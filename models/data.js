const customer = require("../models/customer");

const c1 = new customer({
  name: "Rajat",
  email: "rajat52co@gmail.com",
  amount: 50000,
});

const c2 = new customer({
  name: "Tanmay",
  email: "tanmayAr@gmail.com",
  amount: 100000,
});

const c3 = new customer({
  name: "Shivani",
  email: "shivanisingh@yahoo.com",
  amount: 12000,
});

const c4 = new customer({
  name: "Mohit",
  email: "mohitco19@hotmail.com",
  amount: 40000,
});

const c5 = new customer({
  name: "Amrita",
  email: "amk2003@gmail.com",
  amount: 7000,
});

const c6 = new customer({
  name: "Nitya",
  email: "nitya_9034@yahoo.com",
  amount: 90000,
});

const c7 = new customer({
  name: "Rohit",
  email: "rohittgup9co@gmail.com",
  amount: 50000,
});

const c8 = new customer({
  name: "Aman Dev",
  email: "aman_dev55co@gmail.com",
  amount: 15000,
});

const c9 = new customer({
  name: "Kritika",
  email: "krit52co@gmail.com",
  amount: 500000,
});

const c10 = new customer({
  name: "Nitin",
  email: "bankar75@gmail.com",
  amount: 10000,
});

module.exports = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10];
