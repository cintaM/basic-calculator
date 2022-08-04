document.querySelector('#btn').addEventListener('click', () =>{
    const n1 = parseInt(document.querySelector('#height').value);
    const n2 = parseInt(document.querySelector('#weight').value);
    let r;
    if(n1 && n2){
        r = n2/ (n1*n1)
    }else if( !n1 || !n2){
        r = "error"
    }
    
    document.querySelector('#result').innerHTML = r;
});