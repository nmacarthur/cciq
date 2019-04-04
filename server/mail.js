const mailjet = require("node-mailjet").connect(
  "e44db94d9e6c396f32f8531fe68b28b3",
  "1e10cb86cb561814a402fbcbe72709b5",
  {
    url: "api.mailjet.com", // default is the API url
    version: "v3.1", // default is '/v3'
    perform_api_call: true // used for tests. default is true
  }
);

const sendEmail = mailjet.post("send", {
  version: "v3.1"
});

const newEmailFromData = ({ name, email, mp, suburb, message, to }) => {
  const regex = new RegExp("/[\r\n]+/");
  const newMessage = message.split("\\n").map(string => `<p>${string}</p>`);
  const finalMessage = message;
  const emailData = {
    Messages: [
      {
        From: {
          Email: "nicholas@newwordorder.com.au",
          Name: name
        },
        To: [
          {
            Email: to,
            Name: name
          }
        ],
        ReplyTo: {
          email: email
        },
        Subject: "Test Email",
        HTMLPart: finalMessage
      }
    ]
  };

  sendEmail
    .request(emailData)
    .then(response => {
      /* do nothing */
    })
    .catch(error => {
      /* do nothing */
    });
};

const newSupporterPack = ({
  email,
  name,
  phone,
  company,
  suburb,
  address,
  postcode
}) => {
  const message = `
    name: ${name},
    email: ${email},
    phone: ${phone},
    company: ${company},
    address: ${address}, ${suburb}, ${postcode}
    `;

  const emailData = {
    Messages: [
      {
        From: {
          Email: "nicholas@newwordorder.com.au",
          Name: name
        },
        To: [
          {
            Email: "nicholas@newwordorder.com.au",
            Name: name
          }
        ],
        Subject: "New Supporter Pack Requested",
        TextPart: message
      }
    ]
  };

  sendEmail
    .request(emailData)
    .then(response => {
      /* do nothing */
    })
    .catch(error => {
      /* do nothing */
    });
};

module.exports = {
  newEmailFromData,
  newSupporterPack
};
