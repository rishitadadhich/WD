const https = require('https')
const { ok } = require('assert')
const { createSecureContext } = require('tls')
const { privateDecrypt } = require('crypto')
let url = "https://cat-fact.herokuapp.com/facts"

const request = https.get(url,(response)=>{

    let x = ""
    response.on('data',(data)=>{
        // console.log(data)
        x+= data.toString()
    })
    response.on('end',()=>{
        console.log(x)
        let data = JSON.parse(x)
        console.log(data.all[0].text)
        console.log("Everything is Done!")
    })
})

// request.on('error',(err)=>{
//     console.log(`Error :, ${err}`)
// })
// This commented code isn't working....sir bol rahe hai shayad API mein err throew nahi ho raha isi wajah se nahi ho raha


//********** */ status Quotes jo dhyan rakne hai:**********
// 200-> ok
// 500->Internal Server Error
// ->
// 404->Not Found

// response.statuscode will return the status code
// https.STATUSCODE[reponse.....]

// $$$$yeh error show karna imp hai kyuki kabhi kabhi 
// user ko bhi pata hona chaiye ki chal lkya raha hai$$$$

// #$Assignment: weather API  use karke ek pro

// openweathermap.org/createSecureContext    API hi hai yeh

// kuch aisa search karna jisme API key na deni pade

//ab sir ne BigInt.onclick nbanaya hai

// JSONN hi use aata hai
let city = $('#inp').val()
let apikey
let url = `https://weather.com/q=${city}&appid=${apikey}`
https.get(url,(response)=>{

})