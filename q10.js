
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

const solution2 = () =>{
    let sum = [];
     sum = [1,2,3,4,5].filter(item => item >4 )
console.log("sum ", sum)

}

solution();
