// Даны N инпутов с классом .num и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац с id="result".

function multiplication(){
    let numbers = document.getElementsByClassName('num');
    let result = document.getElementById('result');

    return result === isNaN ?  'mistake' :  result.innerHTML = `${+numbers[0].value + +numbers[1].value}`;
    
   
}
multiplication();
