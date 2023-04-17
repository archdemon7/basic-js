const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(flag = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.result = [];
    this.flag = flag;
  }

  createSquare() {
    for (let i = 0; i < this.alphabet.length; i++) {
      this.result[i] = [];
      for (let j = 0; j < this.alphabet.length; j++) {
        this.result[i][j] = this.alphabet[j];
      }
      this.alphabet.push(this.alphabet.shift());
    }
  }

  encrypt(message, key) {
    this.createSquare();
    if (!(message && key)) {
      throw new Error('Incorrect arguments!');
    }
    let encryptMessage = '';
    if (key.length < message.length) {
      key = key.repeat(message.length);
    }
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
        if (message[i].toUpperCase().charCodeAt() > 64 && message[i].toUpperCase().charCodeAt() < 91) {
          encryptMessage += this.result[this.alphabet.indexOf(key[keyIndex].toUpperCase())][this.alphabet.indexOf(message[i].toUpperCase())];
          keyIndex++;
        } else {
          encryptMessage += message[i];
        }
      }
    return this.flag ? encryptMessage : encryptMessage.split('').reverse().join('');
  }
  decrypt(message, key) {
    this.createSquare();
    if (!(message && key)) {
      throw new Error('Incorrect arguments!');
    }
    let decryptMessage = '';
    if (key.length < message.length) {
      key = key.repeat(message.length);
    }
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
        if (message[i].toUpperCase().charCodeAt() > 64 && message[i].toUpperCase().charCodeAt() < 91){
          decryptMessage += this.alphabet[this.result[this.alphabet.indexOf(key[keyIndex].toUpperCase())].indexOf(message[i])];
          keyIndex++;
        } else {
          decryptMessage += message[i];
        }
      }
    return this.flag ? decryptMessage : decryptMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
