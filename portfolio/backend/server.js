const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();




app.use(cors({
  origin: "https://your-portfolio.vercel.app",
  methods: ["POST"],
}));
const PORT = process.env.PORT || 5000;

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


app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
