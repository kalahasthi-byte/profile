const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

app.use(express.static(path.join(__dirname, "client/build")));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.USERNAME || "vmaddur007@gmail.com",
    pass: process.env.PASSWORD || "vonmuk-pegpaR-1rijmu",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.get("/", (req, res) => res.send("Hello world"));
app.get("/api/hello", (req, res) => res.send("Hello world"));

app.post("/api/email", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const company = req.body.company;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
  const message = req.body.message;

  const mail = {
    from: `${firstname} ${lastname}`,
    to: process.env.DESTINATION || "maddur.vamshi@gmail.com",
    subject: "Contact from profile portal!",
    html: `<p>Name: ${firstname} ${lastname}</p><p>Company: ${company}</p><p>Email: ${email}</p><p>Phone No.: ${phonenumber}</p><p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 400, message: "ERROR" });
    } else {
      res.json({ status: 200, message: "Message Sent" });
    }
  });
});

app.use(bodyParser.json());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

module.exports = app;
