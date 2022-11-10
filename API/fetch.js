// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(json => dataBase(json))
// .catch(erro => console.log(erro));

// const dataBase = (users)=>{
//     const displayName = document.getElementById(`displayValue`)
//     const userName = users.map(user => user.username)
//     for(let i=0; i<userName.length; i++){
//         const element = userName[i]
//         const li = document.createElement(`li`)
//         li.innerText = element;
//         displayName.appendChild(li)
//     }
// }
document.getElementById(`submit`).addEventListener(`click`, ()=>{
    const userContent = document.getElementById(`user-container`).value;
    const bodyContent = document.getElementById(`body-content`).value;
    const post = {title:userContent, body: bodyContent}
    postToserver(post)
})


const postToserver =(userInfo)=>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
            body: JSON.stringify(userInfo),
            headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
    
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
}


