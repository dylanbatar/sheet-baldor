const express = require('express');
const app = express();

app.use(require('./route/index'));
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`escuchando en el puerto ${app.get('port')}`);
});


