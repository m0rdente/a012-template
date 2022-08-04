/* const bool1 = false
const bool2 = true
const bool3 = 10 */

/* if(bool1){

alert("Entrou no if. Bool1 é true")

}else{
    alert("Entrou no else. Bool1 é false")
} */


/* if(bool1 === bool2){
alert("O valor de bool1 e bool2 são iguais")

}else if(bool2 === bool3){
    
alert("O valor de bool2 e bool3 são iguais")
}else if(bool1 === bool3){

alert("O valor de bool1 e bool3 são iguais")    
}
else{
alert("não existem valores iguais")
} */

/* let idade = 10

if(idade >= 60 || idade >= 16 && idade < 18){
console.log("Titulo facultativo")
}else if (idade >= 18){
    console.log("Tem direito ao titulo de eleitor")
}else{
    console.log ("Você não tem a idade minima para emissão do titulo de eleitor")
} */


let media = prompt("Qual é a sua nota?")

if(media >= 5){
    alert("Você está aprovado")
}else if (media >= 3){
    alert("Recuperação")
}else if (media < 3){
    alert("Você está reprovado")
}else{
alert("Dado invalido")
}
