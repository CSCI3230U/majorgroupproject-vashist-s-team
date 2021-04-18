//This was taken from Saenthuran Vignarajah's Lab 9
const mongoose = require('mongoose');
//admin
//9WolYqMBxzFaRk0e
mongoose.Promise = global.Promise;
const mongoDBURL = 'mongodb+srv://admin:9WolYqMBxzFaRk0e@zing-database.90dj6.mongodb.net/zingUsers?retryWrites=true&w=majority'
mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

});
mongoose.connection.on('connected',() =>{
    console.log("Db is connected");
})
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

let Schema = mongoose.Schema;
const dbSchema = new Schema({
    email: String,
    name: String,
    Address: String,
    password: String
    
},{
    collection: 'userInfo'
})

const dbStats = new Schema({
    year: Number,
    day: Number,
    month: Number,
    timeSpent: Number,
    visitors: Number

},{
    collection: 'dbStats'
})

module.exports.Stats = mongoose.model('dbStats', dbStats);
module.exports.Info = mongoose.model('userInfo', dbSchema);
