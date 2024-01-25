const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const adrees = document.getElementById('email');
const num = document.getElementById('number');
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const btn = document.getElementById('btn');
const ahref = document.getElementById('aLogin')

const validateEmail = (e) => {
    return String(e)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

function getData() {
    let data = [];

    if (localStorage.getItem('users')) {
        data = JSON.parse(localStorage.getItem('users'));
    }
    return data;
}

function validate(data) {
    if (!data.name.value) {
        alert('isim kiritilishi shart');
        data.name.focus()
        return false
    }

    if (data.name.value.trim().length < 3) {
        alert('isim tolliq kiritilishi shart');
        data.name.focus()
        return false
    }

    if (!Number(data.num.value)) {
        alert('tel raqam kiritilishi shart');
        data.num.focus()
        return false
    }

    if (!data.username.value) {
        alert('username kiritilishi shart');
        data.username.focus()
        return false
    }

    if (!data.password.value) {
        alert('password kiritilishi shart');
        data.password.focus()
        return false
    }

    if (!data.repassword.value) {
        alert('parolni qayta  kiritish shart');
        data.repassword.focus()
        return false
    }

    if (data.password.value != data.repassword.value) {
        alert('parollar mos kelmadi');
        data.password.focus()
        data.repassword.value = ''
        return false
    }

    if (!validateEmail(data.adrees.value)) {
        alert('email notogri kiritildi');
        data.adrees.focus()
        return false
    }

    if (!data.adrees.value) {
        alert('emailni kiritishingiz shart');
        data.adrees.focus()
        return false
    }

    if (data.username.value) {
        let dataUser = getData();

        let isExist = dataUser.some(user => {
            return data.username.value == user.username
        })

        if (isExist) {
            alert('Bunday foydalanuvcchi mavjud');
            data.username.focus();
            return false;
        }
    }

    return true
}



btn && btn.addEventListener('click', function(e) {
    e.preventDefault();

    if (validate({name, lastname, adrees, num, username, password, repassword} )) {
        let user = {
            name: name.value,
            lastname: lastname.value,
            num: num.value,
            adrees: adrees.value,
            password: password.value,
            username: username.value,
        }

        let data = getData();
        data.push(user);
        localStorage.setItem('users', JSON.stringify(data));

        const id = window.location.href;
        let domain = id.search('register');
        let finnId = id.substring(0, domain)
        form.reset();
        window.location.assign(`${finnId}./login/login.html`)
    }
})

ahref && ahref.addEventListener('click', function(e) {
    e.preventDefault();
    const id = window.location.href;
    console.log(id);
    let domain = id.search('register');
    console.log(domain);
    let finnId = id.substring(0, domain)
    console.log(finnId);
    window.location.assign(`${finnId}/login/login.html`)
})
export { getData }