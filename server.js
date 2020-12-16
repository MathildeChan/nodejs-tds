const { static } = require('express');
let express = require('express');
let bodyparser = require('body-parser');
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
//BODY-PARSER
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


app.listen(port, () =>{
    console.log("Le serveur est en route.");
    console.log(`Server listening at http://localhost:${port}`);
})


let myObject = {
    nom: "MyObject",
    valeur: "10"
}

//Vues
//      INDEX   -   Avec variable passée
app.get('/', (req, res, next) => {
    res.render('index.ejs', {myObject: myObject});
})

//      BLOG
app.get('/blog', (req, res, next) => {
    res.render('blog.ejs');
})

app.post('/blog', (req,res,next)=> {
    console.log(req.body.name);
    res.render('blog.ejs');
})

//      RECEPTION DES ERREURS (404)
app.use((req, res, next) => {
    res.status(404).render('error.ejs');
})



