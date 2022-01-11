import bcrypt from "bcryptjs";

const utils = {};
//function for encript password
utils.encryptPassword = async ( password)  => {
    const jump = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, jump);
    return hash;
};

// function for login password

utils.matchPassword = async ( password, savePassword) => {
    try{
        return await bcrypt.compare(password, savePassword);

    }catch(e){
        console.log(e);

    }

};
export default utils;