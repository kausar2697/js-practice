//what is pure function***************************************

/* 1. it returns the same result if given the same arguments
   2. it does not cause any observable side effects

*/

function sqr(n){
    return n*n
}

console.log(sqr(3))
console.log(sqr(3))
console.log(sqr(3))


var  point = {
    x: 30,
    y: 40
}

function printPoint(point){    //so its not a pure function 
    point.x=100
    point.y=200
    console.log(point)
}

printPoint(point)           //{ x: 100, y: 200 }

//###########################################################//



//******First class function******************************** */

function add(a,b){
    return a+b
}

//  1. A Function can be stored in a variable
 
var sum = add
console.log(sum(10,20))  //30


//2. a function can be stored in an array

var arr = []
arr.push(add)
console.log(arr[0](40,60))      //100


//3. a function can be stored in an object

var obj ={
    sum : add
}

console.log(obj.sum(200,200))   //400
console.log(typeof(obj.sum))    //function


// 4. we can create a function as need

setTimeout(function(){
     console.log('first class function')
},5000)


//################################################################
//higher order function****************************************

// 5. we can pass function as an arguments
// 6. we can return function from another function

function addition(a,b){
    return a+b
}

function manipulate(a,b,func){
    var c=a+b
    var d = a-b
    return function(){
        var m=func(a,b)
        return c*d*m
    }
   
}

var result= manipulate(30,40,addition)
console.log(result())                       //-49000

//####################################################################


//closure in javascript (when a scope use data from another scope )***************************

function a(){
    var p = 5  //close
    return function() {
        console.log(p)
    }
}

var abc = a()
console.log(abc())   //5  

//######################################################################
//********Callback Function************************** */

function callback(a, b, callback) {
    callback(a, b);
}

function add(a, b) {
    console.log(a + b);
}

function sub(a, b) {
    console.log(a - b);
}

callback(30, 10, sub);

//################################################################


//***********forEach***************************************** */
var arr = [2,3,4,4,5,56,6]

arr.forEach(function(value,index,array){
    console.log(value,index,array)
})


// *************forEach function implementation*******************
function foreach(arr,cb){
    for(var i=0;i<arr.length;i++){
        cb(arr[i],i,arr)
    }
}

function foreachN(value,index,array){
    console.log(value,index,array)
}

foreach(arr,foreachN)


//**********************foreach function implementation uses******** */
function foreach(arr,cb){
    for(var i=0;i<arr.length;i++){
        cb(arr[i],i,arr)
    }
}

foreach(arr,function(value,index,array){
    array[index] = value + 5
})

console.log(arr)

//######################################################################

//*******************Map function************************************ */

var maparr = [1,2,3,4]

var maparr1 = maparr.map(function(value){
    return value*value
})

console.log(maparr)
console.log(maparr1)


//****************implement my map function************** */
function myMap(maparr,cb){
    var newArr = []
    for(var i=0;i<maparr.length;i++){
        var temp=cb(maparr[i],i,maparr)
        newArr.push(temp)
    }
    return newArr
}


var a =myMap(maparr,function(value){
    return value*value
})

console.log(a)

//####################################################################

//***************filter function*********************************** */

var filterArr= [3,4,3,42,42,42,52,5,5234,534]

var filteredArr = filterArr.filter(function(value){
    return value%2==0
})

console.log(filteredArr)


//*******************filter function implementation********** */

function myFilter(filterArr,cb){
    var newFilterArr=[]
    for(var i=0;i<filterArr.length;i++){
        if(cb(filterArr[i],i,filterArr)){
            newFilterArr.push(filterArr[i])
        }
    }
    return newFilterArr
}

console.log( myFilter(filterArr,function(value){
    return value%2==0
}))

//###################################################################

//*******************Reduce function****************************** */

var redArr = [4,34,32,3,4,43]

var redSum = redArr.reduce(function(prev,curr){
    return prev+curr
},100)

console.log(redSum)

var redMax = redArr.reduce(function(prev,curr){
    return Math.max(prev,curr)
},0)

console.log(redMax)

//*******************Reduce function implementation****************/

function myReduce(arr,cb,acc){
    
    for (var i=0;i<arr.length;i++){
       acc= cb(acc , arr[i])
    }
    return acc
}

var redSum= myReduce (redArr,function(prev,curr){
    return prev+curr
},0)
console.log(redSum)

var redMax = myReduce (redArr, function(prev,curr){
    return Math.max(prev,curr)
},0)
console.log(redMax)
//#####################################################################