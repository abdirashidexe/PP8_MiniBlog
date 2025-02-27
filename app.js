import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static('public'));

const PORT = 3000;

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/admin', async (req, res) => {
    res.render('admin');
});


//Tell the server to listen on our specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
