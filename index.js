const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacci(n) {
    let fibSeq = [0, 1];
    while (fibSeq[fibSeq.length - 1] < n) {
        fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
    }

    if (fibSeq.includes(n)) {
        return `O número ${n} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${n} NÃO pertence à sequência de Fibonacci.`;
    }
}

function contarLetrasA(string) {
    let contador = 0;
    for (let letra of string) {
        if (letra.toLowerCase() === 'a') {
            contador++;
        }
    }
    return `A letra 'a' apareceu ${contador} vezes na string.`;
}

function calcularSoma(indice) {
    let soma = 0;
    for (let k = 1; k < indice; k++) {
        soma += k + 1; 
    }
    return soma; 
}


function completarSequencias() {
    return {
        a: 9,     // 1, 3, 5, 7, (9) (respostas)
        b: 128,   // 2, 4, 8, 16, 32, 64, (128) (respostas)
        c: 49,    // 0, 1, 4, 9, 16, 25, 36, (49) (respostas)
        d: 100,   // 4, 16, 36, 64, (100) (respostas)
        e: 13,    // 1, 1, 2, 3, 5, 8, (13) (respostas)
        f: 20     // 2, 10, 12, 16, 17, 18, 19, (20) (respostas)
    };
}


function descobrirInterruptores() {
    return [
        "1. Ligue o primeiro interruptor e espere alguns minutos.",
        "2. Desligue o primeiro interruptor e ligue o segundo.",
        "3. Vá até a sala das lâmpadas:",
        "   - Lâmpada acesa: segundo interruptor.",
        "   - Lâmpada apagada e quente: primeiro interruptor.",
        "   - Lâmpada apagada e fria: terceiro interruptor."
    ];
}


function pergunta(promptText) {
    return new Promise((resolve) => {
        rl.question(promptText, (answer) => {
            resolve(answer);
        });
    });
}


async function menu() {
    const escolha = await pergunta("Escolha uma opção:\n1. Verificar número na sequência de Fibonacci\n2. Contar letras 'a' em uma string\n3. Calcular soma\n4. Completar sequências\n5. Descobrir interruptores\nEscolha: ");

    switch (escolha) {
        case '1':
            const numero = parseInt(await pergunta("Informe um número: "));
            console.log(fibonacci(numero));
            break;
        case '2':
            const string = await pergunta("Informe uma string: ");
            console.log(contarLetrasA(string));
            break;
        case '3':
            const indice = parseInt(await pergunta("Informe um índice: "));
            console.log(`A soma é: ${calcularSoma(indice)}`);
            break;
        case '4':
            const sequencias = completarSequencias();
            console.log(`Próximos elementos:\nA: ${sequencias.a}\nB: ${sequencias.b}\nC: ${sequencias.c}\nD: ${sequencias.d}\nE: ${sequencias.e}\nF: ${sequencias.f}`);
            break;
        case '5':
            const passos = descobrirInterruptores();
            console.log(passos.join("\n"));
            break;
        default:
            console.log("Opção inválida!");
    }

    rl.close();
}

menu(); 
