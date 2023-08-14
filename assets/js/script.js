const button = document.getElementById('btn');

button.addEventListener('click', function(){
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    
    let res = Math.floor(Math.random() * (max - min + 1)) + min;

    if(isNaN(res)){
        res = 'O campo não pode ficar vazio';
        document.querySelector("#res > span").style.fontSize="30px"
    }
    

    document.querySelector('#res > span').textContent = res
    if(res >= 1){
        document.querySelector("#res > span").style.fontSize="50px"
    }

})