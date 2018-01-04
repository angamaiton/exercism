const translations = {
  A: 'U',
  T: 'A',
  C: 'G',
  G: 'C',
};

export default class Transcriptor {
  toRna(seq) {
    const strand = seq.split('');
    return strand.map(this.translate).join('');
  }
  translate(nucleotide) {
    if (translations[nucleotide]) {
      return translations[nucleotide];
    } else {
      throw new Error('Invalid input DNA.');
    }
  }
}
