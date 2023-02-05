// 1. 옷가게 할인 받기
// https://school.programmers.co.kr/learn/courses/30/lessons/120818
function solution1(price) {
  let answer = 0;
  if (price >= 100000 && price < 300000) {
    answer = price * 0.95;
  } else if (price >= 300000 && price < 500000) {
    answer = price * 0.9;
  } else if (price >= 500000) {
    answer = price * 0.8;
  } else {
    answer = price;
  }
  return Math.floor(answer);
}

// 2. 아이스 아메리카노
// https://school.programmers.co.kr/learn/courses/30/lessons/120819
function solution2(money) {
  let answer = parseInt(money / 5500);
  return [answer, money - answer * 5500];
}

// 3. 나이 출력
// https://school.programmers.co.kr/learn/courses/30/lessons/120820
function solution3(age) {
  let answer = 2022 - age + 1;
  return answer;
}

// 4. 배열 뒤집기
// https://school.programmers.co.kr/learn/courses/30/lessons/120821
function solution4(num_list) {
  let answer = [];
  for (let i = num_list.length - 1; i >= 0; i--) {
    answer.push(num_list[i]);
  }
  return answer;
}
