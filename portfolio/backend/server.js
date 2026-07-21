const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });


        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Portfolio Message from ${name}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
            `,
        });


        res.json({
            success: true,
            message: "Email sent",
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Email failed",
        });
    }
});


app.listen(5000, () => {
    console.log("Backend running on port 5000");
});
