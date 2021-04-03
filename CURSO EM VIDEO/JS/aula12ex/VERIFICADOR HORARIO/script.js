function carregar(){
   var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        img.src = 'img/manhaok.png'
        document.body.style.background = "#c9d8de"
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tardeok.png'
        document.body.style.background = "#e9a479"
    } else {
        img.src = 'img/noiteok.png'
        document.body.style.background = "#2c444c"
    }
}