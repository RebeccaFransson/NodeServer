const express = require('express')
var path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, "client")));

app.get('/hey', (req, res) => {
    res.json('hey there')
})

app.listen(process.env.PORT || 8080, () => {
    console.log('listening on port 8080')
})