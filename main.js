let login = document.querySelector('.login');
        let create = document.querySelector(`.create`);
        let container = document.querySelector('.container');

        console.log(login);
        login.onclick = function(e){
            e.preventDefault();
            container.classList.add(`signinForm`);
        }

        create.onclick = function(e){
            e.preventDefault();
            container.classList.remove(`signinForm`); 
}
