import { ta } from './soma.js';
import { to } from './sub.js';
import { al } from './mult.js';
import { tt } from './div.js';

const display = document.getElementById('display');
let n1 = '';
let n2 = '';
let operacao = null;

// Captura os cliques nos números
document.querySelectorAll('.num').forEach(btn => {
    btn.onclick = () => {
        // Se não escolheu a operação, preenche o primeiro número, senão o segundo
        if (!operacao) {
            n1 += btn.innerText;
            display.value = n1;
        } else {
            n2 += btn.innerText;
            display.value = n2;
        }
    };
});

// Captura o clique no operador
document.querySelectorAll('.op').forEach(btn => {
    btn.onclick = () => {
        if (n1 !== '') operacao = btn.getAttribute('data-type');
    };
});

// Botão Limpar
document.getElementById('clear').onclick = () => {
    n1 = ''; n2 = ''; operacao = null;
    display.value = '0';
};

// Botão Igual - Onde as funções do professor entram
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
        
        // Reseta para o próximo cálculo usando o resultado como base
        n1 = resultado.toString();
        n2 = '';
        operacao = null;
    }
};