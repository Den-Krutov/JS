const getData=async(url)=>{
    const rez=await fetch(url)
    const json=await rez.json()
    return json
}
const url='https://jsonplaceholder.typicode.com/todos/1'
try{
    const data = await getData(url)
    console.log(data)
}catch(error){
    console.log(error.message)
}

export default getData