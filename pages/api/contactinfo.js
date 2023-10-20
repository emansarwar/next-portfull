






// import nodemailer from 'nodemailer';
// export default async function ContactAPI(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).send({ message: 'Only POST requests allowed' })
// }
// const { name, email, message } = req.body;
// const user = process.env.user;


//   const transporter = nodemailer.createTransport({
//     host: "smtp.forwardemail.net",
//     port: 465,
//     // host: "smtp.gmail.com",
//     // port: 465,
//     secure: true,
//     auth: {
//       user: user,
//       pass: process.env.pass,
//     },
//   });

//   try {
//     const mail = await transporter.sendMail({
//       from: user,
//       to: 'emansarwar3@gmail.com',
//       replyTo: email,
//       subject: `Contact form submission from ${name}`,
//       html: `<p>You have a new contact form submission</p><br>
//       <p><strong>Name: </strong> ${name} </p><br>
      
//       <p><strong>Message: </strong> ${message} </p><br>`,
//     });

//     console.log('Message Sent', mail.messageId);
//     return res.status(200).json({message: 'success'});
//   } catch (err) {
//     console.log(err);
//   res.status(500).json({
//     message: 'Could not send the email. Your message was not sent.'
//   });
// };
// };