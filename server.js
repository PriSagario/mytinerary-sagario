/*require('dotenv').config()*/
const Router = require ("./routes/routes")
const express = require ("express")
const cors = require ("cors")
/*require ('/congif/database')*/

const app = express ()

app.use(cors())
app.use(express.json())
app.use("/api", Router)


app.listen(4000, ()=>{
    console.log("Se levanto el server")
})

