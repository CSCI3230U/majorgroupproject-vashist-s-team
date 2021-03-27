let express = require('express');
let app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

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