const sendGridMail = require('@sendgrid/mail')
sendGridMail.setApiKey(process.env.REACT_SENDGRID_API_KEY)

const headers = {
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    'Access-Control-Allow-Credentials': "true",
    'Access-Control-Allow-Origin': process.env.REACT_SENDGRID_ALLOWED_URL,
};


exports.handler = function (event, context, callback) {
    if (event.httpMethod !== "POST") {
        return callback(null, {
            statusCode: 410,
            body: JSON.stringify({
                message: 'Only POST requests allowed.',
            }),
        });
    }

    // parse the body to JSON so we can use it in JS
    const payload = JSON.parse(event.body);

    // validate the form
    if (
        !payload.name ||
        !payload.email ||
        !payload.message
    ) {
        return callback(null, {
            statusCode: 422,
            headers,
            body: JSON.stringify({
                message: 'Required information is missing.',
            }),
        });
    }

    const msg = {
        to: process.env.REACT_SENDGRID_SENDER_EMAIL,
        from: process.env.REACT_SENDGRID_SENDER_EMAIL,
        subject: 'Vue/React Enquiry',
        html: `
            <h1>You got a new enquiry on your website</h1>
            <p>
                Name: ${payload.name || ''} <br/>
                Email: ${payload.email || ''} <br/>
                Phone: ${payload.tel || ''} <br/>
                Message: <pre>${payload.message || ''}</pre> <br/>
            </p>
        `,
        replyTo: payload.email
    }


        (async () => {
            try {
                let response = await sendGridMail.send(msg)
                return callback(null, {
                    statusCode: 200,
                    body: JSON.stringify(response),
                })
            } catch (error) {
                // console.log("error", error);
                let res = {};

                if (error.response) { 
                    // request responds with a code out of the 200 range
                    res = {
                        statusCode: error.response.status,
                        statusText: error.response.data.error,
                        body: JSON.stringify({ "result": error.message }),
                    }
                } else if (error.request) {
                    /*
                    * The request was made but no response was received, `error.request`
                    * is an instance of XMLHttpRequest in the browser and an instance
                    * of http.ClientRequest in Node.js
                    */
                    res = {
                        statusCode: 400,
                        statusText: error.request.data.error,
                        body: JSON.stringify({ "result": error.message }),

                    }
                } else {
                    // Something happened in setting up the request and triggered an Error
                    res = {
                        statusCode: 500,
                        body: JSON.stringify({ "result": error.message }),
                    }
                }

                return res;
            }
        })();


}