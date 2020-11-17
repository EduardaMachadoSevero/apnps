const express = require ('express')
const app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path')

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))

app.get('/',function(req,res){
   res.render("index.ejs", {})
   
})

app.get('/usuarios',function(req,res){
    res.render("usuarios.ejs", {usuarios:[
        {nome:'Duda',email:'duda@hotmail.com'},
        {nome:'Helena',email:'helena@hotmail.com'},
        {nome:'João',email:'joao@hotmail.com'},
        {nome:'Ana',email:'ana@hotmail.com'}
    ] })
    
 })

 app.get('/add', function(req,res){
     res.render('adiciona.ejs')
 })
 app.post('/add', function(req,res){
     console.log("Nome iii: " + req.body.txtNome + " Email " + req.body.txtEmail)
 })

app.listen(3000, function(){

    console.log('Conexão inicializada')

})
