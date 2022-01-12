export const isEmpty = obj => {
    for (let key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
        }
        return true;
    }

export const truncate = (input, len) => {
  if (input?.length > len){
    return `${input.substring(0, len)}...`
  }else{
    return input
  } 
}

export const stringToHslColor = str => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = hash % 360;
  return `hsl(${h}, 50%, 70%)`;
}
