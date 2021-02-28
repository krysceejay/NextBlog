export const isEmpty = obj => {
    for (let key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
        }
        return true;
    }

export const truncate = (input, len) => {
  if (input.length > len){
    return `${input.substring(0, len)}...`
  }else{
    return input
  } 
}