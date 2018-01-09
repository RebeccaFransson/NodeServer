console.log('hey')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, "client")));

app.get('/hey', (req, res) => {
    res.json('hey there')
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})