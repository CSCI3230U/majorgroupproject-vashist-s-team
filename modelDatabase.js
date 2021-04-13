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

let Schema = mongoose.Schema;
const dbSchema = new Schema({
    email: String,
    name: String,
    Address: String,
    password: String
    
},{
    collection: 'userInfo'
})
module.exports.Info = mongoose.model('userInfo', dbSchema);
