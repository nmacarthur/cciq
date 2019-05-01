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

const newEmailFromData = ({
  name,
  email,
  mp,
  suburb,
  message,
  to,
  location
}) => {
  const regex = new RegExp("/[\r\n]+/");
  const newMessage = message.split("\\n").map(string => `<p>${string}</p>`);
  const finalMessage = message;
  const emailData = {
    Messages: [
      {
        From: {
          Email: "cciqadvocacy@cciq.com.au",
          Name: name
        },
        To: [
          {
            Email: to,
            //Email: "nicholas@newwordorder.com.au",
            Name: mp
          }
        ],
        ReplyTo: {
          email: email
        },
        Subject: "Small business is a big deal",
        HTMLPart: finalMessage
      }
    ]
  };
  const messageToCCIQ = `
  name: ${name},
  email: ${email},
  suburb: ${suburb},
  site: ${location}
  `;

  const emailData2 = {
    Messages: [
      {
        From: {
          Email: "cciqadvocacy@cciq.com.au",
          Name: name
        },
        To: [
          {
            Email: "tbirkbeck@cciq.com.au",
            //Email: "nicholas@newwordorder.com.au",
            Name: name
          }
        ],
        Subject: "New MP Lobby ",
        TextPart: messageToCCIQ
      }
    ]
  };

  sendEmail
    .request(emailData)
    .then(response => {
      /* do nothing */
      sendEmail.request(emailData2);
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
          Email: "cciqadvocacy@cciq.com.au",
          Name: name
        },
        To: [
          {
            Email: "tbirkbeck@cciq.com.au",
            //Email: "nicholas@newwordorder.com.au",
            Name: name
          }
        ],
        Subject: "New Supporter Pack Requested",
        TextPart: message
      }
    ]
  };

  emailData2 = {
    Messages: [
      {
        From: {
          Email: "cciqadvocacy@cciq.com.au",
          Name: "Support Small Business Team"
        },
        To: [
          {
            Email: email,
            Name: name
          }
        ],
        Subject: "Thanks for ordering our promo pack!",
        HTMLPart: `<p>Dear Supporter,</p>
        <p>Welcome to the Small Business is a Big Deal campaign and thank you for ordering our promo pack!</p>
        <p>Small business makes up 98% of all businesses in Australia, and together we employ more Australians than government or large businesses. </p>
        <p>In fact, small businesses help put food on the table for nearly 5 million people, and give hundreds of thousands of young Australians their first job.</p> 
        <p>Small Business is a Big Deal aims to unite employers and employees, not drive them apart. We’re calling on all political parties to fix the three most urgent problems which small businesses say they face:</p>
        <ol>
          <li>Help employers and employees work better together</li>
          <li>Deliver affordable, reliable energy with lower emissions </li>
          <li>Stop the collapse in skills </li>
        </ol>
        <p>Your promo pack is on its way - now is the time to get active so we have a chance to win this fight!</p>
        <p>We will send you an email or two over the course of the campaign, but the best way to see all the action is on Facebook (https://www.facebook.com/CCIQLD/)</p>
        <p>Thank you,</p>
        <p>The Small Business is a Big Deal Team</p>`
      }
    ]
  };

  sendEmail
    .request(emailData)
    .then(response => {
      /* do nothing */
      sendEmail.request(emailData2);
    })
    .catch(error => {
      /* do nothing */
    });
};

const newPhotoCapture = ({ name, email, company, location }) => {
  const message = `
    name: ${name},
    email: ${email},
    company: ${company},
    location: ${location}
    `;

  const emailData = {
    Messages: [
      {
        From: {
          Email: "cciqadvocacy@cciq.com.au",
          Name: name
        },
        To: [
          {
            Email: "tbirkbeck@cciq.com.au",
            //Email: "nicholas@newwordorder.com.au",
            Name: name
          }
        ],
        Subject: "New Photo Filter Completed",
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
  newSupporterPack,
  newPhotoCapture
};
