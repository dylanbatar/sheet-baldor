const datos = require('../backends-grafica')

const controladorData = {};
// controladorData.getData = async(res,req)=>{
//    console.log(datos);
//    await res.json(datos)
// }


controladorData.getData = async(req,res)=>{
    await datos.accesoHoja().then(()=>{
        res.status(200).json({
            datos:datos.getData()
        });
    });
    // const resultadosHoja = await datos.accesoHoja();
   
};


module.exports =controladorData;