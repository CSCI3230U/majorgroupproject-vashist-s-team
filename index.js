//https://www.youtube.com/watch?v=nFh7-HfODYY taught me how to use vuex
const express = require ('express');
const session = require('express-session');
const cors = require('cors');
const d3 = require('d3');
//Make sure this is not in the /public folder
const model = require('./modelDatabase');

const { v4: uuidv4 } = require('uuid');

const app = express();



const port = process.env.PORT || 4000;


const config = {
    origin: 'http://localhost:8080',
    credentials:true
}

app.use(cors(config));
// var auth = true;


// app.use(express.urlencoded({extended:false}));
app.use(express.json());

// app.use(bodsyparser.json())
app.use(session({
    genid: () => uuidv4(),
    resave:false,
    saveUninitailized: false,
    secret: 'rat submarine version horse vertigo'
}));

app.post('/signup', function(request,response){
    //Const data used to store information sent by user for signup
    console.log("hello?")
    model.Info.find({email:request.body.email})
    .then((data) =>{
        console.log(data[0]["email"])
        if(data[0]["email"] != null){
            response.json({"email": "true","error": "Email already exists!"})
        }
    })
    .catch((data) =>{
            if(request.body.password.length <= 5){
                //Creating error to send back to front end
                response.json({"password": "true", "error": "Password is less than 5 characters"});
            }else if(request.body.password.length > 5){
        
                const signup = new model.Info({
        
                    email: request.body.email,
                    name: request.body.name,
                    Address: request.body.address,
                    password: request.body.password
        
                });
        
                signup.save((error)=>{
                    if(error){
                        console.log(error);
            
                    }else{
                        request.session.start = (new Date()).getTime();
                        console.log(request.session.start);
                        console.log("Account created nice!")
                        model.Info.find({email:request.body.email})
                        .then((data) =>{
                            console.log("It connected");
                            response.json(data[0]['_id']);
                        })
                    }
                })
            }
    })


});


app.post('/login', function(request,response){
    model.Info.find({email:request.body.email,password:request.body.password})
    .then((data) =>{
        request.session.start= (new Date()).getTime();
        console.log(request.session.start);
        console.log("It connected");
        response.json(data[0]['_id']);
    })
    .catch((error) =>{
        console.log('error: ',error)
        response.json({"error": "Account information is incorrect or does not exist"})
    })
});

app.post('/traffic',function(request,response){
    console.log("this has connected")
    var todaysDate = {'year':(new Date()).getFullYear(), 'month':(new Date()).getMonth(), 'day':(new Date()).getDate()}
    
    model.Stats.find({year:todaysDate.year,month:todaysDate.month,day:todaysDate.day})
    .then((data)=>{
        console.log(data)
        //Everytime a user refreshes the page it will accept it as a user connecting to the website and update the 
        //number of users who has visited the website that day
        model.Stats.findOneAndUpdate(todaysDate,{visitors:data[0]['visitors']+1},function(err,doc){
            if(err){


            }
            
        })
    })
    .catch((error) =>{
//If the search comes up empty then it will create the information for the new date and update it to zingUsers.dbStats in mongodb
        var todaysDateforCreating = new model.Stats({
            'year':(new Date()).getFullYear(), 
            'month':(new Date()).getMonth(), 
            'day':(new Date()).getDate(),
            'timeSpent':0,
            'visitors':1});

        todaysDateforCreating.save((error)=>{
            if(error){
                console.log("error:",error);
            }else{
                console.log("new date added to db")
            }
        })

    })


});

app.post('/getData',function(request,response){
    console.log(request.body);
    if(request.body.day != "Day"){
        request.session.Year = request.body.year;
        request.session.Month = request.body.month-1;
        request.session.Day = request.body.day;
        console.log(request.session.Day)
        model.Stats.find({year:request.session.Year,month:request.session.Month,day:request.session.Day})
        .then((data)=>{
            response.json(data);
        })
        .catch((error) =>{

            console.log('error: ',error)
        })
    }else{
        request.session.Year = request.body.year;
        request.session.Month = request.body.month-1;
        model.Stats.find({year:request.session.Year,month:request.session.Month})
        .then((data)=>{
            response.json(data);
        })
        .catch((error) =>{
            
            console.log('error: ',error)
        })      
    }
})


app.post('/logout',function(request,response){
    request.session.end= (new Date()).getTime();
    request.session.timeSpent = request.session.end - request.session.start;
    console.log(request.session.timeSpent);
    var todaysDateforTime = {'year':(new Date()).getFullYear(), 'month':(new Date()).getMonth(), 'day':(new Date()).getDate()}

    model.Stats.find({year:todaysDateforTime.year,month:todaysDateforTime.month,day:todaysDateforTime.day})
    .then((data)=>{
        request.session.timeSpent += data[0]['timeSpent']
        //Everytime a user refreshes the page it will accept it as a user connecting to the website and update the 
        //number of users who has visited the website that day
        model.Stats.findOneAndUpdate(todaysDateforTime,{timeSpent:request.session.timeSpent},function(err,doc){
            console.log("successfully updated")         
            request.session.destroy();
            response.json('');
        })
    })


});

app.listen(port, ()=>{  

    console.log(`listening on ${port}`);
});