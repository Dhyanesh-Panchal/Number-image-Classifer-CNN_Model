const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 5000;


app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))


//END POINTS
app.get('/', (req, res) => {
    res.json({ "Hello": "Working" })
})



//SERVER
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`App is listening on: http://localhost:${port}`)
    }
})