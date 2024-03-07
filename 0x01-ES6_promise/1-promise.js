export default function getFullResponseFromAPI(success){
    let promise = new Promise((resolve, reject)=>{
        if (success){
            return resolve({status:200,body:'Success'})
        } else {
            return reject('The fake API is not working currently')
        }
    })

promise.then(message =>{console.log(message)}).catch(messsage=> {console.log(messsage)})
}

