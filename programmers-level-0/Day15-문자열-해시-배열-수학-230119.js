// 1. 영어가 싫어요
// https://school.programmers.co.kr/learn/courses/30/lessons/120894
function solution1(numbers) {
  let changeNumbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < changeNumbers.length; i++) {
    numbers = numbers.split(changeNumbers[i]).join(i);
  }
  return Number(numbers);
}

// 2. 인덱스 바꾸기
// https://school.programmers.co.kr/learn/courses/30/lessons/120895
function solution2(my_string, num1, num2) {
  let result = [...my_string];
  result.splice(num1, 1, my_string[num2]);
  result.splice(num2, 1, my_string[num1]);
  return result.join("");
}

// 3. 한 번만 등장한 문자
// https://school.programmers.co.kr/learn/courses/30/lessons/120896
function solution3(s) {
  let answer = [...s]
    .filter((v) => s.indexOf(v) === s.lastIndexOf(v))
    .sort()
    .join("");
  return answer;
}

// 4. 약수 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120897
function solution4(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer.push(i);
  }
  return answer;
}
