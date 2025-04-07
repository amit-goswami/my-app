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

(function findMaxProduct() {
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

(function LinearSearch() {
  const arr = [1, 3, 4, 5, 8, 9];
  const target = 4;
  let isPresent = 0;

  for (const n of arr) {
    if (arr[n] === target) {
      isPresent = 1;
      return console.log(isPresent);
    } else {
      isPresent = 0;
    }
  }

  console.log(isPresent);
})();

(function BinarySearch() {
  const arr = [1, 2, 3, 4, 5, 6];
  const target = 4;

  let lptr = 0;
  let rptr = arr.length - 1;

  while (lptr <= rptr) {
    const mid = Math.floor((lptr + rptr) / 2);

    if (arr[mid] === target) {
      console.log(`Found at index ${mid}`);
      return;
    }

    if (arr[mid] < target) {
      lptr = mid + 1;
    } else {
      rptr = mid - 1;
    }
  }

  console.log("Not found");
})();

(function ContainsDuplicates() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 7];
  const ansMap = new Map();

  for (let i = 1; i <= arr.length; i++) {
    if (ansMap.has(arr[i])) {
      return console.log("YES");
    } else {
      ansMap.set(arr[i], 1);
    }
  }

  const newSet = new Set(arr);

  if (arr.length !== newSet.size) {
    return console.log("YES");
  }

  return console.log("NO");
})();
