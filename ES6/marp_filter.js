// map() - 배열의 각 요소에 대해 새로운 배열로 변환
const arr = [1, 2, 3];

// newArr = [2, 4, 6]
// const newArr = arr.map((x) => { return x * 2; })
const newArr = arr.map(x => x * 2);
console.log(newArr);
