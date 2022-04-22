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

class Comment{
    constructor(text){
        this.text=text
        this.votesQty=0
    }
    upvote(){
        this.votesQty+=1
    }
    static mergeComments(text1,text2){
        console.log(text1,text2)
    }
}

const firstComment = new Comment('First comment')
console.log(firstComment)
firstComment.upvote()
console.log(firstComment)
const secondComment = new Comment('Second comment')
console.log(secondComment)
secondComment.upvote()
console.log(secondComment)
console.log(firstComment)
Comment.mergeComments('Hey,'+'i am Den')

class Calc extends Array{
    sum(){
        return this.reduce((elem,acc)=>acc+=elem,0)
    }
    multiplies(){
        return this.reduce((elem,acc)=>acc*=elem,1)
    }
}
const numberCalc = new Calc(1,3,2)
console.log(numberCalc.sum())
console.log(numberCalc.multiplies())

const arrNumbers=[1,3,2,4]

const rez=arrNumbers.reduce((elem,acc)=>acc+=elem)
console.log(rez)

console.log(nickname.length)
const nickname2=new String('Den Krutov')
console.dir(nickname2)