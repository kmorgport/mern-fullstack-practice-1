import jwt from 'jsonwebtoken'



const auth = async (req, res, next) => {
    try{
        const token = req.headers.Authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;
        if(token && isCustomAuth ){
            //second argument will  be the same secret/env variable
            decodedData = jwt.verify(token, 'test');
            req.userId = decodedData?.id
        }else{
            decodedData = jwt.decode(token)
            req.userId = decodedData?.sub;
        }

        next();
    }catch(error){
        console.log(error)
    }
}

export default auth