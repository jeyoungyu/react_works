//배열 구조 분해 할당
const arr = [1,2];
console.log(arr[0]); //1
console.log(arr[1]); //2

const [x,y] = arr; //배열 구조 분해 할당
console.log(`x = ${x}`); //x = 1
console.log(`y = ${y}`); //y = 2

//객체 구조 분해 할당
const product = {
    name: "무선마우스",
    price: 30000
}
console.log(product.pname); //무선마우스
console.log(product.price); //30000

const {name, price} = product; //객체 구조 분해 할당
console.log(`제품명 : ${name}`); //제품명 : 무선마우스
console.log(`가격 : ${price}`); //가격 : 30000