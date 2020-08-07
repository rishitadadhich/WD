const fs = require('fs')
const path = require('path')
const F1 = path.join(__dirname,'inp1.txt')
const F2 = path.join(__dirname,'inp2.txt')
const F3 = path.join(__dirname,'output.txt')

function readF1(){
    return new Promise((resolve,reject)=>{
        fs.readFile(F1,
            (err,data)=>{
                if(err) throw err
                data = data.toString().split('\n')
                resolve(data)
            })
    })
}

function readF2(){
    return new Promise((resolve,reject)=>{
        fs.readFile(F2,
            (err,data)=>{
                if(err) throw err
                data = data.toString().split("\n")
                resolve(data)
            })
    })
}
function writeF3(ans){
    return new Promise((resolve,reject)=>{
        fs.writeFile(F3,
            ans,
            (err)=>{
                if(err) throw err
            })
    })
}
let ans
readF1()
    .then((data)=>{
        ans = data
        console.log('File 1 read successfully')
        console.log(ans)
        return readF2()
    })
    .then((data)=>{
        ans = ans.concat(data)
        ans.sort((a,b)=>a-b)
        let finalans = ans.join('\n')
        console.log('File 2 read successfully')
        return writeF3(ans)
    })
    .then(()=>{
        console.log('All Done!')
    })