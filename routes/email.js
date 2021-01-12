var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.username || "vmaddur007@gmail.com",
    pass: process.env.password || "vonmuk-pegpaR-1rijmu",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

/* post email. */
router.post("/", function (req, res, next) {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const company = req.body.company;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
  const message = req.body.message;

  const mail = {
    from: `${firstname} ${lastname}`,
    to: process.env.destination || "maddur.vamshi@gmail.com",
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

module.exports = router;
