// function Animal(brand,price){
//     this.brand = brand
//     this.price = price
// }
// Animal.prototype.call = function(){
//     console.log('额嫩爹')
// }

// function Dog(brand,price,color){
//     Animal.apply(this,arguments)
//     this.color = color
// }
// function Fn(){}

// Fn.prototype = Animal.prototype
// Dog.prototype = new Fn
// Dog.prototype.constructor = Dog
// Dog.prototype.play = function(){
//     console.log('游戏')
// }

// let p = new Dog('小黄',1000,'黄色')

class Animal{
    constructor(brand,price){
        this.brand = brand 
        this.price = price
    }
    call(){
        console.log(this.name)
    }
    static go(){
        console.log('拉斯狗')
    }
}

class Dog extends Animal{
    constructor(brand,price,color){
        super(brand,price)
        this.color = color
    }
    run(){
        console.log(this.color)
    }
}

let p = new Dog('啊黄',2000,'黄色')

function debounce(fn,delay){
    let timer =null
    return function(){
        const _this = this
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(_this,arguments)
            timer = null
        },delay)
    }
}

function throttle(fn,delay){
    let old = 0
    return function(){
        let _this = this
        let now = new Date().valueOf()
        if(now - old > delay){
            old = now 
            fn.apply(_this,arguments)
        }
    }
}

function url(url){
    return new Promise((resolve,reject)=>{
        const xml = new XMLHttpRequest()
        xml.open('GET',url)
        xml.send()
        xml.onreadystatechange = ()=>{
            if(xml.readyState === 4){
                if(xml.status >=200 && xml.status <300 ){
                    resolve(xml.response)
                }else{
                    reject(xml.status)
                }
            }
        }
    })
}
url(url).then(res=>{
    console.log(res)
},err=>{
    console.log(err)
})

function add(){
    let num = 0
    function sm(){
        num +=1
        console.log(num)
    }
    num = 2
    sm()
}
add()

fn()=> window
