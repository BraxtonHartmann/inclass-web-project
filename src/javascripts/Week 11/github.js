import 'bootstrap'

export function getGithubUsers(){
    fetch("https://api.github.com/users?since=150&per_page=100").then(function(res){
        if(!res.ok){
           throw Error("Api request failed") 
        } else {
            return res.json()
        }
    }).then(function(users){
        for(let u of users){
            let user_card = `
            <div class="card">
                <img src="${u.avatar_url}" class="card-img-top" alt="${u.login}">
                <div class="card-body">
                    <h5 class="card-title">${u.login}</h5>
                    <p class="card-text">URL: <a href="${u.html_url}" target="github4user">${u.html_url}</a></p>
                </div>
            </div>
            `
            let col = document.createElement('div')
            col.classList.add('col')
            col.innerHTML = user_card

            document.querySelector('.github').appendChild(col)
        }
    }).catch(function(err){
        document.querySelector('.github').innerHTML = '<p>Failed to get users from GitHub</p>'
    })
}
getGithubUsers()