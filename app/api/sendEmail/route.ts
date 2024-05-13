import type { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from 'next/server';
import { json } from 'stream/consumers';

export async function POST(req: Request, res: NextApiResponse) {
    //res.status(200).send("Email sent successfully");
if (req.method === 'POST') {
    const emailName = process.env.NEXT_PUBLIC_EMAIL_NAME;
    const password = process.env.NEXT_PUBLIC_OUTGOING_PASSWORD;
    const data = await req.json();
    const {email, message} = data;

    let transporter = nodemailer.createTransport({
        host: "smtp.mail.me.com",
        port: 587,
        secure: false,
        auth: {
            user: emailName,
            pass: password
        }
    });

    const emailMessage = {
        from: emailName,
        to: emailName,
        subject: "Someone is trying to contact you",
        text: message,
        html: `<p>${message}</p>`,
        replyTo: email
    }

    try {
   const info = await transporter.sendMail(emailMessage);
   console.log(info);
   return NextResponse.json({status: 201})
    } catch (err) {
        console.error("Error sending mail:", err)
        return NextResponse.json({error: err}, {status: 500})
    }

 } else {
    res.status(405).json({ message: 'Method Not Allowed' });
 }
}