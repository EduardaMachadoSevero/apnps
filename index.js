const express = require ('express')
const app = express()

app.get('/',function(req,res){

   res.send("Olá Eduarda Severo!")
   
})

app.get('/msg', function(req,res){
    res.send("Essa mensagem é automática")
})

app.get('/sobre', function(req,res){
    res.send("Esta página está sendo desenvolvida")
})

app.listen(3000, function(){

    console.log('Conexão inicializada')

})
