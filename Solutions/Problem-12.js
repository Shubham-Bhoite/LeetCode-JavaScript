/* 12.Sleep :

 Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value. 
 */


 async function sleep(millis) {
    function callback(res, rej){
        setTimeout(res, millis);
    }
    return new Promise(callback);

    
}