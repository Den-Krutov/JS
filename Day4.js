const number=2

switch(number%2){
    case 0:
        console.log(`${number} even number`)
        break
    default:
        console.log(`${number} uneven number`)
}

if(true){
    let number=-7
    number>=0
      ? console.log(number)
      : console.log(-number)
}

const massive=['abx',true,1]
massive.forEach((elem,index)=>{
    console.log(`${elem}:${index}`)
})
const person={
    name:'Den',
    age:20
}
Object.keys(person).forEach(key=>{
    console.log(`${key}:${person[key]}`)
})
Object.values(person).forEach(value=>{
    console.log(`${value}`)
})
for(const key in person){
    console.log(person[key])
}

const nickname='Den_Krutov'
for(const symbol of nickname){
    console.log(symbol)
}

