
function copy(){
    debugger
 let inputIn = document.querySelector('#i-1').value;
 if(inputIn){
     document.querySelector('#i-2').value = inputIn;
     console.log(inputIn);
 }
 else if(inputIn === /\s+/g){alert('Введены пробелы')}
 else alert('Введены неккоректные данные')
}

