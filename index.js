import express from "express";
const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('index.html');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));