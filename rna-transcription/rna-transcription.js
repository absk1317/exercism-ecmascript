class Transcriptor {
  toRna(strand) {
    const map = {
      'G' : 'C',
      'C' : 'G',
      'T' : 'A',
      'A' : 'U'
    };
    let i = 0, input;
    input = strand.split('');
    for (i; i < input.length; i++) {
      input[i] = map[strand[i]];
    }
    return input.join('');
  }
}

export default Transcriptor;
