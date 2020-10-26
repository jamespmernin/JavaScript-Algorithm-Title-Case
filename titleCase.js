const titleCase = str => {
  return str.replace(/\w\S*/g, function (txt) { // The regular expression parses non-letter characters correctly
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); // This guarantees that the first letter is uppercase and all subsequent letters are lowercase
  });
}

console.log(titleCase("I'm a little tea pot"))

module.exports = {
  titleCase
}