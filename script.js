const inputTel = document.querySelectorAll('#contato-telefone');

inputTel.forEach(input => {
    input.addEventListener('input', e => {
        typedTextArr= e.target.value.split('');

        const typedNumsArr = 
        typedTextArr
        .filter(t => Number.isInteger(Number(t)) && t !== ' ')
        .slice(0, 11);
        
        console.log('typedNumsArr :', typedNumsArr);


        const maskedArr = typedNumsArr
        
        if(maskedArr.length > 1){
            maskedArr.splice(0,0, '(');
        } 
        if(maskedArr.length > 3 ){
            maskedArr.splice(3, 0, ')');
        }
        if(maskedArr.length > 4){
            maskedArr.splice(4, 0, ' ');
        }
        if(maskedArr.length > 9){
            maskedArr.splice(9, 0, '-');
        }
        
        e.target.value = maskedArr.join('');
    });
})

