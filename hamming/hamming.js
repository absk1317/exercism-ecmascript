class Hamming {
  compute(strand1, strand2) {
    let diff = 0, i = 0;
    if (strand1.length != strand2.length) throw new Error('DNA strands must be of equal length.');
    for (i = 0; i < strand1.length; i++) {
      if (strand1[i] != strand2[i]) diff++;
    }
    return diff;
  }
}

export default Hamming;

