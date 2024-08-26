const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
      // slice expression by 10 into encoded letters
  const encodedLetters = [];
  for (let i = 0; i < expr.length; i += 10) {
    encodedLetters.push(expr.slice(i, i + 10));
  }

  // decode letters into morse code
  const morseLetters = encodedLetters.map((item) => 
    item
      .replaceAll("10", ".")
      .replaceAll("11", "-")
      .replaceAll("00", "")
      .replace("**********", " ")
  );
  
  // decode letters from morse code
  const decodedLetters = morseLetters.map(item => item === ' ' ? item : MORSE_TABLE[item]);

  return decodedLetters.join('')

}

module.exports = {
    decode
}