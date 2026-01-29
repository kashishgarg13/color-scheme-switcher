const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    
    button.addEventListener('click' , function(e){
        console.log(e);
        if(e.target.id == 'orange'){
            body.style.backgroundColor = 'orange'
        }
        if(e.target.id == 'white'){
            body.style.backgroundColor = 'white'
        }
        if(e.target.id == 'blue'){
            body.style.backgroundColor = 'blue'
        }
        if(e.target.id == 'green'){
            body.style.backgroundColor = 'green'
        }
    })
})