import 'bootstrap'

window.listCities = function listCities(){
    let cities = ['Salt lake city', 'Ogden', 'Logan', 'Provo', 'St. George']
    let list = document.querySelector('ul')
    for(let c of cities){
        let el = document.createElement('li')
        el.innerText = c
        list.appendChild(el)
    }
}

// listCities() // Method 1
// document.body.onload = listCities // Method 2
// Methody 3 in html using window.listCities



// ------- Scope examples -------
let ln = 'Smith'
function sayHello(){
    let fn = 'John'
    console.log(fn)
}

if(true){
    let x = 10
    console.log(x)
}

sayHello()