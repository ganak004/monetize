export const mapArrayWithSuffixes = () =>
  Array.from({ length: 31 }, (_, i) => {
    let suffix;
    if ((i + 1) % 10 === 1 && i !== 10) {
      suffix = 'st';
    } else if ((i + 1) % 10 === 2 && i !== 11) {
      suffix = 'nd';
    } else if ((i + 1) % 10 === 3 && i !== 12) {
      suffix = 'rd';
    } else {
      suffix = 'th';
    }
    return {
      number: i + 1,
      suffix: suffix,
    };
  });
