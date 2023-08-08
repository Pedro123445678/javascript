function carregar(){
    var msg=window.document.getElementById("msg")
    var img=window.document.getElementById("imagem")
    var data=new Date()
    var hora=data.getHours()
    msg.innerHTML=`Agora são ${hora}horas.`
    if(hora>=0 && hora<12){
       //BOM DIA!
       img.src='./img/fotomanha.png'
       document.body.style.background='#e2cd9f' 
    }else if (hora>=12 && hora< 18){
        // BOM TARDE!
        img.src='./img/fototarde.png'
        document.body.style.background='#69846f'
    }else{
        // BOA NOITE!
        img.src='./img/fotonoite.png'
        document.body.style.background='#515154'
    }
        
    
    }