(function findSum() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sum = 9;

  (function (arr, sum) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
      const val = sum - arr[i];

      if (!map.has(val)) {
        map.set(arr[i], i);
      } else {
        const index = map.get(val);
        const answer = [index, i];
        console.log(answer);
        return;
      }
    }
  })(arr, sum);
})();

(function () {
  const arr = [2, 3, -2, 4];
  let maxProduct = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1) {
      return maxProduct;
    }

    if (i === 0) {
      maxProduct = arr[i];
    }

    const max = arr[i] * arr[i - 1];

    if (max > maxProduct) {
      maxProduct = Math.abs(max);
    }
  }

  console.log(maxProduct);
})();
