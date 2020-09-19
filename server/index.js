const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//middleWare
app.use(bodyParser.json());
app.use(cors());

const info = require('./routes/api/info')
app.use('/api/info', info)

//handle production
if(process.env.NODE_ENV === 'production'){
    //static folder
    app.use(express.static(__dirname + '/public/'));

    //handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
