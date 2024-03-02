const cart = ["pants", "shirts", "kurtas"];

const promise = createOrder(cart) // this gives us a promise which has ordre ID;
// if this is a valid promise then ok if not then in the console we will get error message for that we use .catch()
promise.then(function(orderId){
    return orderId;     
})
.catch(function(err){
    console.log(err.message);
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})

// we create the promise of createOrder
function createOrder(cart){
    const pr= new Promise(function(resolve,reject){
        //now if this is valid like the order we will give the promise or else we will reject 
        if(!ValidateOrder(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        } 
        // if the logic is crct will will give the promise
        const orderId= "56399"; // some random
        if(orderId) resolve(orderId);
    });

    return pr   // this returns the promise
}

function ValidateOrder(cart){
    if(cart.length != 0) return true;
    return false;
}

// different types of Promises
// Promise.all()

const p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("p1 success")
    },3000);
})
const p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        // resolve("p2 success")
        reject("p2 is error");
    },1000);
})
const p3= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("p3 success")
    },2000);
})

Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    // console.error(err);
    console.log(err);
})

// Promise.allSettled  // Promise.race  // Promise.any
// use promise.allSettled inplace of Promise.all

