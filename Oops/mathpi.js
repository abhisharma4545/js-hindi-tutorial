//  here we learn about object related things and property descripter

 const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

 console.log(descripter)
//   it gives all about math.pi


 console.log(Math.PI)
//   we can't override the value of Math.PI
 Math.PI = 5;
 console.log(Math.PI)

//   creating an object 

  const chai = {
    name :'ginger chai' ,
    price : 250 ,
    isAvailable : true
  }

  console.log(Object.getOwnPropertyDescriptor(chai,'name'));

//    we can define in own way any object such as writable, enumerable and confi

 Object.defineProperty(chai , 'name',{
    Writable : false,
    enumerable : false
 })

 console.log(Object.getOwnPropertyDescriptor(chai , "name"));
//  bydefault object are not itterable we use entries(naME) to object

 for (let [key,value]of object.entries(chai)) {
    if( typeof value !== 'function')
    console.log(`${key} : ${value}`);
 }
