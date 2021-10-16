const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false});

app.get('/', (req, res) => {
 res.send(`
 <form action='/result' method="post">
    <label for'name'>Name</label>
    <input type='text' id='name' name='name'/>
    <label for'age'>Age</label>
    <input type='text' id='age' name='age'/>
    <input type='submit' value='Submit Query'>
 </form>
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
 res.send(`Welcome ${name}, a ${age} years old person`);
});
app.listen(3000);
