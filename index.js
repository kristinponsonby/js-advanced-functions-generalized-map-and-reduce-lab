function map(src, callback) {
    const newArray = [];
  
    for (let i = 0; i < src.length; i++) {
      const theElement = src[i];
      newArray.push(callback(theElement));
    }
  
    return newArray;
  }

  function reduce(src, callback, startingValue) {
    let total;
    if (startingValue) {
      total = startingValue;
      for (let i = 0; i < src.length; i++) {
        total = callback(src[i], total);
      }
      return total;
    } else {
      total = src[0];
      for (let i = 1; i < src.length; i++) {
        total = callback(src[i], total);
      }
      return total;
    }
  }