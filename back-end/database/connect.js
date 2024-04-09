const mongoose = require('mongoose')

const connectDatabase = async (uri) => {
    mongoose.connect(uri)
}

module.exports = connectDatabase