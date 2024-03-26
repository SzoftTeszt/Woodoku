
function hanyadik(elem){
    let sz=0;
    while(elem.previousElementSibling){
        sz++;
        elem=elem.previousElementSibling
    }
    return sz;
}
function kever(){
    for (let i = 0; i < 3; i++) {
       
        
    
    let cella=null
    let ures= document.getElementsByClassName("ures")[0]
    let sorszam=hanyadik(ures)
    switch (Math.round(Math.random()*3)){
    case 0:
        if (ures.nextElementSibling) cella=ures.nextElementSibling
        break
    case 1:
       if (ures.previousElementSibling) cella=ures.previousElementSibling
        break
    case 2:
        if (ures.parentNode.previousElementSibling)
        cella= ures.parentNode.previousElementSibling.children[sorszam]
        break
    case 3:
        if (ures.parentNode.nextElementSibling) 
        cella=ures.parentNode.nextElementSibling.children[sorszam]
        break
    }
    if (!cella) i--
    else csere(cella)
}

}

function csere(cella){
    let ures= document.getElementsByClassName("ures")[0]
    ures.innerHTML=cella.innerHTML
    cella.innerHTML="";
    ures.addEventListener("click", mozgat)
    ures.className="cella"
    cella.className="ures"
    cella.removeEventListener("click", mozgat)
}

function mozgat(){
    mozgas(this)
}

function mozgas(cella){
    let sorszam=hanyadik(cella)
    let ures= document.getElementsByClassName("ures")[0]
    let mozgott=false

    if (cella.nextElementSibling && cella.nextElementSibling.className=="ures")
    {
        cella.classList.add('jobb')
        mozgott=true
    }

    if (cella.previousElementSibling && cella.previousElementSibling.className=="ures"){
        cella.classList.add('bal')
        mozgott=true
    }


    if (cella.parentNode.previousElementSibling && cella.parentNode.previousElementSibling.children[sorszam].className=="ures"){
        cella.classList.add('fel') 
        mozgott=true
    }

    if (cella.parentNode.nextElementSibling && cella.parentNode.nextElementSibling.children[sorszam].className=="ures"){
        cella.classList.add('le') 
        mozgott=true
    }

    if (mozgott){ 
        setTimeout(()=>{   
            ures.innerHTML=cella.innerHTML
            cella.innerHTML="";
            ures.addEventListener("click", mozgat)
            ures.className="cella"
            cella.className="ures"
            cella.removeEventListener("click", mozgat)
            gyoztunke()
        },300)
    }
    
}
function gyoztunke(){
    cellak = document.querySelectorAll(".sor div")
    for (let i = 0; i < cellak.length; i++) {
        if ( cellak[i].innerHTML==i+1)        
            cellak[i].classList.add('green')
        else cellak[i].classList.remove('green')        
    }
    jok = document.getElementsByClassName("green")
    if (jok.length==8) alert("Kiraktad! Isten vagy!")
}

function palyaEpito(){
    let cella = document.createElement('div');
    cella.className="cella"    

    let sor = document.createElement('div')
    sor.className="sor"

    // sor.appendChild(cella)
    // sor.appendChild(cella.cloneNode(true))   

    for (let i = 0; i < 3; i++) 
        sor.appendChild(cella.cloneNode(true))

    for (let i = 0; i < 3; i++) 
       document.getElementsByClassName('palya')[0].appendChild(sor.cloneNode(true))
    
    //    for (let i = 0; i < 20; i++){    
    //           let y = Math.round(Math.random()*2)
    //           console.log(y)
    //    }

    // let y = Math.round(Math.random()*2)
    // let x = Math.round(Math.random()*2)

    // document.getElementsByClassName('palya')[0].children[y].children[x].classList.remove('cella')
    // document.getElementsByClassName('palya')[0].children[y].children[x].classList.add('ures')
    
    document.getElementsByClassName('palya')[0].children[2].children[2].classList.remove('cella')
    document.getElementsByClassName('palya')[0].children[2].children[2].classList.add('ures')


    let cellak=document.getElementsByClassName('cella')
    for (let i = 0; i < cellak.length; i++) {
        cellak[i].innerHTML=i+1;
        cellak[i].addEventListener("click", mozgat)
    }
}

palyaEpito()
kever()