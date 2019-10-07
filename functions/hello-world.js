'use strict'

const functions = require('firebase-functions')

exports.helloWorld = functions.https.onRequest((request, response) => {
	console.log(1010, JSON.stringify(request.body))
	console.log(2020, request.body.name)

	console.log(3030, request.body.query)
	const output = {
		name: 'di!',
		whatYouWant: 'you really wanna know?',
	}
	response.send(output)
})
