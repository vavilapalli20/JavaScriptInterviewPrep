// async this always returns a promise
// this returns a value
async function doThis(){
    return "hiii";
}

const promise=doThis();
promise.then((data)=> console.log(data));
// this function returns a promise
const p = new Promise(function(resolve,reject){
    resolve("this is your Promise");
})

async function handleThis(){
    return p;
}
// const newPromise = handleThis()
handleThis().then((res)=>console.log(res));

// using await always use await in front of a Promise and use this in async function
const val = new Promise(function(resolve,reject){
    resolve("i returns a Promise")
}) 
async function handlePromise(){
    const a= await val;
    console.log(a);
}

handlePromise();


// using await
const val1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("i returns a Promise it takes 3 sec");
    },5000);
    
})
const val2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("i returns a Promise it takes 5 sec");
    },10000);
    
})  
async function handlePromise(){
    console.log("hello world")
    const a= await val1;
    console.log("hii javascript")
    console.log(a);
    const a2= await val2;
    console.log("hii javascript")
    console.log(a2);
//    val.then((res)=> console.log(res));
}

handlePromise();

