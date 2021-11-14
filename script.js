/*const name = 'Suca';
console.log(name);

function somma(num1, num2){
    console.log (num1 + num2);
}

function somma (num1, num2){
    let risultato = num1 + num2;
    return risultato;
}

let risultatoSomma = somma (2, 3);
console.log (risultatoSomma);

const x = 4;

if (x== 3) {
    console.log('x contiene 3');
}
else {
    console.log('x non contiene 3');
}*/

const elem1 = document.getElementById('test js');
console.log(elem1);
console.log(elem1.innerText);

const elem2 = document.getElementById('input test');
console.log(elem2);
console.log(elem2.value);

elem1.style.color = 'red';


const submit = document.getElementById('test cta');
submit.addEventListener('click', function(){
console.log('form inviato');
});

const btpButton = document.getElementById('btp-button');
btpButton.addEventListener('click', function(){
    window.scrollTo ('0, 0');
});

/* per far vedere il bottone solo allo scroll, vado mettere in ascolto
lo scroll, non il bottone, quindi la mia "variabile" da ascoltare sarà
window. La funzione chiamata si chiama di callback*/

window.addEventListener('scroll', function(){
    let posy = window.scrollY;

    if (posy > 0){
        btpButton.style.display = 'block'; /*faccio tornare il bottone visibile*/
    } else {
        btpButton.style.display = 'none';
    }
})
