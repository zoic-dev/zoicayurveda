import nodemailer from "nodemailer";
import generateEmailTemplate from "../../../utils/generateEmailTemplate";

export async function POST(request) {
    try {
        const body = await request.json();

        const {
            name,
            phone,
            email,
            city,
            message,
            captchaToken
        } = body;

        if (!captchaToken) {
            return Response.json(
                { message: "Captcha token missing" },
                { status: 400 }
            );
        }

        const captchaResponse = await fetch(
            "https://www.google.com/recaptcha/api/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
            }
        );

        const captchaResult = await captchaResponse.json();

        if (!captchaResult.success) {
            return Response.json(
                { message: "Captcha verification failed" },
                { status: 403 }
            );
        }

        // const transporter = nodemailer.createTransport({
        //     host: "smtp.hostinger.com",
        //     port: 465,
        //     secure: true,
        //     auth: {
        //         user: process.env.EMAIL_USER,
        //         pass: process.env.EMAIL_PASS,
        //     }
        // });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const html = generateEmailTemplate(name, email, phone, city, message);

        // User-facing subject (important)
        const mailOptions = {
            from: `"Zoic Biotech" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            cc: email,
            subject: "We’ve received your enquiry | Zocveda Wellness",
            html: html,
        };

        await transporter.sendMail(mailOptions);

        return Response.json({ message: "Email sent successfully." });
    } catch (error) {
        console.error(error);
        return Response.json(
            { message: "Failed to send email.", error: error.message },
            { status: 500 }
        );
    }
}
