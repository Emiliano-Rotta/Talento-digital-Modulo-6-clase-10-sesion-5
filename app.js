//Uso de Handlebars como Motor de Plantillas en Express

//paso 1 npm install express express-handlebars

const express = require ('express')
const app = express();
const { engine } = require('express-handlebars') //paso 2
const PORT = 3000;

//configurar Handlebars
app.engine('handlebars', engine()); //nos dice el motor de plantilla a usar y de donde lo traemos
app.set('view engine', 'handlebars'); //

app.get('/', (req, res)=>{
    const datos = {
        nombre: "Sebastian",
        fecha: new Date().toLocaleDateString()
    }
    res.render('home', datos)

})


app.listen(PORT, ()=>{
    console.log("Servidor corriendo en el puerto " + PORT)
})


