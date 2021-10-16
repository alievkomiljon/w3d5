const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false});

const date = new Date();
let hour = date.getHours();

//For testing hours
//hour =7;
//hour =20;
let css = (hour < 6 || hour > 18) ? "css/night.css" : "css/day.css"



app.use('/css', express.static(path.join(__dirname, 'css')));
app.get('/', (req, res) => {
 res.send(`
<!DOCTYPE html>
<html lang='en'>
<head>
<title>Express JS</title>
<meta charset='utf-8' />
<!--<link rel="stylesheet" href=${css}><!--Only response had to use css!-->-->
</head>
    <body>
        <form action='/result' method="post">
            <label for'name'>Name</label>
            <input type='text' id='name' name='name'/>
            <label for'age'>Age</label>
            <input type='text' id='age' name='age'/>
            <input type='submit' value='Submit Query'>
        </form>
    </body>
</html
 `);
});

app.post('/result', urlencodedParser, (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
 if (!name) {
 name = "person";
 }
 if (!age) {
    age = 24;
    }
 res.send(`
 <!DOCTYPE html>
<html lang='en'>
<head>
<title>Express JS</title>
<meta charset='utf-8' />
<link rel="stylesheet" href=${css}>
</head>
    <body>
    <h2>Welcome ${name}, a ${age} years old person</h2>
    </body>
</html
 `);
});
app.listen(3000);
