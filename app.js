var express = require('express');
var app = express();
var my_module = require('./my_module');



app.use('/static', express.static(__dirname + '/public'));
app.set("view engine","ejs");

app.get('/',my_module.index);
app.get('/search',my_module.search);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
