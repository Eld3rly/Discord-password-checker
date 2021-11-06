// Require modules
const request = require(`axios`);

// Run args
const password = process.argv[2];
const token = process.argv[3]

axios.patch("https://discord.com/api/v9/users/@me",
    {
        "email": "",
        "password": password
    },
    {
        headers: {
            "authorization": token
        },
    }
).catch(e=>{
    console.log(e.response.data.errors.password?"Invalid password":"Valid password")
})