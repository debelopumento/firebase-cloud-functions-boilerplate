'use strict'

const mongodb = require('mongodb')

try {
	require('dotenv').config()
} catch (error) {
	console.warn('unable to load .env')
}
const DATABASE_URL = process.env.DATABASE_URL

const functions = require('firebase-functions')

exports.getLatestPosts = functions.https.onRequest(async (req, res) => {
	const client = await mongodb.MongoClient.connect(DATABASE_URL)

	const docs = await client
		.db('dcf')
		.collection('posts')
		.find()
		.toArray()
	res.send(JSON.stringify(docs))
})
