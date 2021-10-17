// Require modules
const request = require(`request`);

// Run args
const password = process.argv[2];
const token = process.argv[3]

// Password check
request.patch({
    url: `https://discord.com/api/v9/users/@me`,
    headers: {
        authorization: token
    },
    json: {
        email: ``,
        password: password
    }
}, (e, r, b) => {
    if (e || r.statusCode != 400) return console.error(`Password verification failed, possible reasons:\nNo internet connection\nInvalid token`);
    console.log(b.errors.password ? `Invalid password` : `Valid password`);
});