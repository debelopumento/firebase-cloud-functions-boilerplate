'use strict'

const functions = require('firebase-functions')

exports.helloWorld = functions.https.onRequest((request, response) => {
	const output = {
		name: 'di!',
		whatYouWant: 'you really wanna know?',
	}
	response.send(output)
})
