const name='Den'
const city='Saransk'
console.log(`Hey,my name is ${name}.I live in the city ${city}`)

const multByFactor1=function(value,multiplier){
    if(multiplier!=undefined){
        return value*multiplier
    }
    return value;
}
const multByFactor2=(value,multiplier)=>{
    if(multiplier!=undefined){
        return value*multiplier
    }
    return value
}
function multByFactor3(value,multiplier=1){
    return value*multiplier
}
console.log(`${multByFactor1(1,3)} ${multByFactor1(1,0)} ${multByFactor1(1)} ${multByFactor2(1,3)} ${multByFactor2(1,null)} ${multByFactor2()} ${multByFactor3(1,3)} ${multByFactor3(1,undefined)} ${multByFactor3(1)}`)

const newPost1=(post,addDate=Date())=>({
    ...post,
    addDate
})

const newPost2=(post)=>{
    return {
        ...post,
        addDate:Date()
    }
}
const post={
    id:0,
    author:'Den'
}
console.log(newPost1(post));
console.log(newPost2(post));

const newError=()=>{
    throw new Error('Death');
}
try{
    newError();
}catch(error){
    console.log(error.message);
}
console.log('Continue...');

const myArray1 = []
console.log(myArray1)
myArray1[1]=1
console.log(myArray1)
console.log(myArray1[0])
console.log(myArray1[2])
console.log(myArray1.shift())
console.log(myArray1)
console.log(myArray1.length=2)
console.log(myArray1)
myArray1[1]=null
myArray1.forEach((elem)=>{console.log(2)})
console.log(myArray1)
const newArray1=myArray1.map(function(elem){return 3})
console.log(newArray1)

const person={
    nickname:'Den',
    age:20,
    specialization:'FrontEnd Dev'
}
if(true){
    const {nickname,age}=person
    console.log(nickname)
    console.log(age)
}
const newPerson=({nickname,age})=>{
    return {
        nickname,
        age:++age
    }
}
console.log(newPerson(person))


