


const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat)

function formatDateMMDDYYYY(dateObj){
  const mmstr = "Formatted Date (MM/DD/YYYY):";
 return  mmstr + " " + dateObj.toLocaleDateString("en-US");
}

function formatDateLong(dateobj){
  const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
}
const string = "Formatted Date (Month Day, Year):";
  return string + " " + dateobj.toLocaleDateString("en-US",options);
}

console.log(formatDateLong(currentDate))