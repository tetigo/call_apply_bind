print('---------------------------')

const a = {
    nome: 'tiago'
}
const b = {
    nome: 'marta'
}

//funcao definida no contexto global
//atencao que no contexto global nao foi definido
//nenhum valor para (this.nome)
function teste(x, y){
    print(`${this.nome} = ${x+y}`)
}
//chamando direto nao tem (this.nome) no contexto global
//portanto vai aparecer 'undefined' para o (this.nome)
teste(5,5)

//chamando usando objeto (a) como contexto para (this.nome)
//esse objeto (a) contem propriedade nome que podemos usar emprestado
//passando tambem valores para x e y que está na definicao da funcao
teste.call(a, 5, 5)

//chamando usando objeto (b) como contexto para (this.nome)
//igual funcao call acima mas ao invez de usar valores um por um
//para x e y, usamos vetor
const vet = [5, 5]
teste.apply(b, vet)

//bind devolve uma nova funcao ligando um objeto para o contexto
//podemos prefixar os valores das variaveis caso desejar
//neste caso nao foi prefixado valores para x e y
const novo = teste.bind(a)
novo(15, 15)

//neste caso, alem de usar objeto (b) como contexto para this.nome
//prefixamos o valor de x da funcao com 50
const novo2 = teste.bind(b, 50)
//chamada da funcao precisa apenas de usar valor de y
novo2(70)

//neste caso prefixamos ambos os valores de x e y
const novo3 = teste.bind(a, 500, 500)
//entao nao é preciso chamar passando valores para x e y
novo3()

//funcao definida no contexto global
//essa funcao nao faz uso de (this)
function teste2(x, y){
    print(`total = ${x + y}`)
}
//como a funcao original (teste2) nao faz uso do contexto
//passamos (null ou undefined) para o primeiro parametro
//que espera receber algo para setar o novo contexto
const novo4 = teste2.bind(null, 111, 222)
novo4()

print('---------------------------')

