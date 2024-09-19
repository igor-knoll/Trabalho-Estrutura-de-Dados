import { cadastros } from "./cadastro.mjs";

function bubbleSort(vetor, fnComp) {
    let trocou;

    // Algoritmo Bubble Sort para ordenar o vetor
    do {
        trocou = false;
        for (let i = 0; i < vetor.length - 1; i++) {
            if (fnComp(vetor[i], vetor[i + 1])) {
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
                trocou = true;
            }
        }
    } while (trocou);
}

// Atribui o resultado (Aprovado/Reprovado) com base na média
cadastros.forEach((cadastro) => {
    if (cadastro.Media >= 6) {
        cadastro.Resultado = 'Aprovado';
    } else {
        cadastro.Resultado = 'Reprovado';
    }
});

// Filtra apenas os cadastros aprovados
const aprovados = cadastros.filter(cadastro => cadastro.Resultado === 'Aprovado');

// Ordena os aprovados em ordem alfabética pelo nome
bubbleSort(aprovados, (elem1, elem2) => elem1.Nome > elem2.Nome);

// Exibe os aprovados ordenados
console.log('Aprovados:', aprovados);

