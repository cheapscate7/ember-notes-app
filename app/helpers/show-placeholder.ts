import { helper } from '@ember/component/helper';

/**
 * check if a placeholder should be shown in a text field
 * if a string length is greater than 0 then return false
 * @param params the text that is in a text field
 */
export function showPlaceholder(params:any/*, hash*/) {
  if(typeof params === "string") {
    return !(params.length > 0);
  } else {
    return "";
  }
  
}

export default helper(showPlaceholder);
