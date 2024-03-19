console.log("helló")

function hanyadik(elem){
    let sz=0;
    while(elem.previousElementSibling){
        sz++;
        elem=elem.previousElementSibling
    }
    return sz;
}

function mozgat(){
    let sorszam=hanyadik(this)
    let ures= document.getElementsByClassName("ures")[0]
    let mozgott=false

    if (this.nextElementSibling && this.nextElementSibling.className=="ures")
    {
        this.classList.add('jobb')
        mozgott=true
    }

    if (this.previousElementSibling && this.previousElementSibling.className=="ures"){
        this.classList.add('bal')
        mozgott=true
    }


    if (this.parentNode.previousElementSibling && this.parentNode.previousElementSibling.children[sorszam].className=="ures"){
        this.classList.add('fel') 
        mozgott=true
    }

    if (this.parentNode.nextElementSibling && this.parentNode.nextElementSibling.children[sorszam].className=="ures"){
        this.classList.add('le') 
        mozgott=true
    }

    if (mozgott){ 
        setTimeout(()=>{   
            ures.innerHTML=this.innerHTML
            this.innerHTML="";
            ures.addEventListener("click", mozgat)
            ures.className="cella"
            this.className="ures"
            this.removeEventListener("click", mozgat)
        },300)
    }
    
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