import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import {
PUBLIC_SMTP_HOST,
PUBLIC_SMTP_PORT,
PUBLIC_SMTP_SECURE,
PUBLIC_SMTP_AUTH_USER,
PUBLIC_SMTP_AUTH_PASS,
PUBLIC_FROM_MAIL_ADDRESS,
} from '$env/static/public'

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const retObj = {ret: "NG", message: "Internal Server Error."};
    try {
        const body = await request.json();
        const receiverEmailAddress = body.to_mail;
//console.log(body);
        const transItem = {
            host: PUBLIC_SMTP_HOST,
            port: PUBLIC_SMTP_PORT,
            secure: PUBLIC_SMTP_SECURE,
            auth: {
                user:PUBLIC_SMTP_AUTH_USER,
                pass: PUBLIC_SMTP_AUTH_PASS,
            },
        };
console.log(transItem);
        const sendItem = {
            from: PUBLIC_FROM_MAIL_ADDRESS,
            to: receiverEmailAddress,
            subject: body.title,
            text: body.content,
        }        
console.log(sendItem);
        retObj.ret = "OK";
        let transporter = nodemailer.createTransport(transItem);
        let info = await transporter.sendMail(sendItem);
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));        
        return json(retObj);
    } catch (e) {
        console.error(e);
        return json(retObj);   
    } 
}
