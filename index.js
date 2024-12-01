let main = document.querySelector(".main")
const API ="https://fakestoreapi.com/products"

async function getAPI() {
   const response = await fetch(API)
   const data = await response.json()
   htmlga(data)
}



function htmlga (data) {
let html = ''
data.map((el) => {
    html +=`
    <div class="card">
    <img src=${el.image} alt="" />
    <h3>${el.title}</h3>
    </div>
    `
    main.innerHTML = html
})
}



async function getMEN() {
    const response = await fetch(API)
    const data = await response.json()
    htmlgaMEN(data)
 }
 
 
 
 function htmlgaMEN (data) {
 let html = ''
 const MEN = data.filter((el) => el.category === "men's clothing")
 MEN.map((el) => {
     html +=`
     <div class="card">
     <img src=${el.image} alt="" />
     <h3>${el.title}</h3>
     </div>
     `
     main.innerHTML = html
 })
 }
 
//  async function getWOMEN() {
//     const response = await fetch(API)
//     const data = await response.json()
//     htmlgaWOMEN(data)
//  }


//  function htmlgaWOMEN (data) {
//     let = ''
//     const WOMEN = data.filter((el) => el.category === "women's clothing")
//     WOMEN.map((el) => {
//         html +=`
//         <div class="card">
//         <img src=${el.image} alt="" />
//         <h3>${el.title}</h3>
//         </div>
//         `
//         main.innerHTML = html
// }) 
// }


async function getWomen() {
    const response = await fetch(API)
    const data = await response.json()
    htmlgaWomen(data)
 }
 
 
 
 function htmlgaWomen (data) {
 let html = ''
 const Women = data.filter((el) => el.category === "women's clothing")
 Women.map((el) => {
     html +=`
     <div class="card">
     <img src=${el.image} alt="" />
     <h3>${el.title}</h3>
     </div>
     `
     main.innerHTML = html
 })
 }


 
async function getJewelery() {
    const response = await fetch(API)
    const data = await response.json()
    htmlgaJewelery(data)
 }
 
 
 
 function htmlgaJewelery(data) {
 let html = ''
 const Jewelery = data.filter((el) => el.category === "jewelery")
 Jewelery.map((el) => {
     html +=`
     <div class="card">
     <img src=${el.image} alt="" />
     <h3>${el.title}</h3>
     </div>
     `
     main.innerHTML = html
 })
 }




 async function getElektronika() {
    const response = await fetch(API)
    const data = await response.json()
    htmlgaElektronika(data)
 }
 
 
 
 function htmlgaElektronika(data) {
 let html = ''
 const Elektronika = data.filter((el) => el.category === "electronics")
 Elektronika.map((el) => {
     html +=`
     <div class="card">
     <img src=${el.image} alt="" />
     <h3>${el.title}</h3>
     </div>
     `
     main.innerHTML = html
 })
 }