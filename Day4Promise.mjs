const getData=(url)=>
    new Promise((resolve,reject)=>
        fetch(url)
            .then(response=>response.json())
            .then(json=>resolve(json))
            .catch(error=>reject(error))
    )
/*getData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data=>console.log(data))
    .catch(error=>console.log(error.message))*/
export default getData