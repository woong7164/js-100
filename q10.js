
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



const map = [
  {
    A:"banana",
    B:"apple",
    C:"kim",
    D:"lee"
  },

  {
    A:"kim",
    B:"apple",
    C:"banana",
    D:"lee"
  },

  {
    A:"apple",
    B:"banana",
    C:"kim",
    D:"lee"
  }

]

const obj = map.reduce((acc, obj)=>{                    
  let key = obj["A"];
  if(!acc[key]){
    acc[key] = [];
  }
  
  acc[key].push(obj);
  return acc;
},{});

console.log(obj)

