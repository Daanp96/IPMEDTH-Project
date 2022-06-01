import express from "express";
const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.static('pages'));
app.use(express.static('images'));
app.use(express.static('javascript'));

app.get('/', (req, res) => {
    res.send('index.html');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));