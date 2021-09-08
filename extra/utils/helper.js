const validateEmail=(email)=>{

    var validRegex = /^[a-zA-Z0-9.^]+@successive.tech/;

    if (validRegex.test(email)) 
        return true;

    else return false;
}

export {validateEmail}