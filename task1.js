const parenthesis = {
  "{": "}",
  "[": "]",
  "<": ">",
  "(": ")",
};

module.exports = {
  verify: (text) => {
    if (!text) return 1;

    const stack = [];

    for (const letter of text) {
      if (["{", "(", "<", "["].includes(letter)) {
        stack.push(letter);
        continue;
      }

      if (["}", ")", ">", "]"].includes(letter)) {
        const lastOpened = stack.pop();
        if (letter !== parenthesis[lastOpened]) return 0;
      }
    }
    return stack.length === 0 ? 1 : 0;
  },
};
