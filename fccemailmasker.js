function maskEmail(email) {
  const atIndex = email.indexOf("@"); // find where the domain starts
  const username = email.slice(0, atIndex);

  // Build masked username using replace
  const maskedUsername = username.replace(
    username.slice(1, -1),            // the middle part to replace
    "*".repeat(username.length - 2)   // replace with stars
  );

  return maskedUsername + email.slice(atIndex); // add domain back
}
const email = "manuel@gmail.com";
console.log(maskEmail(email));