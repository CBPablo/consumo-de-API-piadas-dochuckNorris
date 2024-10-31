const baseUrl = "https://api.chucknorris.io/jokes/random"
const button = document.getElementById('button')
getChuck()

async function getChuck(){
const response =await fetch(baseUrl)
const chucknorris = await response.json()
const div = document.getElementById('div')
const h2 = document.createElement("h1")
h2.append(chucknorris.value)

div.append(h2)

}


 button.addEventListener('click', reload)
 function reload  (){
    location.reload()
}