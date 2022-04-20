name='Den'
city='Saransk'
console.log(`Hey,my name is ${name}.I live in the city ${city}`)

const multByFactor1=function(value,multiplier){
    if(multiplier!=undefined){
        return value*multiplier
    }
    return value
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
console.log(newPost1(post))
console.log(newPost2(post))

