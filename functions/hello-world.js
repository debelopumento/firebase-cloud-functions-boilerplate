'use strict'

const functions = require('firebase-functions')

exports.helloWorld = functions.https.onRequest((request, response) => {
	const output = {
		di: 'is cool',
	}
	response.send(output)
})
