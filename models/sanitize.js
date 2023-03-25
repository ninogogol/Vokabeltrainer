// Export a sanitize function to replace all occurrences of '<' with '&lt;' in a given string
module.exports.sanitize = str => str.replaceAll( '<', '&lt;' )