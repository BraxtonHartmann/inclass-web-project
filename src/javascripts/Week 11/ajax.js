import 'bootstrap'

function getIris(){
    //AJAX Request
    fetch("http://localhost:8080/data/iris.json").then(function(res){
        if(!res.ok){
            throw Error("Request failed!!!")
        } else{
            return res.json()
        }
    }).then(function(iris){
        let tbody = document.querySelector('tbody')
        for(let r of iris){
            let row = document.createElement('tr')
            row.innerHTML = `
            <td>${r.sepalLength}</td>
            <td>${r.sepalWidth}</td>
            <td>${r.petalLength}</td>
            <td>${r.petalWidth}</td>
            <td>${r.species}</td>
            `
            tbody.appendChild(row)
        }

    }).catch(function(err){
        console.log(err)
    })
}

getIris()