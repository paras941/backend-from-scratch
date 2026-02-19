const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect ("mongodb+srv://paras:123@learning-mongoose.sjqn9ge.mongodb.net/learning")
    console.log("connected to database")
}

module.exports = connectDB();