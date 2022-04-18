const firstName='Den'
const secondName='Krutov'
const age=20
function newPersonConstructor(firstName,secondName,age){
    const person={
        name:firstName+'_'+secondName,
        info:{
            age
        }
    }
    return person
}
function newPerson(person){
    const newPerson = {...person}
    newPerson.info.age++
    return newPerson
}
const person=newPersonConstructor(firstName,secondName,age)
const person1=newPerson(person)
console.log(person)
console.log(person1)
