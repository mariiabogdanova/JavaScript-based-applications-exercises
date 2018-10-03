//let name = 'Mariia'; 

//debugger;

//console.log(`Hello ${ name }`);

const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    //debugger;
    res.send('Hey, it worked');
});

//app.listen(3000, () => console.log('Server is up'));
app.listen(PORT, () => console.log(`Server is up on ${PORT}`));