let projetoUm = document.getElementById("Um")
let projetoDois = document.getElementById("Dois")
let projetoTres = document.getElementById("Tres")
let projetoQuatro = document.getElementById("Quatro")
let projetoCinco = document.getElementById("Cinco")

let valorHoraUm = document.getElementById("valorHoraProjetoUm")
let valorHoraDois = document.getElementById("valorHoraProjetoDois")
let valorHoraTres = document.getElementById("valorHoraProjetoTres")
let valorHoraQuatro = document.getElementById("valorHoraProjetoQuatro")
let valorHoraCinco = document.getElementById("valorHoraProjetoCinco")

let quantidadeHorasUm = document.getElementById("quantidadeHorasProjetoUm")
let quantidadeHorasDois = document.getElementById("quantidadeHorasProjetoDois")
let quantidadeHorasTres = document.getElementById("quantidadeHorasProjetoTres")
let quantidadeHorasQuatro = document.getElementById("quantidadeHorasProjetoQuatro")
let quantidadeHorasCinco = document.getElementById("quantidadeHorasProjetoCinco")

let projetos = document.getElementById("totalProjetos")

function ValorSomaProjetos() {
    let resultadoProjetoUm = Number(valorHoraUm.value) * Number(quantidadeHorasUm.value)
    let resultadoProjetoDois =  Number(valorHoraDois.value) * Number(quantidadeHorasDois.value)
    let resultadoProjetoTres =  Number(valorHoraTres.value) * Number(quantidadeHorasTres.value)
    let resultadoProjetoQuatro =  Number(valorHoraQuatro.value) * Number(quantidadeHorasQuatro.value)
    let resultadoProjetoCinco = Number(valorHoraCinco.value) * Number(quantidadeHorasCinco.value)
    
    let totalTodosProjetos = resultadoProjetoUm + resultadoProjetoDois + resultadoProjetoTres + resultadoProjetoQuatro + resultadoProjetoCinco
   
    document.getElementById("resultadoUm").value = resultadoProjetoUm
    document.getElementById("resultadoDois").value = resultadoProjetoDois
    document.getElementById("resultadoTres").value = resultadoProjetoTres
    document.getElementById("resultadoQuatro").value = resultadoProjetoQuatro
    document.getElementById("resultadoCinco").value = resultadoProjetoCinco
    document.getElementById("resultadoTotal").value = totalTodosProjetos

    projetos.textContent = `O valor total é de R$ ${totalTodosProjetos.toFixed(2)}`
    alert(`O valor total é de R$ ${totalTodosProjetos.toFixed(2)}`)
 }