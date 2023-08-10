const form = document.getElementById('form-contatos')
const contatos = []
const numeros = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaNumeroContatos()    
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroTelefone = document.getElementById('numero-telefone')

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi adicionado`)
    } else {
        contatos.push(inputNomeContato.value)
        numeros.push(parseFloat(inputNumeroTelefone.value))

        let linha = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputNumeroTelefone.value}</td>`
        linha += `</tr>`

        linhas += linha
    }

    inputNomeContato.value = ''
    inputNumeroTelefone.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaNumeroContatos () {
    const somaContatos = calculaSomaContatos()

    document.getElementById('soma-final-contatos').innerHTML = somaContatos
}

function calculaSomaContatos() {
    let somaDosContatos = 0

    for (let i = 0; i < numeros.length; i++) {
        somaDosContatos += numeros[i]
    }

    return somaDosContatos
}