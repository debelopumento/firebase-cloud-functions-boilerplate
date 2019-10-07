'use strict'

const mongodb = require('mongodb')

try {
	require('dotenv').config()
} catch (error) {
	console.warn('unable to load .env')
}
const DATABASE_URL = process.env.DATABASE_URL

const functions = require('firebase-functions')
const ObjectID = require('mongodb').ObjectID

exports.createPost = functions.https.onRequest(async (req, res) => {
	if (req.method !== 'POST') {
		return res.status(400).send(`You're weird!`)
	}

	const mongoClient = await mongodb.MongoClient.connect(DATABASE_URL)
	const doc = await mongoClient
		.db('dcf')
		.collection('posts')
		.insert({
			content: '<div>di is cool</div>',
		})

	res.send(JSON.stringify(doc))
})
