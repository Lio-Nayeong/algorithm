// 1. 7의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120912
function solution1(array) {
  // let answer = array.join("").split("").filter(v => '7' === v).length;
  let answer = array.join("").split("7").length - 1;
  return answer;
}

// 2. 잘라서 배열로 저장하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120913
function solution2(my_str, n) {
  let answer = [];
  for (let i = 0; i < my_str.length; i += n)
    answer.push(my_str.slice(i, i + n));
  return answer;
}

// 3. 중복된 숫자 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120583
function solution3(array, n) {
  let answer = array.filter((v) => v == n).length;
  return answer;
}

// 4. 머쓱이보다 키 큰 사람
// https://school.programmers.co.kr/learn/courses/30/lessons/120585
function solution4(array, height) {
  let answer = 0;
  for (let i of array) {
    if (height < i) answer++;
  }
  return answer;
}
