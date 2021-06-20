// index.js = starting pt. for our server
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import postRoutes from  './routes/posts.js'

// Load Config
dotenv.config({
    path: "./config/config.env"
})

connectDB()

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

// ROutes Middleware
app.use('/posts', postRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`))