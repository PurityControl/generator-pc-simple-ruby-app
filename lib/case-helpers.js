var case_helpers = {
  class_case: function(str) {
    var firstLetter = str.charAt(0).toUpperCase();
    var rest = str.slice(1);
    return firstLetter + rest;
  }
};

module.exports = case_helpers;
