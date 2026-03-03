import { ta } from './soma.js';
import { to } from './sub.js';
import { al } from './mult.js';
import { tt } from './div.js';

const display = document.getElementById('display');
let n1 = '';
let n2 = '';
let operacao = null;

document.querySelectorAll('.num').forEach(btn => {
    btn.onclick = () => {
        
        if (!operacao) {
            n1 += btn.innerText;
            display.value = n1;
        } else {
            n2 += btn.innerText;
            display.value = n2;
        }
    };
});

document.querySelectorAll('.op').forEach(btn => {
    btn.onclick = () => {
        if (n1 !== '') operacao = btn.getAttribute('data-type');
    };
});

document.getElementById('clear').onclick = () => {
    n1 = ''; n2 = ''; operacao = null;
    display.value = '0';
};

document.getElementById('equal').onclick = () => {
    if (n1 && n2 && operacao) {
        let num1 = Number(n1);
        let num2 = Number(n2);
        let resultado;

        if (operacao === 'soma') resultado = ta(num1, num2);
        if (operacao === 'sub')  resultado = to(num1, num2);
        if (operacao === 'mult') resultado = al(num1, num2);
        if (operacao === 'div')  resultado = tt(num1, num2);

        display.value = resultado;

        n1 = resultado.toString();
        n2 = '';
        operacao = null;
    }

};


