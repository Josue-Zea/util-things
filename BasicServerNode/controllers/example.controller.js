
const exampleFunction = async (req, res) => {
    try{
        res.status(200).send( "Aquí va una respuesta positiva" );
    }catch(err){
        res.status(400).send( "Aquí va una respuesta negativa" );
    }
};

module.exports = {
    exampleFunction
};