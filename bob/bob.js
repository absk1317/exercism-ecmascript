//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey(message) {
    if (message.trim().length == 0) return 'Fine. Be that way!';
    if (isUpperCase(message)) return 'Whoa, chill out!';
    if (message.indexOf('?') +1 == message.length) return 'Sure.';
    return 'Whatever.'
  }
}

function isUpperCase(str) {
  return str == str.toUpperCase() && str != str.toLowerCase();
}

export default Bob;

