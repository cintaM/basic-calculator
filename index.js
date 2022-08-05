document.querySelector('#btn').addEventListener('click', () =>{
    const n1 = parseInt(document.querySelector('#height').value);
    const n2 = parseInt(document.querySelector('#weight').value);
    let r;
    if(n1 && n2){
        r = n2/ (n1*n1)
    }else if( !n1 ){
        r = "Introduce your height"
    }else if(!n2){
        r = "Introduce your weight"
    }
    document.querySelector('#result').innerHTML = r;
});