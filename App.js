var exp = require('express');
var cors = require('cors');
var app = exp();
var PORT = 3000;
app.use(cors());
app.use(exp.json());
app.listen(PORT, function () { console.log("app run in port: ".concat(PORT)); });
