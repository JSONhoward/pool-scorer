const settings = require('./config.json')
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
const cors = require('cors')({
    origin: true
})
admin.initializeApp()

let transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: settings.email,
        pass: settings.password
    }
})

exports.emailMessage = functions.https.onRequest((req, res) => {
    const {from, message, subject} = req.body
    cors(req, res, () => {
        let body = `
        <p>from: ${from}</p>
        <p>subject: ${subject}</p>
        <br />
        <p>${message}</p>
        `

        const mailOptions = {
            from: 'jason@poolscorer.com',
            to: 'yourhoward@gmail.com',
            subject,
            html: body,
            text: message
        }

        return transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                console.error(err.message)
                return res.status(500).send({message: 'error'})
            }
            return res.status(200).send({message: 'success'})
        })
    })
})