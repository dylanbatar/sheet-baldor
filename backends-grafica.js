const gss = require('google-spreadsheet');
const { promisify } = require('util');
const credenciales = require('./client_secret.json');

const dataArray = [];

const datosEncuesta = (datos) => {
  let obj = {
    fecha: datos.marcatemporal,
    edad: datos.edad,
    nombre: datos.nombre
  }
  // console.log(`fecha: ${datos.marcatemporal}`);
  // console.log(`edad: ${datos.edad}`);
  // console.log("+++++++++++++++++++++++++");
  dataArray.push(obj);
}


async function accesoHoja() {
  const doc = new gss('1J8FZgKD7hZsFQDRCYVa0kSY7Wub1Z4YmDhyor4KiMRc');
  await promisify(doc.useServiceAccountAuth)(credenciales);
  const  info = await promisify(doc.getInfo)();
  const hoja = info.worksheets[0];

  const rows = await promisify(hoja.getRows)({
    offset:1
  });
  // console.log("RESULTADOS TRAIDOS DEL EL FORMULARIO")
  rows.forEach(row => {
    datosEncuesta(row)
  });
}
const getData = () =>{
  return dataArray;
}
accesoHoja();


module.exports = dataArray;