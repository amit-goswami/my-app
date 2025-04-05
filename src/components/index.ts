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

(function Square() {
  const number = 5;
  let ans = "";

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      ans += "* ";
    }
    ans += "\n";
  }

  console.log(ans);
})();

(function RightTriangle() {
  const number = 5;
  let ans = "";

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      if (j <= i) {
        ans += "* ";
      }
    }
    ans += "\n";
  }

  console.log(ans);
})();

(function RightTriangleRevert() {
  const number = 5;
  let ans = "";
  let counter = number;

  for (let i = 0; i < number; i++) {
    for (let j = counter; j > 0; j--) {
      ans += "* ";
    }
    counter--;
    ans += "\n";
  }

  console.log(ans);
})();

(function RightTriangleRight() {
  const number = 5;
  let ans = "";

  for (let i = number; i > 0; i--) {
    for (let j = 1; j <= number; j++) {
      if (j < i) {
        ans += "  ";
      }
      if (j >= i) {
        ans += "* ";
      }
    }
    ans += "\n";
  }

  console.log(ans);
})();

(function RightTriangleRightInverted() {
  const number = 5;
  let ans = "";

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      if (j >= i) {
        ans += "* ";
      } else {
        ans += "  ";
      }
    }
    ans += "\n";
  }

  console.log(ans);
})();

(function CenteredPyramid() {
  const number = 5;
  let ans = "";
  let counter = number - 1;

  for (let i = 0; i < number; i++) {
    for (let j = 1; j <= number + i; j++) {
      if (j > counter) {
        ans += "* ";
      } else {
        ans += "  ";
      }
    }
    ans += "\n";
    counter--;
  }

  console.log(ans);
})();

(function CenteredPyramidInvert() {
  const number = 5;
  let ans = "";
  let counter = 0;

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= 2 * number - i; j++) {
      if (j > counter) {
        ans += "* ";
      } else {
        ans += "  ";
      }
    }
    ans += "\n";
    counter++;
  }

  console.log(ans);
})();

(function HollowSquare() {
  const number = 5;
  let ans = "";

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      if (i === 1 || i === number || j === 1 || j === number) {
        ans += "* ";
      } else {
        ans += "  ";
      }
    }
    ans += "\n";
  }

  console.log(ans);
})();

(function X() {
  const number = 5;
  let ans = "";

  for (let i = 1; i <= 2 * number - 1; i++) {
    for (let j = 1; j <= 2 * number - 1; j++) {
      if (i === 1 || i === 2 * number - 1 || i === j || j + i === 2 * number) {
        ans += "* ";
      } else {
        ans += "  ";
      }
    }
    ans += "\n";
  }

  console.log(ans);
})();
