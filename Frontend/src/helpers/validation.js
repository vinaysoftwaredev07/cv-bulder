
import { CONSTANTS } from "../constants";


export const  validateEmail = (mail) => {
	return CONSTANTS.REGEX['EMAIL'].test(mail);
}


export const cvDataValidation = (data) => {
    try{
        const keys = Object.keys(data);
        var isValid = true;
        var message = "";
        for(let value of keys){
            if(value.indexOf('Template') !== -1){
                continue;
            }
            if(typeof data[value] == 'object' && Object.keys(data[value]).length > 0){
                const validation = cvDataValidation(data[value]);
                isValid = validation.isValid;
                if(!isValid){
                    message = validation.message;
                    return { isValid, message };
                }
            }else{
                if(typeof data[value] == 'object' && Object.keys(data[value]).length === 0){
                    message = `${capitalizeFirstLetter(value)} is/are required`;
                    return { isValid: false, message };
                }else if(!validate(value, data[value])){
                    message = `${capitalizeFirstLetter(value)} is not having valid data`;
                    return { isValid: false, message };
                }
            }
        }
        return { isValid, message };
    }catch(err){
        return { isValid: false, message: err.message };
    }
}

const capitalizeFirstLetter = (s) => {
    if(s === 'data'){ s='pesonalDetails'; }
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

const validate = (value, data) => {
    try{
        let regEx = CONSTANTS['REGEX']['TEXT'];
        switch(value){
            case 'email':
                regEx = CONSTANTS['REGEX']['EMAIL'];
                break;
            case 'name':
                regEx = CONSTANTS['REGEX']['NAME'];
                break;
            case 'phone':
                regEx = CONSTANTS['REGEX']['PHONE'];
                break;
            default:
                regEx = CONSTANTS['REGEX']['TEXT'];
        }
		console.log(">>>>>", regEx, data);
        return regEx.test(data);
    }catch(err){
        console.log(err, err.message, err.lineNumber);
        return false;
    }
}
