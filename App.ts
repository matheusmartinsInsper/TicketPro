const VehicleController = require("./src/WebUI/Controllers/VehicleController")
const exp = require('express');
const cors = require('cors');
const app=exp();
const PORT =3000

app.use(cors())
app.use(exp.json());

app.use("/",VehicleController)

app.listen(PORT,()=>{console.log(`app run in port: ${PORT}`)})