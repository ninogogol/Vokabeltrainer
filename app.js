const express = require('express')
const cors = require('cors')
const routerVokabeltrainer = require('./routers/vokabeltrainer')

const PORT = process.env.PORT || 5040

const app = express()
app.listen(PORT, () => console.log('server is running on port ', PORT))

// Serve static files from the 'www' directory
app.use(express.static('www'))

// Parse incoming request bodies as JSON
app.use(express.json())

app.use(cors())

// Use the Vokabeltrainer router for requests to /vokabeltrainer
app.use('/vokabeltrainer', routerVokabeltrainer)