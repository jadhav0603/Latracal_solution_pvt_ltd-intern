const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true       
    },
    author:{
        type:String,
        required:true
    },
    publish_Date:{
        type:Date,
        required:true
    },
    totalPages:{
        type:Number,
        required:true
    },
    ratings:{
        type:Number,
        default: 1
    },
    reviews: [
    {
      user: { type: String },
      comment: { type: String },
      date: { type: Date, default: Date.now }
    }
  ]

}, { timestamps: true })

const bookModel = mongoose.model('books', bookSchema)

module.exports = bookModel