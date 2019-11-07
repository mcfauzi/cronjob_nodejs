// import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer');

const mailer = nodemailer.createTransport({
    host: "YOUR_MAIL_HOST",
    port: YOUR_MAIL_PORT,
    secure: false,
    auth: {
        user: "YOUR_MAIL_USER",
        pass: "YOUR_MAIL_PASS"
    },
    tls: {
        rejectUnauthorized: false
    }
});

// export default mailer;
module.exports = {
    mailer: mailer,
}