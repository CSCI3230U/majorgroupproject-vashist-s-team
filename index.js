//https://www.youtube.com/watch?v=nFh7-HfODYY taught me how to use vuex
const express = require ('express');
const session = require('express-session');
const cors = require('cors');
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
        //Create some sort of information errors
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
        console.log("It connected");
        response.json(data[0]['_id']);
    })
    .catch((error) =>{
        //Create some sort of information errors
        console.log('error: ',error)
        response.json({"error": "Account information is incorrect or does not exist"})
    })
});

app.post('/logout',function(request,response){
    console.log("being worked on");
    request.session.destroy();
    response.json('');
})

app.listen(port, ()=>{  

    console.log(`listening on ${port}`);
});