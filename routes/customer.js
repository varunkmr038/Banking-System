const express = require("express");
const router = express.Router();

const customer = require("../models/customer");
const transaction = require("../models/transaction");
const defaultItems = require("../models/data");

//get routes starts here
router.get("/", (req, res) => {
  res.render("home", { title: "The Sparks Bank" });
});

router.get("/transferhistory", (req, res) => {
  transaction.find({}, (err, transfers) => {
    res.render("transferhistory", {
      title: "Transfer history",
      transferList: transfers,
    });
  });
});

router.get("/customers", (req, res) => {
  customer.find({}, (err, customers) => {
    if (customers.length === 0) {
      customer.insertMany(defaultItems, (err) => {
        if (err) {
          console.log(err);
        } else console.log("Customers added Successfully ");
      });
      res.redirect("/customers");
    } else {
      res.render("customers", {
        customersList: customers,
        title: "Users",
      });
    }
  });
});

router.get("/customers/:customerId", (req, res) => {
  const id = req.params.customerId;
  customer.findOne({ _id: id }, (err, info) => {
    res.render("customerinfo", { customer: info, title: "Customer" });
  });
});

router.get("/transfer", (req, res) => {
  customer.find({}, (err, docs) => {
    res.render("transfer", { title: "Transfer" });
  });
});

// post routes starts here

router.post("/transfer", async (req, res) => {
  try {
    myAccount = req.body.senderName;
    clientAccount = req.body.receiverName;
    transferBal = req.body.amount;
    const transferBalAmt = parseInt(transferBal);
    const firstUser = await customer.findOne({ name: myAccount });
    // console.log(firstUser);
    const secondUser = await customer.findOne({ name: clientAccount });
    const thirdOne = parseInt(secondUser.amount) + parseInt(transferBal); //Updating Successfully
    const fourthOne = parseInt(firstUser.amount) - parseInt(transferBal);
    // console.log(thirdOne);
    // console.log(fourthOne);
    await customer.findOneAndUpdate(
      { name: clientAccount },
      { amount: thirdOne }
    );
    await customer.findOneAndUpdate({ name: myAccount }, { amount: fourthOne });

    await transaction.create({
      sender: firstUser.name,
      receiver: secondUser.name,
      amount: transferBalAmt,
    });
    res.redirect("/customers");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
