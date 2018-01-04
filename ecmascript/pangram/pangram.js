export default class Pangram {
  constructor(text) {
    this.text = text.toLowerCase();
  }
  isPangram() {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    return alphabet.every(letter => this.text.includes(letter));
  }
}
