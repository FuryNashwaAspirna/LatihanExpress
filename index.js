const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res)=> {
    res.send('Halo Aku Express!!');
});

app.get('/login', (req, res)=> {
    res.send('Delete');
});

app.post('/register', (req, res)=> {
    res.send('Request for register');
})

app.pud('/instal', (req, res) => {
    res.send('Berhasil di install!')
});

app.pud('/delete', (req, res) => {
    res.send('Berhasil di install!')
});
app.listen(port, ()=> console.log(`App listen on port ${port}`))