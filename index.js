const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res)=> {
    res.send('Halo Aku Express!!');
});

app.delete('/delete', (req, res)=> {
    res.send('Delete');
});

app.post('/register', (req, res)=> {
    res.send('Request for register');
})

app.listen(port, ()=> console.log(`App listen on port ${port}`))