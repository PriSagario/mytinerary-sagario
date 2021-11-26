const express = require ("express")

const ciudades=[]

const cors = require ("cors")

const app = express ()
app.use(cors())

app.get("/pruebas/datos",(req,res)=>{
    console.log("Me llego un pedido GET")
    res.json({respuesta: "olakease"})
})

app.get("/api/ciudades",(req,res)=>{
    console.log("Me llego un pedido GET")
    res.json({respuesta: "olakease"})

})

app.listen(4000, ()=>{console.log("Server is listening on port 4000")})

