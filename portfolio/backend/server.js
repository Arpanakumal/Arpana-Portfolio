const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS with dynamic origin checking. You can set ALLOWED_ORIGINS as a
// comma-separated env var in production if domains change.
const defaultAllowed = [
    "http://localhost:5173",
    "https://arpana-portfolio-six.vercel.app",
    "https://arpana-portfolio-1l5ovat3m-arpanakumals-projects.vercel.app"
];
const envAllowed = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(",").map(s => s.trim()) : [];
const allowedOrigins = [...new Set([...defaultAllowed, ...envAllowed])];

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like curl or server-to-server)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
            return callback(null, true);
        } else {
            return callback(new Error('CORS policy: Origin not allowed'), false);
        }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    optionsSuccessStatus: 200,
    preflightContinue: false,
    credentials: false
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

        // Basic validation for env vars
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error("Missing EMAIL_USER or EMAIL_PASS environment variables");
            return res.status(500).json({
                success: false,
                message: "Email credentials are not configured on the server. Please set EMAIL_USER and EMAIL_PASS."
            });
        }

        // Build transporter config to support custom SMTP providers
        const transporterOptions = {};

        if (process.env.EMAIL_HOST) {
            transporterOptions.host = process.env.EMAIL_HOST;
            transporterOptions.port = process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT, 10) : 465;
            transporterOptions.secure = (process.env.EMAIL_SECURE === "true") || transporterOptions.port === 465;
        } else {
            transporterOptions.service = process.env.EMAIL_SERVICE || "gmail";
        }

        transporterOptions.auth = {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        };

        const transporter = nodemailer.createTransport(transporterOptions);

        try {
            await transporter.verify();
            console.log("SMTP connection successful");
        } catch (verifyErr) {
            console.error("SMTP verification failed:", verifyErr && verifyErr.message ? verifyErr.message : verifyErr);
            return res.status(500).json({
                success: false,
                message: `SMTP verification failed: ${verifyErr && verifyErr.message ? verifyErr.message : String(verifyErr)}`
            });
        }

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        const info = await transporter.sendMail(mailOptions);

        console.log("Email sent:", info && (info.response || info.messageId));

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