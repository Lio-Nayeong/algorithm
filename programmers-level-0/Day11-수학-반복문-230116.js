// 1. 주사위의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120845
function solution1(box, n) {
  let answer =
    Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
  return answer;
}

// 2. 합성수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/120846
function solution2(n) {
  const primeNum = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];
  let arr = Array(n)
    .fill()
    .map((v, i) => i + 1);
  let answer = n - 1;

  for (let i of primeNum) {
    for (let j of arr) {
      if (j === i) answer--;
    }
  }
  return answer;
}

// 3. 최댓값 만들기(1)
// https://school.programmers.co.kr/learn/courses/30/lessons/120847
function solution3(numbers) {
  let max1 = Math.max(...numbers);
  numbers.splice(numbers.indexOf(max1), 1);
  // console.log(numbers);
  let max2 = Math.max(...numbers);
  return max1 * max2;
}

// 4. 팩토리얼
// https://school.programmers.co.kr/learn/courses/30/lessons/120848
function solution4(n) {
  const tenFact = [1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];
  let answer = 1;

  for (let i of tenFact) {
    if (i <= n) answer = tenFact.indexOf(i) + 1;
  }
  return answer;
}
