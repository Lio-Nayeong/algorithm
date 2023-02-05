// 1. 직사각형 넓이 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120860
function solution1(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  let width = Math.abs(dots[0][0] - dots[2][0]);
  let height = Math.abs(dots[0][1] - dots[1][1]);
  return width * height;
}

// 2. 캐릭터의 좌표
// https://school.programmers.co.kr/learn/courses/30/lessons/120861
function solution2(keyinput, board) {
  let x = 0,
    y = 0;
  let boardX = Math.floor(board[0] / 2);
  let boardY = Math.floor(board[1] / 2);

  // up = y++, down = y--, left = x--, right = x++
  for (let i of keyinput) {
    if (i == "up") y++;
    if (i == "down") y--;
    if (i == "left") x--;
    if (i == "right") x++;

    if (Math.abs(x) > boardX) x = x > 0 ? boardX : -boardX;
    if (Math.abs(y) > boardY) y = y > 0 ? boardY : -boardY;
  }
  return [x, y];
}

// 3. 최댓값 만들기 (2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120862
function solution3(numbers) {
  /*
     * 1-1. 양수 max 1 * 양수 max 2
            => 음수가 없거나 홀수개인 경우
     * 1-2. 음수 max 1 * 음수 max 2 (1번 보다 큰 수)
            => 음수가 2의 배수(짝수)개일 경우 절대값으로 계산?
     */
  // let arr = numbers.sort((a, b) => b - a);
  // let i = arr.length - 1;
  // if(arr.length === 2) return arr[0] * arr[1];
  // if(arr[0] > Math.abs(arr[i])){
  //     return arr[0] * arr[1];
  // }
  // if(arr[0] < Math.abs(arr[i])){
  //     if (arr[i - 1] >= 0){
  //         return arr[0] * arr[1];
  //     } else {
  //         return arr[i] * arr[i - 1];
  //     }
  // }
  // return Math.max(
  //     arr[i] * arr[i - 1],
  //     arr[0] * arr[1]
  // )

  /*
   * 2. 2중 for문으로 모든 경우의 수를 구하고 최댓값 출력
   */
  let answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] * numbers[j]);
    }
  }
  return Math.max(...answer);
}

// 4. 다항식 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120863
function solution(polynomial) {
  let num = 0,
    numX = 0;
  let arr = polynomial.split(" + ");

  for (let i of arr) {
    if (i.includes("x")) {
      let check = i.split("x");
      if (check[0] === "") numX++;
      if (check[0] !== "") numX += Number(check[0]);
    } else {
      num += Number(i);
    }
  }

  let answer = [];
  if (numX) answer.push(`${numX === 1 ? "" : numX}x`);
  if (num) answer.push(num);
  return answer.join(" + ");
}
