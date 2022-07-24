
import { CONSTANTS } from "../constants";


export const  validateEmail = (mail) => {
	if (CONSTANTS.REGEX['EMAIL'].test(mail)){
		return true;
	}
	return false
}