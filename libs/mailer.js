import nodemailer from 'nodemailer';

const mailer = nodemailer.createTransport({
    host: "mail.gotravelly.com",
    port: 587,
    secure: false,
    auth: {
        user: "official@gotravelly.com",
        pass: "Official123@GoTravelly"
    },
    tls: {
        rejectUnauthorized: false
    }
});

export default mailer;