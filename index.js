const express = require('express');
const app = express();

app.use(require('./route/index'));
app.set('port', process.env.PORT || 3000);
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.listen(app.get('port'), () => {
    console.log(`escuchando en el puerto ${app.get('port')}`);
});


