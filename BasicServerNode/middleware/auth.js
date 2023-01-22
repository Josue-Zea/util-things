const { verifyToken } = require("../helpers/JWT");

// Primero se valida que el token enviado sea correcto y firmado
const checkAuth = async (req, res, next) =>{
    try{
        const token = req.headers.authorization.split(" ").pop();
        const tokenData = await verifyToken( token );
        if( tokenData ){
            next();
        }else{
            res.status(400).send(
                "Token invalido"
            );
            return;
        }
    }catch( err ){
        res.status(400).send(
            "Token invalido"
        );
        return;
    }
}

module.exports = {
    checkAuth
}