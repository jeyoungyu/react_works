// map() - 배열의 각 요소에 대해 새로운 배열로 변환
const arr = [1, 2, 3];

// newArr = [2, 4, 6]
// const newArr = arr.map((x) => { return x * 2; })
const newArr = arr.map(x => x * 2);
console.log(newArr);

// 객체가 요소인 배열
const users = [
    {name : "Jerry" , age : 25},
    {name : "Linda" , age : 30},
    {name : "Tom" , age : 35},
]

console.log(users[0].name); // Jerry

//배열에서 이름만 출력
const names = users.map((user) => user.name);
console.log(names);

// filter() - 배열의 각 요소 중 조건이 참인 요소만 새로운 배열로 반환
//새로운 배열을 반한하는 함수

const nums = [1, 2, 3, 4, 5];

//배열에서 짝수만 출력 (nums % 2 == 0)
const evens = nums.filter((x) => x % 2 == 0);
console.log(evens); // [2, 4]

//users에서 나이가 30 이상인 사람의 이름 출력
const adults = users.filter((user) => user.age >= 30).map((user) => user.name);
console.log(adults);

//user에서 나이가 30이상인 회원의 이름 출력
const adultNames = users.filter((user) => user.age >= 30).map((user) => user.name);
console.log(adultNames);

//forEach() - 배열의 각 요소에 대해 반복 작업 수행
const userNames = [];
users.forEach(user => {
    userNames.push(user.name);
});
console.log(userNames);