const programData ={}

async function fetchData(){
  try{
    let response = await fetch('https://api.github.com/users/CPSoftwareC/repos', {method: 'GET'})
    let data = await response.json()
    const repos = data.filter(repo => !repo.fork)
    
    console.log(repos)
  }catch(err){
    console.log('Error no try')
  }
}
fetchData()

function abrirMenu(){
    document.getElementById("menuOculto").style.width="250px"
    document.getElementById("principal").style.marginLeft="250px"
  }
  function fecharMenu(){
    document.getElementById("menuOculto").style.width="0"
    document.getElementById("principal").style.marginLeft="0"
  }
  function quimicaBtn(){
    var pontos = document.getElementById("pontosquimica")
    var maisTexto = document.getElementById("maisquimica")
    var btnalterar = document.getElementById("btnquimica")

    if(pontos.style.display === "none"){
        pontos.style.display = "inline"
        maisTexto.style.display = "none"
        btnalterar.innerHTML = "Ler mais"
    }else{
        pontos.style.display = "none"
        maisTexto.style.display = "inline"
        btnalterar.innerHTML = "Ocultar"
    }
}
  function fisicaBtn(){
    var pontos = document.getElementById("pontosfisica")
    var maisTexto = document.getElementById("maisfisica")
    var btnalterar = document.getElementById("btnfisica")

    if(pontos.style.display == "none"){
      pontos.style.display = "inline"
      maisTexto.style.display = "none"
      btnalterar.innerHTML = "Ler mais"
    }else{
      pontos.style.display = "none"
      maisTexto.style.display = "inline"
      btnalterar.innerHTML = "Ocultar"
    }
  }
  function cnvrsaoBtn(){
    var pontos = document.getElementById("pontoscnvrsao")
    var maisTexto = document.getElementById("maiscnvrsao")
    var btnalterar = document.getElementById("btncnvrsao")

    if(pontos.style.display == "none"){
      pontos.style.display = "inline"
      maisTexto.style.display = "none"
      btnalterar.innerHTML = "Ler mais"
    }else{
      pontos.style.display = "none"
      maisTexto.style.display = "inline"
      btnalterar.innerHTML = "Ocultar"
    }
  }
  function tabBtn(){
    var pontos = document.getElementById("pontostab")
    var maisTexto = document.getElementById("maistab")
    var btnalterar = document.getElementById("btntab")

    if(pontos.style.display == "none"){
      pontos.style.display = "inline"
      maisTexto.style.display = "none"
      btnalterar.innerHTML = "Ler mais"
    }else{
      pontos.style.display = "none"
      maisTexto.style.display = "inline"
      btnalterar.innerHTML = "Ocultar"
    }
  }
  function retaperpBtn(){
    var pontos = document.getElementById("pontosrtperp")
    var maisTexto = document.getElementById("maisrtperp")
    var btnalterar = document.getElementById("btnretaperp")

    if(pontos.style.display == "none"){
      pontos.style.display = "inline"
      maisTexto.style.display = "none"
      btnalterar.innerHTML = "Ler mais"
    }else{
      pontos.style.display = "none"
      maisTexto.style.display = "inline"
      btnalterar.innerHTML = "Ocultar"
    }
  }
  function normaveBtn(){
    var pontos = document.getElementById("pontosnormave")
    var maisTexto = document.getElementById("maisnormave")
    var btnalterar = document.getElementById("btnnormave")

    if(pontos.style.display == "none"){
      pontos.style.display = "inline"
      maisTexto.style.display = "none"
      btnalterar.innerHTML = "Ler mais"
    }else{
      pontos.style.display = "none"
      maisTexto.style.display = "inline"
      btnalterar.innerHTML = "Ocultar"
    }
  }
  function normavepBtn(){
    var pontos = document.getElementById("pontosnormavep")
    var maisTexto = document.getElementById("maisnormavep")
    var btnalterar = document.getElementById("btnnormavep")

    if(pontos.style.display == "none"){
      pontos.style.display = "inline"
      maisTexto.style.display = "none"
      btnalterar.innerHTML = "Ler mais"
    }else{
      pontos.style.display = "none"
      maisTexto.style.display = "inline"
      btnalterar.innerHTML = "Ocultar"
    }
  }
  function vetorBtn(){
    var pontos = document.getElementById("pontosvetor")
    var maisTexto = document.getElementById("maisvetor")
    var btnalterar = document.getElementById("btnvetor")

    if(pontos.style.display == "none"){
      pontos.style.display = "inline"
      maisTexto.style.display = "none"
      btnalterar.innerHTML = "Ler mais"
    }else{
      pontos.style.display = "none"
      maisTexto.style.display = "inline"
      btnalterar.innerHTML = "Ocultar"
    }
  }
  function esferaBtn(){
    var pontos = document.getElementById("pontosesfera")
    var maisTexto = document.getElementById("maisesfera")
    var btnalterar = document.getElementById("btnesfera")

    if(pontos.style.display == "none"){
      pontos.style.display = "inline"
      maisTexto.style.display = "none"
      btnalterar.innerHTML = "Ler mais"
    }else{
      pontos.style.display = "none"
      maisTexto.style.display = "inline"
      btnalterar.innerHTML = "Ocultar"
    }
  }
  function darkBtn(){
    var pontos = document.getElementById("pontosdark")
    var maisTexto = document.getElementById("maisdark")
    var btnalterar = document.getElementById("btndark")

    if(pontos.style.display == "none"){
      pontos.style.display = "inline"
      maisTexto.style.display = "none"
      btnalterar.innerHTML = "Ler mais"
    }else{
      pontos.style.display = "none"
      maisTexto.style.display = "inline"
      btnalterar.innerHTML = "Ocultar"
    }
  }