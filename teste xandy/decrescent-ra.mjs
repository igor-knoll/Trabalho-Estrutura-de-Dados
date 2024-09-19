function bubbleSort(vetor, fnComp) {

    let trocou

    do {
        trocou = false
        for(let i = 0; i < vetor.length - 1; i++) {
            if(fnComp(vetor[i], vetor[i + 1])) {
                [ vetor[i], vetor[i + 1] ] = [ vetor[i + 1], vetor[i] ]
                trocou = true
            }
        }

    } while(trocou)
}

import { cadastros } from "./cadastro.mjs"


bubbleSort(cadastros, (elem1, elem2) => elem1.RA < elem2.RA)

console.log(cadastros)