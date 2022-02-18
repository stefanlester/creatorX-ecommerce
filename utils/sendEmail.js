const nodemailer = require('nodemailer')
const nodemailerConfig = require('./nodemailderConfig')

const sendEmail =  async ({ to, subject, html }) =>{
    let testAccount = await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport(nodemailerConfig);

    return transporter.sendMail({
        from: '"creatorX👻" <stefanamoah001@gmail.com>', // sender address
        to,
        subject,
        html,
      });
}

module.exports = sendEmail