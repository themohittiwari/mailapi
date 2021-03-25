const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);


router.get("/",(req,res)=>{
  res.send("Hello")
})

router.post("/edit/vendor",(req,res)=>{
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "1500011@np.balbharati.org", // generated ethereal user
          pass: "charutiwari", // generated ethereal password
        },
    });
        let info =  transporter.sendMail({
            from: '"Cocentric.in" <foo@example.com>', // sender address
            to: req.body.details.email, // list of receivers
            subject: "One time password", // Subject line
            text: `your otp for edit vendor details is ${req.body.details.otp}`, // plain text body
          });
})


app.listen(5000, () => console.log("Server Running"));