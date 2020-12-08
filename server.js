const { static } = require('express');
let express = require('express');
let app = express();
let port = 3000;

//Préparation du serveur
app.use(express.static(__dirname + '/www'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist/umd'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.listen(port, () =>{
    console.log("Le serveur est en route.");
    console.log(`Server listening at http://localhost:${port}`);
})

//Routes
app.get('/', (req, res, next) => {
    res.sendFile('www/index.html');
});