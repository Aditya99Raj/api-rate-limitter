
const express = require('express')

const app = express()
const PORT = 3000

const cors = require("cors");
const rateLimit = require('express-rate-limit');



const apiRequestLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 10, // limit each IP to 10 requests per windowMs
    message: "Your limit exceeded",
    headers: true
})

app.use(cors());

app.use(apiRequestLimiter)


app.get('/', function (req, res) {
  return res.send('Hello World')
})



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})