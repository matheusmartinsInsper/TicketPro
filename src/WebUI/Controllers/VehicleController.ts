const express = require('express');
const routes=express.Router()

routes.get('/vehicles', async function(req:any,res:any){
    res.send("Pagina Inicial")
})

module.exports = routes