const emoji = document.getElementById("mood")

const button = document.getElementById("btn")

button.addEventListener('click',function(){
    console.log(emoji.src);
    if(emoji.src.match('happy')){
         emoji.src= 'sad.gif';
         button.innerHTML='happy'

    }else{
        emoji.src='happy.gif'
        button.innerHTML='sad'
    }
})