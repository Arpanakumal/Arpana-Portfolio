const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://arpana-portfolio-six.vercel.app",
        "https://arpana-portfolio-1l5ovat3m-arpanakumals-projects.vercel.app"
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Arpana Portfolio backend is running"
    });
});

app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        console.log("Request received:", req.body);
        console.log("EMAIL_USER:", process.env.EMAIL_USER);
        console.log("EMAIL_PASS Loaded:", !!process.env.EMAIL_PASS);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.verify();
        console.log("SMTP connection successful");

        const info = await transporter.sendMail({
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

        console.log("Email sent:", info.response);

        res.status(200).json({
            success: true,
            message: "Email sent successfully"
        });

    } catch (error) {
        console.error("========== EMAIL ERROR ==========");
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});