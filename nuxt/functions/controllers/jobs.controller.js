const registerRoute = require("../core/register-route");
const app = require("../core/app");
const axios = require("axios");
const multipart = require("parse-multipart-data");
const FormData = require("form-data");
const Mailgun = require("mailgun.js");
// const nodemailer = require("nodemailer");
// const sgMail = require("@sendgrid/mail");
const fs = require("fs");
const logFile = "mailLogs.txt";

async function writeFile(filename, obj) {
  try {
    const fileExists = fs.existsSync(filename);
    let entries = [];
    for (const [key, value] of Object.entries(obj)) {
      entries.push(`${key} : ${value}`);
    }
    const allValues = "\n" + entries.join("\n") + "\n";
    const data = `-----------------------------------------------------${allValues}-----------------------------------------------------
    `;
    if (fileExists) {
      const addNewContent = fs.appendFileSync(filename, "\n" + data, "utf-8");
    } else {
      const writeFile = fs.writeFileSync(filename, data, "utf-8");
    }
  } catch (error) {
    console.log("error writing file", error);
  }
}

app.get("/validate-captcha", async (req, res) => {
  // google captcha token validation
  try {
    const secret_key = process.env.GOOGLE_RECAPTCHA_SECRET;
    const token = req.query.token;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
    const response = await axios.post(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log("token response", response.data);
    if (response.data.success) {
      return res
        .status(200)
        .json({ success: true, message: "you are not a robot" });
    } else {
      return res.status(500).json({
        success: false,
        message: "you are robot",
        data: response.data,
      });
    }
  } catch (error) {
    console.log("error", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
});
// build multiple CRUD interfaces:
// app.get('/:id', (req, res) => res.send(req.params.id));

app.post("/", async (req, res) => {
  try {
    // MAILGUN TRANSPORTER
    const MAILGUN_USERNAME = process.env.MAILGUN_USERNAME;
    const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;

    const mailgun = new Mailgun(FormData);
    const mailgunClient = mailgun.client({
      username: MAILGUN_USERNAME,
      key: MAILGUN_API_KEY,
    });

    // NODEMAILER TRANSPORTER
    // let transporter = nodemailer.createTransport({
    //   host: "mail.rxtrainees.radixweb.net",
    //   port: 465,
    //   secure: true, // use SSL
    //   auth: {
    //     user: "tutorials@rxtrainees.radixweb.net", // generated ethereal user
    //     pass: "1soF#@Kc&6", // enter password here
    //   },
    //   tls: {
    //     rejectUnauthorized: false,
    //   },
    // });
    // let transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 465,
    //   secure: true, // use SSL
    //   auth: {
    //     user: "resumes.radixweb@gmail.com", // generated ethereal user
    //     pass: "fiqxjzhiwyuduagg", // enter password here
    //   },
    //   tls: {
    //     rejectUnauthorized: false,
    //   },
    // });

    // SENDGRID TRANSPORTER
    // const SENDGRID_API_KEY =
    //   "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";
    // sgMail.setApiKey(SENDGRID_API_KEY);

    var bodyBuffer = Buffer.from(req.body);
    var boundary = multipart.getBoundary(req.headers["content-type"]);
    var parts = multipart.parse(bodyBuffer, boundary);
    var bodyData = {
      FullName: req.query.FullName,
      JobTitle: req.query.JobTitle,
      JobCode: req.query.JobCode,
      State: req.query.State,
      City: req.query.City,
      Email: req.query.Email,
      Phone: req.query.Phone,
      TurboEmail: req.query.TurboEmail,
      ToEmail: req.query.ToEmail
        ? req.query.ToEmail
        : process.env.MAILGUN_TO_EMAILS,
    };

    // using mailgun api
    /*
    var mailgunForm = new FormData();
    mailgunForm.append("from", "varsha.oberoi@radixweb.com");
    mailgunForm.append("to", "shekhar.chawla@radixweb.com");
    mailgunForm.append("subject", "Testing file sending...");
    mailgunForm.append("text", "Testing some Mailgun awesomeness!");
    mailgunForm.append("attachment", parts[0].data, parts[0].filename);

    axios
      .post(MAILGUN_API, mailgunForm, {
        headers: {
          ...mailgunForm.getHeaders(),
        },
        auth: {
          username: "api",
          password: "key-1161b8b93cd548a98ac830024cce433a",
        },
      })
      .then((response) => {
        console.log("successs", response.data);
        return res.status(200).json({ success: true, message: response.data });
      })
      .catch((err) => {
        console.log("err", err);
        return res
          .status(500)
          .json({ success: false, message: err.response.data });
      });
    */

    // SEND USING MAILGUN
    const file = {
      filename: parts[0].filename,
      data: parts[0].data,
    };
    const attachment = [file];
    const mailgunData = {
      from: bodyData.Email,
      to: [bodyData.TurboEmail, bodyData.ToEmail],
      subject: "Career Form Data",
      html: `<html><body><h4>New Job Application with below Details</h4><p>Job Title: ${bodyData.JobTitle}</p><p>Job code: ${bodyData.JobCode}</p><p>Applicant Name: ${bodyData.FullName}</p><p>State: ${bodyData.State}</p><p>City: ${bodyData.City}</p><p>Email: ${bodyData.Email}</p><p>Turbo Email Address : ${bodyData.TurboEmail}</p><p>Phone: ${bodyData.Phone}</p><br /><p>Thanks & Regards</p><p>Radixweb</p></body></html>`,
      attachment,
    };
    const result = await mailgunClient.messages.create(
      MAILGUN_DOMAIN,
      mailgunData
    );

    // SEND USING NODEMAILER
    // const file = {
    //   filename: parts[0].filename,
    //   content: parts[0].data,
    // };
    // const attachments = [file];
    // const result = await transporter.sendMail({
    //   from: "resumes.radixweb@gmail.com", // sender address
    //   to: [bodyData.TurboEmail, bodyData.ToEmail],
    //   subject: "Career Form Data",
    //   html: `<html><body><h4>New Job Application with below Details</h4><p>Job Title: ${bodyData.JobTitle}</p><p>Job code: ${bodyData.JobCode}</p><p>Applicant Name: ${bodyData.FullName}</p><p>State: ${bodyData.State}</p><p>City: ${bodyData.City}</p><p>Email: ${bodyData.Email}</p><p>Turbo Email Address : ${bodyData.TurboEmail}</p><p>Phone: ${bodyData.Phone}</p><br /><p>Thanks & Regards</p><p>Radixweb</p></body></html>`,
    //   attachments,
    // });

    // SEND USING SENDGRID
    // const file = {
    //   filename: parts[0].filename,
    //   // content: parts[0].data,
    //   // content: parts[0].data.toString("base64"),
    //   content: "parts[0].data.toStrin)".toString("base64"),
    //   disposition: "attachment",
    // };
    // const attachments = [file];
    // const result = await sgMail.send({
    //   // from: "testdotnet@mailtest.radixweb.net", // sender address
    //   from: bodyData.Email,
    //   to: [
    //     bodyData.TurboEmail,
    //     bodyData.ToEmail,
    //     "krishna.makwana@radixweb.com",
    //     "varsha.oberoi@radixweb.com",
    //   ],
    //   subject: "Career Form Data",
    //   html: `<html><body><h4>New Job Application with below Details</h4><p>Job Title: ${bodyData.JobTitle}</p><p>Job code: ${bodyData.JobCode}</p><p>Applicant Name: ${bodyData.FullName}</p><p>State: ${bodyData.State}</p><p>City: ${bodyData.City}</p><p>Email: ${bodyData.Email}</p><p>Turbo Email Address : ${bodyData.TurboEmail}</p><p>Phone: ${bodyData.Phone}</p><br /><p>Thanks & Regards</p><p>Radixweb</p></body></html>`,
    //   attachments,
    // });

    console.log("sent", result);
    res.status(200).json({ success: true, message: result });
  } catch (error) {
    writeFile(logFile, { Date: new Date().toLocaleString(), ...bodyData });
    console.log("Something went wrong in post jobs!", error);
    return res.status(500).json({ success: false, message: error });
  }
});
// app.put('/:id', (req, res) => res.send(req.body));
// app.delete('/:id', (req, res) => res.send(req.params.id));
app.get("/", (req, res) => res.send("radixweb 1236"));

// Expose Express API as a single Cloud Function:
exports.jobs = registerRoute(app);
