// // function Anima(brand,price){
// //     this.brand = brand
// //     this.price = price
// // }
// // Anima.prototype.call = function(){
// //     console.log('狗神')
// // }

// // function Dog(brand,price,color){
// //     Anima.apply(this,arguments)
// //     this.color = color
// // }
// // function fm(){}

// // fm.prototype = Anima.prototype

// // Dog.prototype = new fm

// // Dog.prototype.constructor = Dog
// // Dog.prototype.run = function(){
// //     console.log('跑')
// // }

// // let p = new Dog('啊白',200,'白色')

// function url(url){
//     return new Promise((resolve,reject)=>{
//         const xml = new XMLHttpRequest()
//         xml.open('GEP',url)
//         xml.send()
//         xml.onreadystatechange = ()=>{
//             if(xml.readyState === 4){
//                 if(xml.status >=200 && xml.status <300){
//                     resolve(xml.response)
//                 }else{
//                     reject(xml.status)
//                 }
//             }
//         }
//     })
// }
// url('asdasdasdasd').then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })







