fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => dataBase(json))


const dataBase = (users)=>{
    const displayName = document.getElementById(`displayValue`)
    const userName = users.map(user => user.username)
    for(let i=0; i<userName.length; i++){
        const element = userName[i]
        const li = document.createElement(`li`)
        li.innerText = element;
        displayName.appendChild(li)
    }
}