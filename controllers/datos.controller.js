const datos = require('../backends-grafica')

const controladorData = {};

// controladorData.getData = async(res,req)=>{
//    console.log(datos);
//    await res.json(datos)
// }


controladorData.getData = async(req,res)=>{
    res.status(200).send(datos);
};


module.exports =controladorData;