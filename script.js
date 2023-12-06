let adicionar = document.getElementById("adicionar");
let afazer = document.getElementById("afazer");
let texto = document.getElementById("texto")
let botaofinish = document.getElementById("finish");
let botaofinish2 = document.getElementById("finish2")
let tarefacompleta = document.getElementById("tarefacompleta")

adicionar.addEventListener("click", function(){
    let paragrafo = document.createElement("p");
    paragrafo.classList.add('paragrafostyle');
    paragrafo.innerText = texto.value; 
    afazer.appendChild(paragrafo);
    texto.value = ""
    texto.focus()
    paragrafo.addEventListener("click", function(){
        afazer.removeChild(paragrafo);
        tarefacompleta.appendChild(paragrafo);
        texto.value = ""
        texto.focus()
    })
    botaofinish.addEventListener("click", function(){
        afazer.removeChild(paragrafo);
        tarefacompleta.appendChild(paragrafo);
        texto.value = ""
        texto.focus()
    })
    botaofinish2.addEventListener("click", function(){
        tarefacompleta.removeChild(paragrafo);
        texto.value = ""
        texto.focus()
    })
    
})