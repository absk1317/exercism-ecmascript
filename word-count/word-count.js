export default () => ({
  count: (phrase) => phrase
      .toLowerCase()
      .trim()
      .match(/\S+/g)
      .reduce((counts, word) => {
      counts[word]++ || (counts[word] = 1);
      return counts;
  }, {})
})
