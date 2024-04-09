require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

const productRouter = require('./routes/product')
app.use('/api/v1', productRouter)

const connectDatabase = require('./database/connect')
const port = process.env.PORT || 5000
const startServer = async () => {
    try {
        await connectDatabase(process.env.MONGO_URI).then(() => {
            console.log('Database connection successful')
        })
        app.listen(port, () => {
            console.log('Server is listening at port ' + port)
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()