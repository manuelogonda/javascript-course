function confirmEnding(strToCheck,strToCheckAgainst){
 if(strToCheck.substring(strToCheck.length - strToCheckAgainst.length) === strToCheckAgainst){
 return true;
 }else{
   return false;
 }
}