/**
 * 문제9 : concat을 활용한 출력 방법
 * 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

 */

const solution = () =>{
    let sum = 0;
     sum = [1,2,3,4,5].reduce((acc,cur)=>{
        acc+=cur;
        return acc
    },10)
console.log("sum ", sum)

}

const solution2 = () =>{
    let sum = [];
     sum = [1,2,3,4,5].filter(item => item >3 )
console.log("sum ", sum)

}

solution();
