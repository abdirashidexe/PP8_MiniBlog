import express from 'express';
import mariadb from 'mariadb';
import dotenv from 'dotenv';

const app = express();

dotenv.config();


const pool = mariadb.createPool({
   host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// Define function to connect to the DB
async function connect() {
    try {
        const conn = await pool.getConnection();
        console.log('Connected to the database!');
        return conn;
    } catch (err) {
        console.log(`Error connecting to the database ${err}`);
    }
}

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static('public'));

const PORT = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/admin', async (req, res) => {
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts');
    res.render('entries', { posts });
});

app.post('/confirmation',  async(req, res) =>{
    const conn = await connect();
    
    const newPost = {
        author: req.body.author,
        title: req.body.title,
        content: req.body.content
    };

    // const insert = conn.query(`INSERT INTO orders 
        // (author, title, content)
        // values (?, ?, ?)`,
        // [ newPost.author, newPost.title, newPost.content ]);


    console.log(newPost);

    res.render("confirmation", { newPost });
});

app.get('/entries', async (req, res) =>{
    const conn = await connect();
    res.render("entries");
});


//Tell the server to listen on our specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
