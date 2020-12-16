import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';


const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(express.static('client/build'));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + 'client/build/index.html'));
    });

}



const PORT = process.env.PORT || 8000;




app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`)
})