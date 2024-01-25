import { getData } from "../register/register.js"
// console.log(getData());

const username = document.getElementById('usernamelogin');
const loginpassword = document.getElementById('loginpassword');
const loginbtn = document.getElementById('loginbtn');
const aRegis = document.getElementById('aRegister');

function validateLogin(data) {

    if (!data.username.value) {
        alert('username bolishi shart')
        data.username.focus();
        return false;
    }

    if (!data.loginpassword.value) {
        alert('password bolishi shart')
        data.loginpassword.focus();
        return false;
    }
    return true
}

loginbtn && loginbtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (validateLogin({loginpassword, username})) {
        let data = getData();
        let user = data.find(el => {
            return el.username == username.value;
        })

        if (user && user.password == loginpassword.value) {

            localStorage.setItem('currentUser', username.value)

            const id = window.location.href;
            let domain = id.search('login');
            let finnId = id.substring(0, domain)
            console.log(finnId);
            form.reset();
            window.location.assign(`${finnId}/head.html`)
        } else {
            alert('password mos emas')
        }
    }
}) 

aRegis && aRegis.addEventListener('click', function(e) {
    e.preventDefault();

    const id = window.location.href;
    console.log(id);
    let domain = id.search('login/login');
    console.log(domain);
    let finnId = id.substring(0, domain)
    console.log(finnId);
    window.location.assign(`${finnId}./register/register.html`)
})