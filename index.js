let express = require('express');
//Express-session for session id
let session = require('express-session');
//universal unique id creator 
const { v4: uuidv4} = require('uuid');
let app = express();

//Allows certain files to be accessible to public 
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(session({

    genid: () => uuidv4(),
    resave: false,//are we going to keep saving this file
    saveUninitialized:false,
    // cookie: {secure: true},
    secret: 'alpha chicken obtuse escobar',

}));

app.get('/login',function(request,response){
    response.sendFile(__dirname + '/loginPage.html')
})

app.post('/processLogin', function(request,response){
    console.log(request.body);
    response.send('hi');
})
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'),function(){
    console.log('Listening for reqests on port 3000');
});