import { getData } from "./register.js";

const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const adrees = document.getElementById('email');
const num = document.getElementById('number');
const username = document.getElementById('username');
const password = document.getElementById('password');
const btn = document.getElementById('logout');

document.addEventListener('DOMContentLoaded', function() {
    let currentUser = localStorage.getItem('currentUser')

    if (currentUser) {
        let users = getData();

        let user = users.find(el => {
            return el.username == currentUser
        })

        if (user.username) {
            name.innerHTML = user.name;
            lastname.innerHTML = user.lastname;
            adrees.innerHTML = user.adrees;
            num.innerHTML = user.num;
            password.innerHTML = user.password;
            username.innerHTML = user.username;

        } else {
            let domain = id.search('head');
            let finnId = id.substring(0, domain)
            window.location.assign(`${finnId}/login.html`)
        }
    } else {
            let domain = id.search('head');
            let finnId = id.substring(0, domain)
            window.location.assign(`${finnId}/login.html`)
    }
})

btn && btn.addEventListener('click', function() {
    let isDelete = confirm('Rostan ham ochirmoqchimisz ?')
    if (isDelete) {
        localStorage.removeItem('currentUser');
        const id = window.location.href;
        console.log(id);
        let domain = id.search('head');
        console.log(domain);
        let finnId = id.substring(0, domain)
        console.log(finnId);
        window.location.assign(`${finnId}./login/login.html`)
    }
})