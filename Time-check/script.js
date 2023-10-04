function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#D6DEDC'
    }
    else if (hora >=12 && hora <=18){
        img.src = 'tarde.png'
        document.body.style.background = '#9B943D'
    }
    else {
        img.src = 'noite.png'
        document.body.style.background = '#523268'
    }

}
