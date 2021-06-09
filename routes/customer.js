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
    myAccount = req.body.senderId;
    clientAccount = req.body.recieverId;
    transferBal = req.body.amount;
    const transferBalAmt = parseInt(transferBal);
    const firstUser = await Customer.findOne({ name: myAccount });
    console.log(firstUser);
    const secondUser = await Customer.findOne({ name: clientAccount });
    const thirdOne = parseInt(secondUser.Amount) + parseInt(transferBal); //Updating Successfully
    const fourthOne = parseInt(firstUser.Amount) - parseInt(transferBal);
    console.log(thirdOne);
    console.log(fourthOne);
    await Customer.findOneAndUpdate(
      { name: clientAccount },
      { Amount: thirdOne }
    );
    await Customer.findOneAndUpdate({ name: myAccount }, { Amount: fourthOne });

    await Transaction.create({
      sendername: firstUser.name,
      amount: transferBalAmt,
      receivername: secondUser.name,
    });
    res.redirect("/customers");
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
