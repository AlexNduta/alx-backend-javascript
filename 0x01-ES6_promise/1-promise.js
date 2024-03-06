export default getFullResponseFromAPI(success){
    let promise = new Promise((reject, resolve)) => {
        if (success == true){
            resolve ('{
                status:200,
                body:'Success'
            }');
        } else {
            reject('The fake API is not working currently');
        }
    }

 promise.then(message => {console.log(message)}, (err) => {console.log(err)})

