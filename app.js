const cards = document.querySelector('#cards')
const temp = document.querySelector('#contact-card')
const div_img = temp.content.querySelector('#image')
const div_name = temp.content.querySelector('#name')
const div_email = temp.content.querySelector('#email')
const div_number = temp.content.querySelector('#number')

let div = 0;
let img = document.createElement("img");

let users = [{
    name: "Anna",
    image: "./img/anna.jpg",
    email:"anna@ya.ru",
    number:"79262223344"},{
    name: "Inna",
    image: "./img/inna.jpg",
    email:"inna@ya.ru",
    number:"79263332233"},{
    name: "Serg",
    image: "./img/serg.jpg",
    email:"serg@ya.ru",
    number:"79264443322"},{
    name: "John",
    image: "./img/john.jpg",
    email:"john@ya.ru",
    number:"79261112233"}];

let i =0;
while(i<users.length){
    img.src = users[i].image;
    div_name.textContent = users[i].name; 
    div_email.textContent = users[i].email;
    div_number.textContent = users[i].number;
    div_img.appendChild(img) 
    div = temp.content.cloneNode(true);
    cards.append(div);
    i++;
}


    
console.log(users[0].img)
console.log(temp)