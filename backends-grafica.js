const gss = require('google-spreadsheet'); // GSS = GoogleSpreadSheet
const { promisify } = require('util');
const credenciales = require('./client_secret.json');

const control = {};
const dataArray = [];

const datosEncuesta = (datos) => {
  let obj = {
    fecha: datos.marcatemporal,
    edad: datos.edad,
    nombre: datos.nombre
  }
  dataArray.push(obj);
}


control.accesoHoja = async () => {
  const doc = new gss('1J8FZgKD7hZsFQDRCYVa0kSY7Wub1Z4YmDhyor4KiMRc');
  await promisify(doc.useServiceAccountAuth)(credenciales);
  const info = await promisify(doc.getInfo)();
  const hoja = info.worksheets[0];  // la hoja de calculo que se desea tomar la info
  const rows = await promisify(hoja.getRows)({
    offset: 1
  });

  rows.forEach(row => {
    datosEncuesta(row)
  });
}

control.getData = () => {
  return dataArray;
}



module.exports = control;