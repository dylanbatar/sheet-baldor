const datos = require('../backends-grafica')

const controladorData = {};

controladorData.getData = async(req,res)=>{
    await datos.accesoHoja().then(()=>{
        res.status(200).json({
            datos:datos.getData()
        });
    });
};


module.exports =controladorData;