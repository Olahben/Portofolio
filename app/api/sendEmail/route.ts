import type { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
import nodemailer from "nodemailer";
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest, {params}: {params: {email: string, message: string}}, res: NextApiResponse) {
    //res.status(200).send("Email sent successfully");
if (req.method === 'POST') {
    const emailName = process.env.NEXT_PUBLIC_EMAIL_NAME;
    const password = process.env.NEXT_PUBLIC_OUTGOING_PASSWORD;
    console.log(emailName ?? "NO EMAIL NAME");
    console.log(password ?? "NO EMAIL NAME");
    console.log(req.body.email);
    console.log(req.body.message);
    let transporter = nodemailer.createTransport({
        host: "smtp.mail.me.com",
        port: 587,
        secure: false,
        auth: {
            user: emailName,
            pass: password
        }
    });

    var message = {
        from: emailName,
        to: emailName,
        subject: "Someone is trying to contact you",
        text: "test test",
        html: `<p>test test</p>`,
        replyTo: "test@icloud.com"
    }

    try {
   const info = await transporter.sendMail(message);
   console.log(info);
   return NextResponse.json({data: info}, {status: 201})
    } catch (err) {
        console.error("Error sending mail:", err)
        return NextResponse.json({error: err}, {status: 500})
    }

 } else {
    res.status(405).json({ message: 'Method Not Allowed' });
 }
}