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

exports.deletePost = functions.https.onRequest(async (req, res) => {
	if (req.method !== 'DELETE') {
		return res.status(400).send(`You're weird!`)
	}

	const mongoClient = await mongodb.MongoClient.connect(DATABASE_URL)
	const postId = req.params && String(req.params[0]).slice(1)
	const doc = await mongoClient
		.db('dcf')
		.collection('posts')
		.remove({
			_id: ObjectID(postId),
		})

	res.send(200)
})
