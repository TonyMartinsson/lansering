const express = require('express')
const port = 3000;
const app = express()

app.get('/', (req,res)=> {
    res.status(200).send('Hello World!!!');
})

app.listen(port, () => {
    console.log('Server is running on port', port)
})