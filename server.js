const { static } = require('express');
let express = require('express');
let app = express();
let port = 3000;

//Préparation du serveur
app.set('view engine', 'ejs');  //On définit ejs comme le moteur de vues
app.use('/views', express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/www'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist/umd'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.listen(port, () =>{
    console.log("Le serveur est en route.");
    console.log(`Server listening at http://localhost:${port}`);
})


//Vues
//      INDEX
app.get('/', (req, res, next) => {
    res.render('index.ejs');
})

//      BLOG
app.get('/blog', (req, res, next) => {
    res.render('blog.ejs');
})