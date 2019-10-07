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

exports.getLatestPosts = functions.https.onRequest(async (req, res) => {
	const mongoClient = await mongodb.MongoClient.connect(DATABASE_URL)
	const docs = await mongoClient
		.db('dcf')
		.collection('posts')
		.find()
		.toArray()
	res.send(JSON.stringify(docs))
})

exports.getPostById = functions.https.onRequest(async (req, res) => {
	const mongoClient = await mongodb.MongoClient.connect(DATABASE_URL)
	const postId = req.params && String(req.params[0]).slice(1)
	const doc = await mongoClient
		.db('dcf')
		.collection('posts')
		.findOne({
			_id: ObjectID(postId),
		})
	res.send(JSON.stringify(doc))
})
