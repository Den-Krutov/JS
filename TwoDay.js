function calc1(a,b){
    const c = a+b
    return c
}
function calc2(a,b){
    const c = a*b
    return c
}
function actionOfNumber(calk,a,b){
    const c=calk(a,b)
    console.log(c)
}
actionOfNumber(calc1,2,3)
actionOfNumber(calc2,2,3)

const value=new Object()
console.log(!!value)
console.log(value)

console.log('v'&&'a'&&undefined)
console.log(''||'a'||'v')

const person={
    name:'Den',
    age:20
}
const programmist={
    ...person,
    specialization:'FrontEnd'
}
console.log(programmist)