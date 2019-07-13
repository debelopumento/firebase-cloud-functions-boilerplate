const bodyParser = require('body-parser')
const express = require('express')
const functions = require('./functions')

try {
	require('dotenv').config()
} catch (error) {
	console.warn('unable to load .env')
}

const PORT = process.env.PORT || 3030

const app = express()
app.use(bodyParser.json())
app.use(express.static('build'))

app.get('/', (req, res) => {
	res.send('yo world')
})

app.use('*', function(req, res) {
	res.status(404).json({ message: 'Not Found' })
})

let server

function runServer(port = PORT) {
	return new Promise((resolve, reject) => {
		server = app.listen(port, () => {
			console.log(`Your app is listening on port ${port}`)
			resolve()
		})
	})
}

if (require.main === module) {
	runServer().catch(err => console.error(err))
}

module.exports = { app, runServer }
