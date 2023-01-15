let login = document.querySelector('.login');
let create = document.querySelector(`.create`);
let container = document.querySelector('.container');
let signIn = document.querySelector('.signin');
let signUp = document.querySelector('.signup');



signIn.style.display = 'none';

login.onclick = function(e){

    e.preventDefault();
    signUp.style.display = 'none';
    signIn.style.display = 'flex';
}




create.onclick = function(e){
    e.preventDefault();
    signUp.style.display = 'flex'; 
    signIn.style.display = `none`
}


const username = document.querySelector(`.name`);
const email = document.querySelector(`.email`);
const password = document.querySelector(`.password`);
const passwordConfirm = document.querySelector(`.trypassword`);
const btnUp = document.querySelector(`#btnUp`);


let arr = [];


btnUp.addEventListener(`click`, (e) => {
    e.preventDefault();
    let login ={
        name:username.value,
        email:email.value,
        password:password.value,
        confirmPsw:passwordConfirm.value,
    }

    if(login.name && login.email && login.password && login.confirmPsw){
        const isPassTrue = login.password === login.confirmPsw
        if(isPassTrue){
            arr.push(login)
            console.log(arr);
            alert(`You have successfully logged in`)
            signUp.style.display = 'none';
            signIn.style.display = 'flex';

        }else{
            alert (`error password`)
        } 
    }else{
        alert (`Please fill all the fields`)
    }
    
})


const btnIn = document.querySelector(`#btnIn`);


btnIn.addEventListener(`click`, (e) => {
    e.preventDefault();

    const signIn ={
        name:username.value,
        password:password.value,
    }

    for(let i = 0 ; i<arr.length; i++) {
        if(arr[i].name!= signIn.name || arr[i].password != signIn.password){
        alert(`Error check it out`) 
        }else{
            alert(`Welcome to the website`)
        }
    }
})
