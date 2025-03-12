const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Serve HTML pages
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname, "about.html")));
app.get("/services", (req, res) => res.sendFile(path.join(__dirname, "services.html")));
app.get("/contact", (req, res) => res.sendFile(path.join(__dirname, "contact.html")));

// Nodemailer transporter configuration for custom email server
const transporter = nodemailer.createTransport({
    host: "mail.kanoministryoftransport.org.ng", // Custom mail server
    port: 465, // Use 465 for SSL, or 587 for TLS
    secure: true, // Set true for SSL (465), false for TLS (587)
    auth: {
        user: "complaints@kanoministryoftransport.org.ng",
        pass: "Transport@2025", // Use the actual email password
    },
});

// Contact form submission route
app.post("/send-message", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: "complaints@kanoministryoftransport.org.ng",
        subject: `New ${subject} Submission from ${name}`, // Including subject in the email subject
        text: `You have a new ${subject} from your website contact form:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return res.status(200).json({ message: "Your message has been sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send your message. Please try again later." });
    }
});

// Verify SMTP connection
transporter.verify((error, success) => {
    if (error) {
        console.error("SMTP connection error:", error);
    } else {
        console.log("SMTP is ready to send emails.");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
