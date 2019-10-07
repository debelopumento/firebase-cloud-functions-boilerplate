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

exports.editPost = functions.https.onRequest(async (req, res) => {
	if (req.method !== 'PUT') {
		return res.status(200).send(`You're weird!`)
	}

	const mongoClient = await mongodb.MongoClient.connect(DATABASE_URL)
	const postId = req.params && String(req.params[0]).slice(1)
	const doc = await mongoClient
		.db('dcf')
		.collection('posts')
		.updateOne(
			{
				_id: ObjectID(postId),
			},
			{
				$set: {
					content: '<div>di is too cool to be true</div>',
				},
			},
		)

	res.send(JSON.stringify(doc))
})
