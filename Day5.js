const asyncFn1 = async () =>{
    throw new Error('Error!')
    return 'Success!'
}
asyncFn1()
    .then(value=>console.log(value))
    .catch(error=>console.log(error.message))

const timerPromise=()=>
    new Promise((resolve,reject)=>
        setTimeout(()=>resolve(),2000))

const asyncFn2 = async ()=>{
    console.log('Start')
    const startTime=performance.now()
    await timerPromise()
    const endTime=performance.now()
    console.log('End:',endTime-startTime)
}

asyncFn2()