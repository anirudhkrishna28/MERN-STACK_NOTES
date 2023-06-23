let user_name = document.getElementById('user')

let password = document.getElementById('pass')

let button = document.getElementById('button')

let form = document.getElementById('submit')

button.addEventListener('click',(event) => {
    console.log('click');
})

form.addEventListener('submit',(event) => {
    event.preventDefault();
    console.log(user_name.value,password.value);
})

