function verificar(){
    var data= new Date()
    var ano= data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.querySelector('div#res')
    if(fano.value.length==0|| Number(fano.value)>ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        var fsex= document.getElementsByName('radsex')
        var idade= ano -Number(fano.value)
        var gênero=''
        var img= document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gênero='Homem'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src','foto-criança-m.jpg')
            }else if(idade<21){
                //jovem
                img.setAttribute('src','jovem-m.jpg')
            }else if(idade<50){
                //Adulto
                img.setAttribute('src','foto-Adulto-m.jpg')
            } else{
                //idoso
                img.setAttribute('src','foto-idoso-m.jpg')
            }           
                             
        }else if(fsex[1].checked){
            gênero='Mulher'
            if (idade>=0 && idade<10){
                //criança 
                img.setAttribute('src','foto-criança-f.jpg')
            }else if(idade<21){
                //jovem
                img.setAttribute('src','foto-jovem-f.jpg')
            }else if(idade<50){
                //Adulto
                img.setAttribute('src','foto-adulta-f.jpg')
            }else{
                //idoso
                img.setAttribute('src','foto-idosa-f.jpg')
            }
                      
        }
       res.innerHTML=`Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}